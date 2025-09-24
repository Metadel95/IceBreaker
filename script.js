// Topics organized by category
const topics = {
  theology: [
    "Is Jesus the only way to God?",
    "Why did Jesus need to be both fully God and fully man?",
    "Should Christians read the Bible literally or contextually?",
    "Why did Jesus cry out 'My God, why have You forsaken me?'",
  ],
  living: [
    "Can Christians listen to secular music?",
    "Should Christians date before marriage?",
    "Is drinking alcohol a sin?",
    "How can Christians deal with doubt without losing faith?",
  ],
  fun: [
    "Will there be pets in heaven?",
    "Should Christians celebrate Christmas despite pagan roots?",
    "Is it wrong to clap or dance in church?",
    "Would you rather pray in the morning 🌅 or at night 🌙?",
  ]
};

// Function to get a random topic
function getTopic() {
  const category = document.getElementById("category").value;
  let selectedTopics = [];

  if (category === "all") {
    selectedTopics = Object.values(topics).flat();
  } else {
    selectedTopics = topics[category];
  }

  const topicEl = document.getElementById("topic");
  if (selectedTopics.length > 0) {
    const randomIndex = Math.floor(Math.random() * selectedTopics.length);
    topicEl.textContent = selectedTopics[randomIndex];
  } else {
    topicEl.textContent = "No topics found in this category.";
  }
}

// Attach event listener once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('topic-btn').addEventListener('click', getTopic);
});
