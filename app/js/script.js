document.getElementById('toggleButton').addEventListener('click', function () {
    const jobList = document.querySelector('.content_job_experience');
    const skillsList = document.querySelector('.skills');
    jobList.classList.toggle('hidden');
    skillsList.classList.toggle('up');
  });

document.getElementById('educationButton').addEventListener('click', function () {
    const educationList = document.querySelector('.content_education');
    educationList.classList.toggle('hidden');
});