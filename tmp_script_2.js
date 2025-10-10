
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: "#ff6b35",
                        secondary: "#1a1a1a",
                        accent: "#00d4ff",
                        success: "#00ff88",
                        warning: "#ffb800",
                        danger: "#ff3838",
                        dark: "#0a0a0a",
                        darkgray: "#1f1f1f",
                        lightgray: "#2a2a2a"
                    },
                    fontFamily: {
                        'poppins': ['Poppins', 'sans-serif'],
                        'rajdhani': ['Rajdhani', 'sans-serif']
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s infinite',
                        'bounce-gentle': 'bounce 2s infinite',
                        'fade-in': 'fadeIn 0.8s ease-out',
                        'fade-in-up': 'fadeInUp 0.8s ease-out',
                        'fade-in-down': 'fadeInDown 0.8s ease-out',
                        'fade-in-left': 'fadeInLeft 0.8s ease-out',
                        'fade-in-right': 'fadeInRight 0.8s ease-out',
                        'slide-up': 'slideUp 0.6s ease-out',
                        'slide-down': 'slideDown 0.6s ease-out',
                        'scale-in': 'scaleIn 0.4s ease-out',
                        'scale-in-bounce': 'scaleInBounce 0.6s ease-out',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'float-slow': 'floatSlow 8s ease-in-out infinite',
                        'spin-slow': 'spin 8s linear infinite',
                        'gradient': 'gradient 3s ease infinite',
                        'gradient-x': 'gradientX 4s ease infinite',
                        'wiggle': 'wiggle 1s ease-in-out infinite',
                        'shake': 'shake 0.5s ease-in-out',
                        'zoom-in': 'zoomIn 0.5s ease-out',
                        'zoom-out': 'zoomOut 0.5s ease-out',
                        'flip': 'flip 0.6s ease-in-out',
                        'rotate-y': 'rotateY 1s ease-in-out',
                        'slide-in-blurred': 'slideInBlurred 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000)',
                        'text-focus': 'textFocus 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530)',
                        'tracking-in': 'trackingIn 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                        'kenburns-top': 'kenburnsTop 5s ease-out infinite',
                        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
                        'blink': 'blink 1s infinite',
                        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
                        'circuit-pulse': 'circuitPulse 3s ease-in-out infinite',
                        'hologram': 'hologram 4s ease-in-out infinite',
                        'energy-flow': 'energyFlow 2s linear infinite'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(30px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        fadeInUp: {
                            '0%': { opacity: '0', transform: 'translateY(60px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        fadeInDown: {
                            '0%': { opacity: '0', transform: 'translateY(-60px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        fadeInLeft: {
                            '0%': { opacity: '0', transform: 'translateX(-60px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' }
                        },
                        fadeInRight: {
                            '0%': { opacity: '0', transform: 'translateX(60px)' },
                            '100%': { opacity: '1', transform: 'translateX(0)' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(100%)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        slideDown: {
                            '0%': { transform: 'translateY(-100%)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        scaleIn: {
                            '0%': { transform: 'scale(0.8)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        },
                        scaleInBounce: {
                            '0%': { transform: 'scale(0.3)', opacity: '0' },
                            '50%': { transform: 'scale(1.05)' },
                            '70%': { transform: 'scale(0.9)' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
                            '100%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' }
                        },
                        glowPulse: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
                            '50%': { boxShadow: '0 0 60px rgba(255, 107, 53, 0.8), 0 0 100px rgba(0, 212, 255, 0.4)' }
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' }
                        },
                        floatSlow: {
                            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                            '33%': { transform: 'translateY(-30px) rotate(2deg)' },
                            '66%': { transform: 'translateY(-10px) rotate(-1deg)' }
                        },
                        gradient: {
                            '0%, 100%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' }
                        },
                        gradientX: {
                            '0%, 100%': { backgroundPosition: '0% 0%' },
                            '50%': { backgroundPosition: '100% 0%' }
                        },
                        wiggle: {
                            '0%, 100%': { transform: 'rotate(-3deg)' },
                            '50%': { transform: 'rotate(3deg)' }
                        },
                        shake: {
                            '0%, 100%': { transform: 'translateX(0)' },
                            '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
                            '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
                        },
                        zoomIn: {
                            '0%': { transform: 'scale(0)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        },
                        zoomOut: {
                            '0%': { transform: 'scale(1)', opacity: '1' },
                            '100%': { transform: 'scale(0)', opacity: '0' }
                        },
                        flip: {
                            '0%': { transform: 'rotateY(0)' },
                            '100%': { transform: 'rotateY(180deg)' }
                        },
                        rotateY: {
                            '0%': { transform: 'rotateY(0deg)' },
                            '100%': { transform: 'rotateY(360deg)' }
                        },
                        slideInBlurred: {
                            '0%': { transform: 'translateX(-1000px) scaleX(2.5) scaleY(0.2)', filter: 'blur(40px)', opacity: '0' },
                            '100%': { transform: 'translateX(0) scaleY(1) scaleX(1)', filter: 'blur(0)', opacity: '1' }
                        },
                        textFocus: {
                            '0%': { filter: 'blur(12px)', opacity: '0' },
                            '100%': { filter: 'blur(0px)', opacity: '1' }
                        },
                        trackingIn: {
                            '0%': { letterSpacing: '-0.5em', opacity: '0' },
                            '40%': { opacity: '0.6' },
                            '100%': { opacity: '1' }
                        },
                        kenburnsTop: {
                            '0%': { transform: 'scale(1) translateY(0px)', transformOrigin: '50% 16%' },
                            '100%': { transform: 'scale(1.25) translateY(-15px)', transformOrigin: 'top' }
                        },
                        heartbeat: {
                            '0%': { transform: 'scale(1)' },
                            '14%': { transform: 'scale(1.3)' },
                            '28%': { transform: 'scale(1)' },
                            '42%': { transform: 'scale(1.3)' },
                            '70%': { transform: 'scale(1)' }
                        },
                        typewriter: {
                            'from': { width: '0' },
                            'to': { width: '100%' }
                        },
                        blink: {
                            '0%, 50%': { borderColor: 'transparent' },
                            '51%, 100%': { borderColor: '#ff6b35' }
                        },
                        neonGlow: {
                            '0%': { 
                                textShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff, 0 0 20px #00d4ff',
                                filter: 'brightness(1)'
                            },
                            '100%': { 
                                textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff',
                                filter: 'brightness(1.2)'
                            }
                        },
                        circuitPulse: {
                            '0%, 100%': { 
                                boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)',
                                borderColor: 'rgba(0, 212, 255, 0.3)'
                            },
                            '50%': { 
                                boxShadow: '0 0 40px rgba(0, 212, 255, 0.8), inset 0 0 30px rgba(0, 212, 255, 0.3)',
                                borderColor: 'rgba(0, 212, 255, 0.8)'
                            }
                        },
                        hologram: {
                            '0%, 100%': { 
                                opacity: '1',
                                transform: 'translateY(0px)',
                                filter: 'hue-rotate(0deg)'
                            },
                            '25%': { 
                                opacity: '0.8',
                                transform: 'translateY(-2px)',
                                filter: 'hue-rotate(90deg)'
                            },
                            '50%': { 
                                opacity: '0.9',
                                transform: 'translateY(-1px)',
                                filter: 'hue-rotate(180deg)'
                            },
                            '75%': { 
                                opacity: '0.7',
                                transform: 'translateY(-3px)',
                                filter: 'hue-rotate(270deg)'
                            }
                        },
                        energyFlow: {
                            '0%': { 
                                background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)',
                                transform: 'translateX(-100%)'
                            },
                            '100%': { 
                                background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent)',
                                transform: 'translateX(100%)'
                            }
                        }
                    }
                }
            }
        }
    