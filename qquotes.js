function init() {
  document.getElementById("quoteText").innerHTML = "&#8220;" +  twainSet[Math.floor(Math.random() * 30)] + "&#8221;";
}

window.onload = init;

function changeQuote() {
    document.getElementById("quoteText").innerHTML = "&#8220;" +  twainSet[Math.floor(Math.random() * 30)] + "&#8221;";
}

var twainSet = [
"The way to get started is to quit talking and begin doing. ~ Walt Disney",
"Start by doing what\'s necessary; then do what\'s possible; and suddenly you are doing the impossible. ~ Francis Of Assisi",
"There is no substitute for hard work. ~ Thomas Edison",
"Productivity is being able to do things that you were never able to do before. ~ Franz Kafka",
"If you spend too much time thinking about a thing, you\'ll never get it done. ~ Bruce Lee",
"Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort. ~ Paul J Meyer",
"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. ~ Norman Vincent Peale",
"Time is non-refundable, use it with intention. ~ Unknown",
"Never do tomorrow what you can do today. Procrastination is the thief of time. ~ Unknown",
"Being busy means doing stuff, being productive means getting stuff done. ~ Unknown",
"Wake up with determination. Go to bed with satisfaction. ~ Unknown",
"I don\'t wait for moods. You accomplish nothing if you do that. Your mind must know that it has got to get down to work. ~ Pearl S. Buck",
"Time is what we want the most, but what we use worst. ~ William Penn",
"The most effective way to do it, is to do it. ~ Amelia Earhart",
"Make good use of today. ~ Unknown",
"Happiness inspires productivity. ~ Shawn Achor",
"There\'s a huge difference between working on something and working towards something. ~ Pat Flynn",
"If there\'s one thing I\'m willing to bet on, it\'s myself. ~ Beyonce",
"If you get tired, learn to rest, not to quit. ~ Unknown",
"If you want to make an easy job seem mighty hard, just keep putting off doing it. ~ Olin Miller",
"You don\'t have to see the whole staircase, just take the first step. ~ Martin Luther King, Jr.",
"Do the hard jobs first. The easy jobs will take care of themselves. ~ Dale Carnegie",
"Motivation is what gets you started. Habit is what keeps you going. ~ Jim Rohn",
"Procrastination is the fear of success. People procrastinate because they are afraid of the success that they know will result if they move ahead now. Because success is heavy, carries a responsibility with it, it is much easier to procrastinate and live on the \'someday I\'ll\' philosophy. ~ Denis Waitley",
"Don\'t wait. The time will never be just right. ~ Napoleon Hill",
"Think of many things; do one. ~ Portuguese proverb",
"Success is often achieved by those who don\'t know that failure is inevitable. ~ Coco Chanel",
"Your mind is for having ideas, not holding them. ~ David Allen",
"Focus on being productive instead of busy. ~ Tim Ferriss",
"Lost time is never found again. ~ Benjamin Franklin",
"By failing to prepare, you are preparing to fail. ~ Benjamin Franklin"




















];
