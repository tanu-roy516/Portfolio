import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Somsubhro Chakraborty. Ask me anything about my skills, projects, education, or how to contact me!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBoxRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Comprehensive bot response logic
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Skills - Programming Languages
    if (
      lowerMessage.includes("programming language") ||
      lowerMessage.includes("coding language") ||
      lowerMessage.includes("what language") ||
      lowerMessage.includes("which language")
    ) {
      return "I know several programming languages including HTML, CSS, Tailwind CSS, JavaScript, React, PHP, Laravel, MySQL, Java, and Python. I'm particularly strong in web development technologies!";
    }
    
    // Skills - General Skills
    else if (
      lowerMessage.includes("skill") ||
      lowerMessage.includes("what can you do") ||
      lowerMessage.includes("technologies") ||
      lowerMessage.includes("technical skill") ||
      lowerMessage.includes("what do you know")
    ) {
      return "My technical skills include: Frontend (HTML, CSS, Tailwind CSS, JavaScript, React, Vue), Backend (PHP, Laravel), Database (MySQL), Programming (Java, Python), and Version Control (GitHub). I'm a full-stack developer with diverse capabilities!";
    }
    
    // Frontend Technologies
    else if (
      lowerMessage.includes("frontend") ||
      lowerMessage.includes("front-end") ||
      lowerMessage.includes("react") ||
      lowerMessage.includes("vue") ||
      lowerMessage.includes("javascript") ||
      lowerMessage.includes("css")
    ) {
      return "For frontend development, I use React and Vue.js as my main frameworks. I'm also skilled in HTML, CSS, Tailwind CSS, and JavaScript for creating responsive and interactive user interfaces.";
    }
    
    // Backend Technologies
    else if (
      lowerMessage.includes("backend") ||
      lowerMessage.includes("back-end") ||
      lowerMessage.includes("server") ||
      lowerMessage.includes("laravel") ||
      lowerMessage.includes("php")
    ) {
      return "For backend development, I specialize in Laravel (PHP framework). I use Laravel to build robust server-side applications and APIs that power my web applications.";
    }
    
    // Database
    else if (
      lowerMessage.includes("database") ||
      lowerMessage.includes("mysql") ||
      lowerMessage.includes("data")
    ) {
      return "I work with MySQL for database management. I design and manage databases to store and retrieve data efficiently for my web applications.";
    }
    
    // Projects - General
    else if (
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("portfolio") ||
      lowerMessage.includes("built") ||
      lowerMessage.includes("created") ||
      lowerMessage.includes("developed")
    ) {
      return "My main project is 'Healthy Treats' - an e-commerce web application that's also a freelance project of mine. I built it using React for the frontend, Laravel for the backend, and MySQL for the database. You can check it out at https://healthytreats.shop/";
    }
    
    // Healthy Treats specific
    else if (
      lowerMessage.includes("healthy treats") ||
      lowerMessage.includes("ecommerce") ||
      lowerMessage.includes("e-commerce") ||
      lowerMessage.includes("freelance")
    ) {
      return "Healthy Treats is my e-commerce web application and freelance project. As a full-stack developer, I used React, Laravel, and MySQL to create this complete online shopping platform. Visit: https://healthytreats.shop/";
    }
    
    // Education
    else if (
      lowerMessage.includes("education") ||
      lowerMessage.includes("study") ||
      lowerMessage.includes("college") ||
      lowerMessage.includes("university") ||
      lowerMessage.includes("mca") ||
      lowerMessage.includes("heritage")
    ) {
      return "I'm currently pursuing MCA (Master of Computer Applications) from Heritage Institute of Technology. I'm in my 2nd year and passionate about applying my academic knowledge to real-world projects.";
    }
    
    // Experience & Status
    else if (
      lowerMessage.includes("experience") ||
      lowerMessage.includes("fresher") ||
      lowerMessage.includes("work experience") ||
      lowerMessage.includes("job") ||
      lowerMessage.includes("professional")
    ) {
      return "I'm a fresher who has just started my professional journey. Though new to the industry, I have hands-on experience through my freelance project 'Healthy Treats' and various academic projects.";
    }
    
    // Location
    else if (
      lowerMessage.includes("location") ||
      lowerMessage.includes("where") ||
      lowerMessage.includes("based") ||
      lowerMessage.includes("kolkata") ||
      lowerMessage.includes("india")
    ) {
      return "I'm based in Kolkata, India. I'm studying and working on my projects from this vibrant city.";
    }
    
    // About/Who questions
    else if (
      lowerMessage.includes("who are you") ||
      lowerMessage.includes("about you") ||
      lowerMessage.includes("tell me about") ||
      lowerMessage.includes("introduce") ||
      lowerMessage.includes("who is somsubhro")
    ) {
      return "I'm Somsubhro Chakraborty, a passionate MCA student and full-stack web developer from Kolkata, India. I'm currently in my 2nd year at Heritage Institute of Technology and have experience in React, Laravel, and MySQL. I love building web applications and recently completed a freelance e-commerce project!";
    }
    
    // Contact questions
    else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("reach") ||
      lowerMessage.includes("email") ||
      lowerMessage.includes("linkedin") ||
      lowerMessage.includes("connect") ||
      lowerMessage.includes("hire")
    ) {
      return "You can reach me at somsubhrochakraborty07@gmail.com or connect with me on LinkedIn: https://www.linkedin.com/in/somsubhro-chakraborty-915852247/. I'm always open to discussing new opportunities and collaborations!";
    }
    
    // Interests
    else if (
      lowerMessage.includes("interest") ||
      lowerMessage.includes("hobby") ||
      lowerMessage.includes("music") ||
      lowerMessage.includes("like to do") ||
      lowerMessage.includes("free time")
    ) {
      return "Outside of coding, I enjoy music. It helps me relax and stay creative while working on my development projects!";
    }
    
    // Goals & Future
    else if (
      lowerMessage.includes("goal") ||
      lowerMessage.includes("future") ||
      lowerMessage.includes("career") ||
      lowerMessage.includes("plan") ||
      lowerMessage.includes("ambition")
    ) {
      return "As a fresher, I'm focused on building my career in web development. I aim to work on challenging projects, continue learning new technologies, and contribute to innovative web applications.";
    }
    
    // GitHub/Tools
    else if (
      lowerMessage.includes("github") ||
      lowerMessage.includes("git") ||
      lowerMessage.includes("version control") ||
      lowerMessage.includes("tools")
    ) {
      return "I use GitHub for version control and project management. I maintain my code repositories and collaborate on projects using Git and GitHub.";
    }
    
    // Full Stack
    else if (
      lowerMessage.includes("full stack") ||
      lowerMessage.includes("fullstack") ||
      lowerMessage.includes("full-stack")
    ) {
      return "Yes! I'm a full-stack developer. I handle both frontend (React, Vue, HTML, CSS, JavaScript) and backend (Laravel, PHP, MySQL) development, making me capable of building complete web applications from start to finish.";
    }
    
    // Greeting responses
    else if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey") ||
      lowerMessage.includes("good morning") ||
      lowerMessage.includes("good afternoon") ||
      lowerMessage.includes("good evening")
    ) {
      return "Hello! Great to meet you! I'm Somsubhro Chakraborty - a MCA student and full-stack developer from Kolkata. What would you like to know about me?";
    }
    
    // Default response with suggestions
    else {
      return "That's an interesting question! I'd love to tell you more about myself. You can ask me about my:\n• Skills & Technologies\n• Projects (like Healthy Treats)\n• Education (MCA at Heritage Institute)\n• Experience as a fresher\n• Contact information\n• Interests and goals\n\nWhat would you like to know?";
    }
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = input.trim();
    
    // Add user message immediately
    setMessages(prev => [...prev, { text: userMessage, sender: "user" }]);
    
    // Clear input immediately
    setInput("");
    
    // Show typing indicator
    setIsTyping(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
          aria-label="Open chatbot"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 h-[450px] rounded-lg shadow-xl flex flex-col border">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat with Somsubhro</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Messages */}
          <div
            ref={chatBoxRef}
            className="flex-1 p-4 overflow-y-auto bg-gray-50"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 p-3 rounded-lg max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white ml-auto rounded-br-sm"
                    : "bg-white text-gray-800 border rounded-bl-sm shadow-sm"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>
              </div>
            ))}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="mb-3 p-3 rounded-lg max-w-[85%] bg-white text-gray-800 border rounded-bl-sm shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about skills, projects, education..."
              className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={isTyping || input.trim() === ""}
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;