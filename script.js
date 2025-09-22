const topics = [
  "Why is daily prayer important for a Christian?",
  "How can we practically live out 'love your neighbor' in today's world?",
  "What role does the Holy Spirit play in our everyday lives?",
  "What does it mean to take up our cross daily?",
  "How do we balance faith and works?",
  "Which parable speaks to you most, and why?",
  "Should Christians listen only to gospel music?",
  "Is it okay for Christians to use social media freely?",
  "Should churches be involved in politics?",
  "If you were one Bible character for a day, who would you be?",
  "Which miracle of Jesus would you like to witness?",
  "Coffee or tea: which one would Paul drink while writing letters?"
];

function getTopic() {
  const topicElement = document.getElementById("topic");
  topicElement.style.opacity = 0; // fade out
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * topics.length);
    topicElement.textContent = topics[randomIndex];
    topicElement.style.opacity = 1; // fade in
  }, 300);
}
