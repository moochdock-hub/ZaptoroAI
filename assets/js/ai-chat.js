// ZapToro AI Chat Widget - Powered by Anthropic Claude
(function() {
    'use strict';

    // Chat state
    let conversationHistory = [];
    let isOpen = false;
    let isTyping = false;

    // Create chat widget HTML
    function createChatWidget() {
        const chatHTML = `
            <!-- AI Chat Button -->
            <div id="ai-chat-button" class="fixed bottom-6 right-6 z-50 animate-bounce-gentle">
                <button class="bg-gradient-to-r from-primary to-accent text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-energy-flow"></div>
                    <i class="fas fa-robot text-2xl relative z-10 group-hover:animate-pulse"></i>
                    <div class="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse"></div>
                </button>
            </div>

            <!-- AI Chat Window -->
            <div id="ai-chat-window" class="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] z-50 hidden animate-scale-in">
                <div class="bg-darkgray rounded-2xl shadow-2xl border border-lightgray/20 overflow-hidden backdrop-blur-xl">
                    <!-- Chat Header -->
                    <div class="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="relative">
                                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                                    <i class="fas fa-robot text-white text-lg"></i>
                                </div>
                                <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-primary"></div>
                            </div>
                            <div>
                                <h3 class="text-white font-bold">ZapToro AI Assistant</h3>
                                <p class="text-white/80 text-xs">Powered by Claude AI</p>
                            </div>
                        </div>
                        <button id="close-chat" class="text-white/80 hover:text-white transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>

                    <!-- Chat Messages -->
                    <div id="chat-messages" class="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-darkgray to-dark">
                        <!-- Welcome Message -->
                        <div class="flex items-start space-x-3 animate-fade-in-up">
                            <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-robot text-primary text-sm"></i>
                            </div>
                            <div class="bg-lightgray/30 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                                <p class="text-white text-sm">👋 Hey! I'm your AI assistant. Ask me anything about ZapToro's lead generation system, pricing, or book a free audit!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Typing Indicator -->
                    <div id="typing-indicator" class="px-4 pb-2 hidden">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                <i class="fas fa-robot text-primary text-xs"></i>
                            </div>
                            <div class="bg-lightgray/30 rounded-2xl px-4 py-2">
                                <div class="flex space-x-1">
                                    <div class="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                                    <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                                    <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Input -->
                    <div class="p-4 border-t border-lightgray/20 bg-darkgray">
                        <div class="flex space-x-2">
                            <input 
                                id="chat-input" 
                                type="text" 
                                placeholder="Ask me anything..." 
                                class="flex-1 bg-lightgray/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-400"
                            />
                            <button 
                                id="send-message" 
                                class="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <p class="text-xs text-gray-400 mt-2 text-center">Powered by Anthropic Claude 3.5 Sonnet</p>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }

    // Add message to chat
    function addMessage(message, isUser = false) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageHTML = `
            <div class="flex items-start space-x-3 animate-fade-in-up ${isUser ? 'flex-row-reverse space-x-reverse' : ''}">
                <div class="w-8 h-8 ${isUser ? 'bg-accent/20' : 'bg-primary/20'} rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas ${isUser ? 'fa-user' : 'fa-robot'} ${isUser ? 'text-accent' : 'text-primary'} text-sm"></i>
                </div>
                <div class="bg-lightgray/30 rounded-2xl ${isUser ? 'rounded-tr-none' : 'rounded-tl-none'} p-3 max-w-[80%]">
                    <p class="text-white text-sm whitespace-pre-wrap">${escapeHtml(message)}</p>
                </div>
            </div>
        `;
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Show typing indicator
    function showTyping() {
        document.getElementById('typing-indicator').classList.remove('hidden');
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Hide typing indicator
    function hideTyping() {
        document.getElementById('typing-indicator').classList.add('hidden');
    }

    // Send message to API
    async function sendMessage(message) {
        if (!message.trim() || isTyping) return;

        // Add user message
        addMessage(message, true);
        conversationHistory.push({ role: 'user', content: message });

        // Clear input
        document.getElementById('chat-input').value = '';
        
        // Show typing
        isTyping = true;
        showTyping();

        try {
            const response = await fetch('http://localhost:3000/api/ai-reply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    conversationHistory: conversationHistory.slice(0, -1) // Don't include the message we just added
                }),
            });

            const data = await response.json();
            
            if (data.ok && data.reply) {
                // Add AI response
                addMessage(data.reply, false);
                conversationHistory.push({ role: 'assistant', content: data.reply });
            } else {
                addMessage('Sorry, I encountered an error. Please try again.', false);
            }
        } catch (error) {
            console.error('Chat error:', error);
            addMessage('Sorry, I\'m having trouble connecting. Please ensure the server is running or try refreshing the page.', false);
        } finally {
            isTyping = false;
            hideTyping();
        }
    }

    // Initialize chat widget
    function initChat() {
        createChatWidget();

        // Toggle chat window
        document.getElementById('ai-chat-button').addEventListener('click', () => {
            const chatWindow = document.getElementById('ai-chat-window');
            isOpen = !isOpen;
            
            if (isOpen) {
                chatWindow.classList.remove('hidden');
            } else {
                chatWindow.classList.add('hidden');
            }
        });

        // Close chat
        document.getElementById('close-chat').addEventListener('click', () => {
            document.getElementById('ai-chat-window').classList.add('hidden');
            isOpen = false;
        });

        // Send message on button click
        document.getElementById('send-message').addEventListener('click', () => {
            const input = document.getElementById('chat-input');
            sendMessage(input.value);
        });

        // Send message on Enter key
        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(e.target.value);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChat);
    } else {
        initChat();
    }
})();
