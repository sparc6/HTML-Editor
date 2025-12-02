// Editor Screen JavaScript

// Global Variables
let htmlEditor, cssEditor, jsEditor;
let currentTask = null;
let currentLanguage = 'html';
let userProgress = {
  level: 1,
  points: 0,
  completedTasks: [],
  achievements: [],
  taskStates: {}
};

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  loadUserProgress();
  initializeEditors();
  loadTask();
  setupEventListeners();
  updateProgressDisplay();
});

// Initialize CodeMirror Editors
function initializeEditors() {
  // HTML Editor
  htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlEditor"), {
    mode: "htmlmixed",
    theme: "monokai",
    lineNumbers: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    lineWrapping: true
  });

  // CSS Editor
  cssEditor = CodeMirror.fromTextArea(document.getElementById("cssEditor"), {
    mode: "css",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    lineWrapping: true
  });

  // JavaScript Editor
  jsEditor = CodeMirror.fromTextArea(document.getElementById("jsEditor"), {
    mode: "javascript",
    theme: "monokai",
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    indentUnit: 2,
    tabSize: 2,
    lineWrapping: true
  });

  // Auto-update preview on change
  htmlEditor.on('change', debounce(updatePreview, 500));
  cssEditor.on('change', debounce(updatePreview, 500));
  jsEditor.on('change', debounce(updatePreview, 500));
}

// Setup Event Listeners
function setupEventListeners() {
  // Tab switching
  document.querySelectorAll('.editor-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      switchEditorTab(tab.dataset.lang);
    });
  });

  // Control buttons
  document.getElementById('runBtn').addEventListener('click', updatePreview);
  document.getElementById('resetBtn').addEventListener('click', resetCode);
  document.getElementById('hintBtn').addEventListener('click', showHintModal);
  document.getElementById('validateBtn').addEventListener('click', validateTask);
  document.getElementById('refreshPreviewBtn').addEventListener('click', updatePreview);
  
  // Back buttons
  document.getElementById('backToHomeBtn').addEventListener('click', goBackToHome);
  document.getElementById('backToTasksBtn').addEventListener('click', goBackToTasks);

  // Hint modal
  document.getElementById('hintCloseBtn').addEventListener('click', hideHintModal);
  document.getElementById('shortHintTab').addEventListener('click', () => switchHintTab('short'));
  document.getElementById('longHintTab').addEventListener('click', () => switchHintTab('long'));

  // Success modal
  document.getElementById('nextTaskBtn').addEventListener('click', goToNextTask);
  document.getElementById('closeSuccessBtn').addEventListener('click', hideSuccessModal);
}

// Switch Editor Tab
function switchEditorTab(lang) {
  currentLanguage = lang;
  
  // Update tab buttons
  document.querySelectorAll('.editor-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === lang);
  });

  // Update editor panels
  document.querySelectorAll('.editor-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panel === lang);
  });

  // Refresh the active editor
  setTimeout(() => {
    if (lang === 'html') htmlEditor.refresh();
    else if (lang === 'css') cssEditor.refresh();
    else if (lang === 'js') jsEditor.refresh();
  }, 50);
}

// Load Task
function loadTask() {
  const urlParams = new URLSearchParams(window.location.search);
  const taskId = urlParams.get('task');
  const chapterNumber = urlParams.get('chapter');
  
  if (!taskId) {
    console.error("Task ID bulunamadı!");
    return;
  }

  // Find task
  if (chapterNumber) {
    const chapters = window.HTML_CHAPTERS || {};
    const chapter = chapters[String(chapterNumber)];
    if (chapter && chapter.tasks) {
      currentTask = chapter.tasks.find(t => t.id === taskId);
    }
  }

  if (!currentTask) {
    console.error("Görev bulunamadı!");
    return;
  }

  // Update UI
  updateTaskDisplay();
  loadStarterCode();
  updatePreview();
}

