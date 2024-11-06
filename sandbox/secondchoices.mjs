const choices = {
    "story": {
        "title": "The Homework Adventure",
        "intro": "You’re a college student with a mountain of homework ahead. It’s late afternoon, and you can either start working on your assignments or take a short break to recharge.",
        "choices": [
            {
                "option": "Start Homework",
                "description": "You decide to dive right into your homework.",
                "next": [
                    {
                        "option": "Begin with the hardest assignment",
                        "description": "You choose to tackle the most difficult assignment first, hoping to get it out of the way.",
                        "next": [
                            {
                                "option": "Research thoroughly",
                                "description": "You dig into all your resources and spend hours on research. It's exhausting, but you’re getting somewhere.",
                                "next": [
                                    {
                                        "option": "Take a break",
                                        "description": "You feel overwhelmed and decide to rest. After a quick 10-minute nap, you’re ready to keep going!",
                                        "next": []
                                    },
                                    {
                                        "option": "Push through",
                                        "description": "You press on, ignoring the urge to rest, and manage to finish the assignment by midnight. Success!",
                                        "next": []
                                    }
                                ]
                            },
                            {
                                "option": "Ask a friend for help",
                                "description": "You call a friend who has already finished the assignment. They give you some pointers, making the task easier.",
                                "next": [
                                    {
                                        "option": "Work together",
                                        "description": "You both decide to work together over a video call, helping each other out. You complete the assignment faster!",
                                        "next": []
                                    },
                                    {
                                        "option": "Thank them and continue alone",
                                        "description": "You thank your friend for the help and finish the assignment solo, feeling more confident.",
                                        "next": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "option": "Start with the easiest assignment",
                        "description": "You opt to start with a simpler assignment, hoping it’ll boost your confidence.",
                        "next": [
                            {
                                "option": "Finish quickly",
                                "description": "You breeze through the assignment, feeling accomplished. One down, several to go!",
                                "next": []
                            },
                            {
                                "option": "Get distracted",
                                "description": "The easy assignment is boring, and soon you’re scrolling through social media.",
                                "next": [
                                    {
                                        "option": "Refocus on homework",
                                        "description": "You snap back to reality, turn off your phone, and dive into the next assignment.",
                                        "next": []
                                    },
                                    {
                                        "option": "Take an extended break",
                                        "description": "You decide to take a longer break and relax. The homework can wait...for now.",
                                        "next": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "option": "Take a break",
                "description": "You decide a quick break will help you get in the right mindset for homework.",
                "next": [
                    {
                        "option": "Grab a snack",
                        "description": "You head to the kitchen for a snack, hoping it’ll give you an energy boost.",
                        "next": [
                            {
                                "option": "Choose something healthy",
                                "description": "You grab an apple and some water, feeling refreshed and ready to tackle your work.",
                                "next": []
                            },
                            {
                                "option": "Choose something sugary",
                                "description": "You pick up a soda and some candy, which gives you a short burst of energy.",
                                "next": [
                                    {
                                        "option": "Start homework",
                                        "description": "The sugar rush helps you get started, but you crash later. Hopefully, you’ll finish in time!",
                                        "next": []
                                    },
                                    {
                                        "option": "Take a nap",
                                        "description": "The sugar crash hits hard, and you end up taking a nap, leaving homework for later.",
                                        "next": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "option": "Watch a quick video",
                        "description": "You watch a short video to unwind. Just one video, then you’ll start your homework.",
                        "next": [
                            {
                                "option": "Keep watching",
                                "description": "One video turns into several, and before you know it, an hour has passed!",
                                "next": [
                                    {
                                        "option": "Stop watching and focus",
                                        "description": "You finally snap out of it and realize it’s time to get serious about homework.",
                                        "next": []
                                    },
                                    {
                                        "option": "Give up on homework",
                                        "description": "You’re too comfortable now. Maybe homework can wait until tomorrow.",
                                        "next": []
                                    }
                                ]
                            },
                            {
                                "option": "Start homework immediately",
                                "description": "You keep your promise and dive into homework right after the video ends.",
                                "next": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export default choices;