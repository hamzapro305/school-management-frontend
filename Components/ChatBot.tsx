"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

const ChatBot = () => {
    const [BoxState, setBoxState] = useState<{
        Box: boolean;
        innerBox: boolean;
    }>({ Box: false, innerBox: false });
    return (
        <motion.div className="ChatBot">
            {BoxState.Box ? (
                <motion.div className="ChatBotBox" layoutId="BotBox">
                    <AnimatePresence
                        onExitComplete={() =>
                            setBoxState((p) => ({ ...p, Box: false }))
                        }
                    >
                        {BoxState?.innerBox && (
                            <motion.div className="boxBody" {...InnerBox}>
                                <div className="head">
                                    <div className="user">Chat Bot</div>
                                    <button
                                        onClick={() =>
                                            setBoxState((p) => ({
                                                ...p,
                                                innerBox: false,
                                            }))
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                                <div className="body">
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="not-mine" />
                                    <Message type="mine" />
                                    <Message type="not-mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="not-mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                    <Message type="not-mine" />
                                    <Message type="mine" />
                                    <Message type="mine" />
                                </div>
                                <div className="foot">
                                    <input type="text" placeholder="Ask Bot" />
                                    <button>{`->`}</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ) : (
                <motion.div
                    onClick={() => setBoxState({ Box: true, innerBox: true })}
                    layoutId="BotBox"
                    className="openButton"
                ></motion.div>
            )}
        </motion.div>
    );
};

const Message: FC<{ type: "mine" | "not-mine" }> = ({ type }) => {
    return <div className={`message ${type}`}>some Message</div>;
};

const InnerBox = {
    variants: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0.3,
            },
        },
    },
    initial: "hidden",
    animate: "show",
    exit: "hidden",
};

export default ChatBot;