// Update Task Display
function updateTaskDisplay() {
  if (!currentTask) return;

  document.getElementById('taskTitle').textContent = currentTask.title;
  document.getElementById('taskDescription').textContent = currentTask.description;
  document.getElementById('taskDifficulty').textContent = `⭐ ${getDifficultyText(currentTask.difficulty)}`;
  document.getElementById('taskPoints').textContent = `🎯 ${currentTask.points} Puan`;
  
  // Update header info
  document.getElementById('activeTaskNumber').textContent = `Görev ${currentTask.order || '?'}`;
  document.getElementById('activeTaskTitle').textContent = currentTask.title;
}

// Load Starter Code
function loadStarterCode() {
  if (!currentTask || !currentTask.starterCode) return;

  htmlEditor.setValue(currentTask.starterCode.html || '');
  cssEditor.setValue(currentTask.starterCode.css || '');
  jsEditor.setValue(currentTask.starterCode.js || '');
}

// Reset Code
function resetCode() {
  if (!confirm('Kodu sıfırlamak istediğinizden emin misiniz?')) return;
  loadStarterCode();
  updatePreview();
}

// Update Live Preview
function updatePreview() {
  const iframe = document.getElementById('previewFrame');
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  // Build complete HTML document
  const fullHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 1rem; font-family: Arial, sans-serif; }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    try {
      ${js}
    } catch (error) {
      console.error('JavaScript Error:', error);
    }
  </script>
