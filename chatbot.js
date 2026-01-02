document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotContainer = document.getElementById("chatbot-container");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatbotMessages = document.getElementById("chatbot-messages");
    const chatbotInput = document.getElementById("chatbot-input");
    const sendBtn = document.getElementById("send-btn");

    // Show Chatbot
    chatbotBtn.addEventListener("click", function () {
        chatbotContainer.style.display = "flex";
    });

    // Close Chatbot
    closeChatbot.addEventListener("click", function () {
        chatbotContainer.style.display = "none";
    });

    // Send Message
    sendBtn.addEventListener("click", function () {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === "") return;

        addMessage("You", userMessage);
        chatbotInput.value = "";

        setTimeout(() => {
            botResponse(userMessage);
        }, 1000);
    });

    chatbotInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    // Function to Display Messages
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Chatbot Responses
    function botResponse(userMessage) {
        let response = "I'm still learning! Try asking something else.";
        
        const responses = {
            "hello": "Hello! How can I assist you today?",
            "hi": "Hi! Feel free to ask me anything about my profile.",
            "tell me about yourself": "I am N. Guru Lohitha, a passionate web developer currently pursuing a BTech in CSE (AI & ML). I have experience in front-end development, AI/ML projects, and chatbot integration.",
            "what are your skills": "I have expertise in HTML, CSS, JavaScript, Python, Flask, MongoDB, and Power BI. I also have strong problem-solving and adaptability skills.",
            "what projects have you worked on": "I have developed a 'Digital Solutions for Good Governance' website.",
            "tell me about your education": "I am currently in my 3rd year of BTech at Gouthami Institute of Technology and Management for Women, specializing in AI & ML. I completed my intermediate studies at Geetam Girls Junior College in the MPC stream.",
            "do you have any experience": "Yes! I have a 6-month internship in front-end development under OneStop, where I worked on projects like a portfolio website and 'Crickets Hub'.",
            "what certifications do you have": "I have completed an AI/ML bootcamp by Vector Tech E, attended workshops on Spring MVC and RabbitMQ, and worked as a resource person for an Excel masterclass.",
            "what is your github profile": "You can check out my projects here: [GitHub Profile](https://github.com/GuruLohithaNarala).",
            "do you have leadership experience": "Yes, I have led projects in hackathons and guided peers in AI/ML learning sessions. I also served as a resource person for an Excel workshop.",
            "bye": "Goodbye! Feel free to reach out anytime.",
            "introduce yourself": "I am N. Guru Lohitha, a passionate web developer currently pursuing a BTech in CSE (AI & ML). I have experience in front-end development, AI/ML projects, and chatbot integration."
        };

        const lowerCaseMessage = userMessage.toLowerCase();
        if (responses[lowerCaseMessage]) {
            response = responses[lowerCaseMessage];
        }

        addMessage("Chatbot", response);
    }
});
