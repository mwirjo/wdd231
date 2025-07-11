const courses = [
  { id: 1, name: "WDD 131", category: "WDD", credits: 3, completed: true },
  { id: 2, name: "WDD 132", category: "WDD", credits: 3, completed: false },
  { id: 3, name: "CSE 101", category: "CSE", credits: 4, completed: true },
  { id: 4, name: "CSE 102", category: "CSE", credits: 4, completed: false },
  { id: 5, name: "WDD 231", category: "WDD", credits: 3, completed: false },
];

const courseList = document.getElementById('course-list');
const creditsTotal = document.getElementById('credits-total');
const filters = document.querySelectorAll('#course-filters button');

function renderCourses(filter = 'all') {
  let filteredCourses = courses;
  if (filter !== 'all') {
    filteredCourses = courses.filter(course => course.category === filter);
  }

  // Clear existing courses
  courseList.innerHTML = '';

  // Render course cards
  filteredCourses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
      <h3>${course.name}</h3>
      <p>Category: ${course.category}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
    `;

    courseList.appendChild(card);
  });

  // Show total credits for displayed courses
  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  creditsTotal.textContent = `Total Credits: ${totalCredits}`;
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    renderCourses(button.dataset.filter);
  });
});

// Initial render showing all courses
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
});