</body>
</html>
  `;

  // Update iframe
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(fullHTML);
  iframeDoc.close();
}

// Validate Task
function validateTask() {
  if (!currentTask || !currentTask.validation) {
    alert('Bu görev için otomatik kontrol mevcut değil.');
    return;
  }

  const iframe = document.getElementById('previewFrame');
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  const validation = currentTask.validation;
  let errors = [];

  if (validation.type === 'structure') {
    validation.rules.forEach(rule => {
      const elements = iframeDoc.querySelectorAll(rule.selector);
      
      if (rule.exists && elements.length === 0) {
        errors.push(rule.message);
      }
      
      if (rule.minCount && elements.length < rule.minCount) {
        errors.push(rule.message);
      }
    });
  }

  if (errors.length > 0) {
    alert('❌ Kontrol Başarısız:\n\n' + errors.join('\n'));
  } else {
    // Task completed!
    completeTask();
  }
}

// Complete Task
function completeTask() {
  if (!currentTask) return;

  const taskId = currentTask.id;
  
  // Check if already completed
  if (userProgress.completedTasks.includes(taskId)) {
    showSuccessModal(true);
    return;
  }

  // Add to completed tasks
  userProgress.completedTasks.push(taskId);
  
  // Add points
  userProgress.points += currentTask.points;
  
  // Update level
  userProgress.level = Math.floor(userProgress.points / 100) + 1;
  
  // Save progress
  saveUserProgress();
  updateProgressDisplay();
  
  // Show success modal
  showSuccessModal(false);
}

// Show Success Modal
function showSuccessModal(alreadyCompleted) {
  const modal = document.getElementById('successModal');
  const message = document.getElementById('successMessage');
  const points = document.getElementById('successPoints');
  
  if (alreadyCompleted) {
    message.textContent = 'Bu görevi zaten tamamladınız!';
    points.textContent = 'Tekrar tebrikler! 🎉';
  } else {
    message.textContent = `"${currentTask.title}" görevini başarıyla tamamladınız!`;
    points.textContent = `+${currentTask.points} Puan Kazandınız! 🎉`;
  }
  
  modal.style.display = 'flex';
}

// Hide Success Modal
function hideSuccessModal() {
  document.getElementById('successModal').style.display = 'none';
}

// Go to Next Task
function goToNextTask() {
  // Find next task
  const urlParams = new URLSearchParams(window.location.search);
  const chapterNumber = urlParams.get('chapter');
  
  if (chapterNumber) {
    const chapters = window.HTML_CHAPTERS || {};
    const chapter = chapters[String(chapterNumber)];
    if (chapter && chapter.tasks) {
      const currentIndex = chapter.tasks.findIndex(t => t.id === currentTask.id);
      if (currentIndex >= 0 && currentIndex < chapter.tasks.length - 1) {
        const nextTask = chapter.tasks[currentIndex + 1];
        window.location.href = `editor.html?chapter=${chapterNumber}&task=${nextTask.id}`;
        return;
      }
    }
  }
  
  // No next task, go back to task list
  goBackToTasks();
}

// Go Back to Home (Main Page)
function goBackToHome() {
  window.location.href = 'index.html';
}

// Go Back to Tasks (Task Selection - Zigzag Path)
function goBackToTasks() {
  const urlParams = new URLSearchParams(window.location.search);
  const chapterNumber = urlParams.get('chapter');
  const categoryName = urlParams.get('category');
  
  if (chapterNumber) {
    window.location.href = `task-selection.html?chapter=${chapterNumber}`;
  } else if (categoryName) {
    window.location.href = `task-selection.html?category=${categoryName}`;
  } else {
    window.location.href = 'index.html';
  }
}

// Show Hint Modal
function showHintModal() {
  if (!currentTask) return;

  const modal = document.getElementById('hintModal');
  document.getElementById('shortHintText').textContent = currentTask.shortHint || 'İpucu mevcut değil.';
  document.getElementById('longHintText').innerHTML = formatMarkdown(currentTask.longHint || 'Detaylı ipucu mevcut değil.');
  
  modal.style.display = 'flex';
}

// Hide Hint Modal
function hideHintModal() {
  document.getElementById('hintModal').style.display = 'none';
}

// Switch Hint Tab
function switchHintTab(type) {
  document.querySelectorAll('.hint-tab').forEach(tab => {
    tab.classList.toggle('active', tab.id === `${type}HintTab`);
  });
  
  document.querySelectorAll('.hint-tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `${type}HintContent`);
  });
}

// Update Progress Display
function updateProgressDisplay() {
  document.getElementById('totalPointsValue').textContent = userProgress.points;
  document.getElementById('levelSummary').textContent = `Seviye ${userProgress.level}`;
  
  // Calculate overall progress
  const allTasks = getAllTasks();
  const completedCount = userProgress.completedTasks.length;
  const totalCount = allTasks.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount * 100) : 0;
  
  document.getElementById('progressPercentage').textContent = `${Math.round(progressPercent)}%`;
  document.getElementById('infoProgressFill').style.width = `${progressPercent}%`;
  document.getElementById('completionSummary').textContent = `Tamamlanan: ${completedCount}/${totalCount}`;
}

// Get All Tasks
function getAllTasks() {
  const chapters = window.HTML_CHAPTERS || {};
  let allTasks = [];
  Object.values(chapters).forEach(chapter => {
    if (chapter.tasks) {
      allTasks = allTasks.concat(chapter.tasks);
    }
  });
  return allTasks;
}

// Get Difficulty Text
function getDifficultyText(difficulty) {
  switch (difficulty) {
    case 1: return 'Kolay';
    case 2: return 'Orta';
    case 3: return 'Zor';
    default: return 'Orta';
  }
}

// Format Markdown (Simple)
function formatMarkdown(text) {
  if (!text) return '';
  
  // Convert code blocks
  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  
  // Convert inline code
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Convert headers
  text = text.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^# (.+)$/gm, '<h2>$1</h2>');
  
  // Convert bold
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Convert italic
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Convert line breaks
  text = text.replace(/\n/g, '<br>');
  
  return text;
}

// Load User Progress
function loadUserProgress() {
  const saved = localStorage.getItem("htmlEditorProgress");
  if (saved) {
    try {
      userProgress = JSON.parse(saved);
    } catch (error) {
      console.warn("Kayıtlı ilerleme okunamadı:", error);
    }
  }
}

// Save User Progress
function saveUserProgress() {
  localStorage.setItem("htmlEditorProgress", JSON.stringify(userProgress));
}

// Debounce Helper
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

