const skeletonLoader = document.getElementById('skeletonLoader');
const dataList = document.getElementById('dataList');

// Display skeleton loader
function showSkeletonLoader() {
  skeletonLoader.style.display = 'block';
}

// Hide skeleton loader
function hideSkeletonLoader() {
  skeletonLoader.style.display = 'none';
}

// Display fetched data
function displayData(data) {
  hideSkeletonLoader();
  dataList.innerHTML = '';

  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.title;
    dataList.appendChild(listItem);
  });
}

// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Show skeleton loader until data is fetched
showSkeletonLoader();
