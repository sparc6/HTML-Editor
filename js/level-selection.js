// Level Selection Screen JavaScript

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
      userProgress = createDefaultProgress();
    }
  }
}

// Save User Progress to LocalStorage
function saveUserProgress() {
  localStorage.setItem("htmlEditorProgress", JSON.stringify(userProgress));
}

// Create Default Progress
function createDefaultProgress() {
  return {
    level: 1,
    points: 0,
    completedTasks: [],
    achievements: [],
    taskStates: {}
  };
}

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {
  loadUserProgress();
  renderSectionCarousel();
  renderCategoryCards();
});

// Render HTML-101 Sections Carousel
function renderSectionCarousel() {
  const track = document.getElementById("sectionCarouselTrack");
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const viewport = document.querySelector(".section-carousel-viewport");

  if (!track || !prevBtn || !nextBtn || !viewport) {
    console.error("Bölüm slider bileşenleri bulunamadı!");
    return;
  }

  track.innerHTML = "";

  const chapters = window.HTML_CHAPTERS || {};
  const chapterNumbers = Object.keys(chapters).sort((a, b) => parseInt(a) - parseInt(b));

  chapterNumbers.forEach((chapterNum, index) => {
    const chapter = chapters[chapterNum];
    const card = document.createElement("div");
    card.className = "category-card section-card";
    card.dataset.chapterNumber = chapter.number;

    const taskCount = chapter.tasks ? chapter.tasks.length : 0;
    const tasksLabel = taskCount > 0 ? `${taskCount} görev` : "Görevler yakında";

    // Calculate completion
    const completedCount = chapter.tasks ? chapter.tasks.filter(task => 
      userProgress.completedTasks.includes(task.id)
    ).length : 0;
    const progressPercent = taskCount > 0 ? (completedCount / taskCount * 100) : 0;

    card.innerHTML = `
      <div class="category-content">
        <div class="card-top">
          <div class="card-header section-card-header">
            <span class="category-icon">📖</span>
            <div class="section-heading-text">
              <span class="section-number">Bölüm ${chapter.number}</span>
              <h3 class="category-title">${chapter.shortTitle}</h3>
            </div>
            <p class="category-description">${chapter.summary}</p>
          </div>

          <div class="card-footer">
            <div class="category-stats">
              <div class="category-difficulty">
                <span class="difficulty-stars">★★☆☆☆</span>
                <span class="difficulty-label">Temel</span>
              </div>
              <div class="category-tasks">
                ${tasksLabel}
              </div>
            </div>
            ${progressPercent > 0 ? `
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressPercent}%"></div>
              </div>
              <div class="progress-text">${completedCount}/${taskCount} tamamlandı</div>
            ` : ''}
          </div>
        </div>

        <div class="button-container">
          <button class="start-button section-start-button">
            ${progressPercent > 0 ? 'Devam Et' : 'Görevleri İncele'} →
          </button>
        </div>
      </div>
    `;

    // Animation delay
    card.style.animationDelay = `${index * 0.05}s`;

    // Click handler
    card.addEventListener("click", () => {
      window.location.href = `task-selection.html?chapter=${chapter.number}`;
    });

    track.appendChild(card);
  });

  // Carousel navigation
  const getScrollStep = () => {
    const card = track.querySelector(".section-card");
    if (!card) return viewport.clientWidth;
    return card.offsetWidth + 24; // card width + gap
  };

  const updateButtons = () => {
    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    prevBtn.disabled = viewport.scrollLeft <= 2;
    nextBtn.disabled = viewport.scrollLeft >= (maxScrollLeft - 2);
  };

  prevBtn.addEventListener("click", () => {
    viewport.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    viewport.scrollBy({ left: getScrollStep(), behavior: "smooth" });
  });

  viewport.addEventListener("scroll", updateButtons, { passive: true });
  updateButtons();
}

// Render Category Cards (Quick Start)
function renderCategoryCards() {
  const categoriesGrid = document.getElementById("categoriesGrid");
  if (!categoriesGrid) {
    console.error("categoriesGrid element bulunamadı!");
    return;
  }

  categoriesGrid.innerHTML = "";

  const categories = window.QUICK_START_TASKS || [];

  categories.forEach((category, index) => {
    const categoryCard = document.createElement("div");
    categoryCard.className = "category-card";
    categoryCard.dataset.category = category.category;

    categoryCard.innerHTML = `
      <div class="category-content">
        <div class="card-top">
          <div class="card-header">
            <span class="category-icon">${category.icon}</span>
            <h3 class="category-title">${category.title}</h3>
            <p class="category-description">${category.description}</p>
          </div>
          
          <div class="card-footer">
            <div class="category-stats">
              <div class="category-difficulty">
                <span class="difficulty-stars">${getDifficultyStars(category.level)}</span>
              </div>
              <div class="category-tasks">
                ${category.taskCount} görev
              </div>
            </div>
          </div>
        </div>
        
        <div class="button-container">
          <button class="start-button">
            Başla →
          </button>
        </div>
      </div>
    `;

    // Animation delay
    categoryCard.style.animationDelay = `${index * 0.1}s`;

    categoryCard.addEventListener("click", () => {
      window.location.href = `task-selection.html?category=${encodeURIComponent(category.category)}`;
    });

    categoriesGrid.appendChild(categoryCard);
  });
}

// Get difficulty stars
function getDifficultyStars(level) {
  switch (level) {
    case "Temel":
      return "★★☆☆☆";
    case "Orta":
      return "★★★☆☆";
    case "İleri":
      return "★★★★★";
    default:
      return "★★☆☆☆";
  }
}

