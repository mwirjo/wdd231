// scripts/courses.js

const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces the building blocks of programming languages...',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web...',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students write programs with functions to solve problems...',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduces the notion of classes, encapsulation, inheritance...',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Students create dynamic websites using JavaScript...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Focus on user experience, accessibility, and API usage...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];

function displayCourses(courseList) {
  const container = document.querySelector('.course-cards');
  const total = document.querySelector('.credits-total');

  if (!container || !total) return;

  container.innerHTML = '';
  let totalCredits = 0;

  courseList.forEach(course => {
    totalCredits += course.credits;

    const card = document.createElement('div');
    card.classList.add('card');
    if (course.completed) {
      card.classList.add('completed');
    }

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p>${course.description}</p>
      <p><strong>Tech:</strong> ${course.technology.join(', ')}</p>
    `;

    container.appendChild(card);
  });

  total.textContent = `Total Credits: ${totalCredits}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Initial display
  displayCourses(courses);

  // Filter handlers
  document.querySelector('[data-filter="all"]')?.addEventListener('click', () => {
    displayCourses(courses);
  });

  document.querySelector('[data-filter="CSE"]')?.addEventListener('click', () => {
    const filtered = courses.filter(course => course.subject === 'CSE');
    displayCourses(filtered);
  });

  document.querySelector('[data-filter="WDD"]')?.addEventListener('click', () => {
    const filtered = courses.filter(course => course.subject === 'WDD');
    displayCourses(filtered);
  });
});
