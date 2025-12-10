// Task Selection Screen JavaScript

// User Progress Data
let userProgress = {
  level: 1,
  points: 0,
  completedTasks: [],
  achievements: [],
  taskStates: {}
};

// Load User Progress from LocalStorage
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

// Get URL Parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  loadUserProgress();
  
  const chapterNumber = getUrlParameter('chapter');
  const categoryName = getUrlParameter('category');
  
  if (chapterNumber) {
    renderZigzagPath({ chapterNumber });
    updateChapterTitle(chapterNumber);
  } else if (categoryName) {
    renderZigzagPath({ categoryName });
    updateCategoryTitle(categoryName);
  } else {
    window.location.href = 'index.html';
    return;
  }
  
  // Back button
  document.getElementById('backToCategoriesBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});

// Update Chapter Title
function updateChapterTitle(chapterNumber) {
  const chapters = window.HTML_CHAPTERS || {};
  const chapter = chapters[String(chapterNumber)];
  
  const titleElement = document.getElementById('categoryTitle');
  const descriptionElement = document.getElementById('categoryDescription');
  
  if (!chapter) {
    titleElement.textContent = `Bölüm ${chapterNumber}`;
    descriptionElement.innerHTML = "Bu bölüm için görevler hazırlanıyor.";
    return;
  }
  
  const objectivesHtml = (chapter.objectives || [])
    .map(item => `<li>${item}</li>`)
    .join('');
  
  titleElement.textContent = chapter.title;
  descriptionElement.innerHTML = `
    <span class="subtitle-main">${chapter.summary}</span>
    ${objectivesHtml ? `<ul class="chapter-objectives">${objectivesHtml}</ul>` : ''}
  `;
}

// Update Category Title
function updateCategoryTitle(categoryName) {
  const categories = {
    "Temel": "Python'a İlk Adım",
    "Orta": "Orta Seviye Python",
    "İleri": "İleri Seviye Python"
  };
  
  document.getElementById('categoryTitle').textContent = categories[categoryName] || categoryName;
}

// Render Zigzag Path
function renderZigzagPath({ categoryName = null, chapterNumber = null } = {}) {
  const zigzagContainer = document.getElementById("zigzagContainer");
  zigzagContainer.innerHTML = "";
  
  let tasks = [];
  
  if (chapterNumber) {
    const chapters = window.HTML_CHAPTERS || {};
    const chapter = chapters[String(chapterNumber)];
    if (!chapter || !chapter.tasks || chapter.tasks.length === 0) {
      zigzagContainer.innerHTML = "<p class='empty-message'>Bu bölüm için görevler hazırlanıyor.</p>";
      return;
    }
    tasks = chapter.tasks;
  } else if (categoryName) {
    // Category-based tasks (implement if needed)
    zigzagContainer.innerHTML = "<p class='empty-message'>Kategori görevleri yakında eklenecek.</p>";
    return;
  }
  
  if (tasks.length === 0) {
    zigzagContainer.innerHTML = "<p class='empty-message'>Henüz görev bulunmuyor.</p>";
    return;
  }
  
  // Calculate container height
  const nodeSpacing = 200;
  const topOffset = 100;
  const requiredHeight = topOffset + tasks.length * nodeSpacing;
  zigzagContainer.style.height = `${requiredHeight + 160}px`;
  
  // Create SVG for path
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.style.width = "100%";
  svg.style.height = "100%";
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.zIndex = "1";
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const nodePositions = [];
  const completedSet = new Set((userProgress.completedTasks || []).map(id => String(id)));
  
  tasks.forEach((task, index) => {
    const node = document.createElement("div");
    node.className = "zigzag-node";
    node.dataset.taskId = task.id;
    
    // Calculate position
    const totalWidth = zigzagContainer.offsetWidth || 800;
    const centerX = totalWidth / 2;
    const progress = tasks.length > 1 ? index / (tasks.length - 1) : 0;
    
    const curveOffset = getCurveOffset(progress, 180, index, totalWidth);
    const x = centerX + curveOffset;
    const y = requiredHeight - ((index + 1) * nodeSpacing);
    
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    
    nodePositions.push({ x: x + 30, y: y + 30 });
    
    const isCompleted = completedSet.has(String(task.id));
    if (isCompleted) {
      node.classList.add("completed");
    }
    
    const taskNumber = task.order || (index + 1);
    const points = task.points || 10;
    
    // Set z-index: lower task numbers appear on top (higher z-index)
    // Reverse the order so task 1 has highest z-index
    // Start from base 10 to ensure nodes are above SVG (z-index: 1)
    const totalTasks = tasks.length;
    const zIndex = 10 + (totalTasks - index);
    node.style.zIndex = zIndex;
    
    node.innerHTML = `
      <div class="node-circle ${isCompleted ? 'completed' : ''}">
        <span class="node-icon">${getTaskIcon(task)}</span>
        ${isCompleted ? '<div class="completion-checkmark">✓</div>' : ''}
      </div>
      <div class="node-content">
        <div class="node-title">Görev ${taskNumber}</div>
        <div class="node-subtitle">${task.title}</div>
        <div class="node-description">${task.description}</div>
        <div class="node-points">⭐ ${points} Puan</div>
        ${isCompleted ? `
          <div class="completion-info">
            <div class="earned-points">🎉 +${points} Puan Kazandınız!</div>
            <div class="total-points">💎 Toplam: ${userProgress.points} Puan</div>
          </div>
        ` : `
          <div class="pending-info">
            <div class="pending-points">🚀 ${points} Puan Kazanacaksınız</div>
            <div class="motivation-text">Hemen başlayın!</div>
          </div>
        `}
      </div>
    `;
    
    node.addEventListener("click", () => {
      const params = new URLSearchParams();
      if (chapterNumber) {
        params.set('chapter', chapterNumber);
      } else if (categoryName) {
        params.set('category', categoryName);
      }
      params.set('task', task.id);
      window.location.href = `editor.html?${params.toString()}`;
    });
    
    zigzagContainer.appendChild(node);
  });
  
  // Draw SVG path
  if (nodePositions.length > 0) {
    let pathData = `M ${nodePositions[0].x},${nodePositions[0].y}`;
    for (let i = 1; i < nodePositions.length; i++) {
      const controlPoint1 = {
        x: nodePositions[i - 1].x + (nodePositions[i].x - nodePositions[i - 1].x) / 2,
        y: nodePositions[i - 1].y + (nodePositions[i].y - nodePositions[i - 1].y) / 2
      };
      pathData += ` C ${controlPoint1.x},${controlPoint1.y} ${controlPoint1.x},${controlPoint1.y} ${nodePositions[i].x},${nodePositions[i].y}`;
    }
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", "#ffd700");
    path.setAttribute("stroke-width", "6");
    path.setAttribute("fill", "none");
    path.setAttribute("class", "zigzag-connector");
    svg.appendChild(path);
  }
  
  zigzagContainer.appendChild(svg);
}

// Get curve offset for zigzag effect
function getCurveOffset(progress, baseIntensity, index, totalWidth) {
  const maxOffset = Math.min(totalWidth * 0.35, baseIntensity);
  const direction = index % 2 === 0 ? -1 : 1;
  const amplitude = maxOffset * (0.4 + 0.6 * progress);
  return direction * amplitude;
}

// Get task icon
function getTaskIcon(task) {
  const icons = ["📝", "💻", "🎨", "🔧", "⚡", "🎯", "🌟", "🚀"];
  const index = task.order ? (task.order - 1) : 0;
  return icons[index % icons.length];
}

