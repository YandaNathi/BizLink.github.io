// Sample data for demonstration
const topNewsData = [
    "Top news update 1",
    "Top news update 2",
    "Top news update 3"
];

const otherNewsData = [
    "Other business news 1",
    "Other business news 2",
    "Other business news 3"
];

const industryNewsData = [
    "Industry news 1",
    "Industry news 2",
    "Industry news 3"
];

// Function to populate news lists
function populateNewsList(listId, data) {
    const newsList = document.getElementById(listId);
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        newsList.appendChild(listItem);
    });
}

// Populate news lists
populateNewsList('top-news-list', topNewsData);
populateNewsList('other-news-list', otherNewsData);
populateNewsList('industry-news-list', industryNewsData);
