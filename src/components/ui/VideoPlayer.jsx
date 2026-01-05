'use client'
import Image from "next/image";
import React, { useState } from "react";

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const videoId = "dQw4w9WgXcQ"; // YouTube video ID
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div className="max-w-2xl mx-auto ">
            <div className="">
                <div className="relative">
                    {!isPlaying ? (
                        // Thumbnail with play button
                        <>
                            <div
                                className="relative cursor-pointer rounded-xl w-full aspect-video p-1"
                                onClick={() => setIsPlaying(true)}
                            >
                                {/* Glow border layer */}
                                <div className="absolute -inset-1 rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25)_40%,transparent_45%),linear-gradient(#3B82F6,#00F2FF)] blur-sm opacity-20 z-0"></div>

                                {/* Main border and content */}
                                <div className="relative rounded-xl overflow-hidden border-2 border-gray-700 w-full h-full z-10">
                                    <img
                                        src={thumbnail}
                                        alt="Video Thumbnail"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white bg-opacity-50 rounded-full p-6">
                                            <Image src='/images/play.svg' width={32} height={32} alt="player" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Label at bottom-left */}
                            <span className="absolute bottom-3 left-3 z-10 bg-black bg-opacity-50 text-white px-3 py-1 border border-[#FFFFFF1A] rounded-full tracking-wider text-[10px] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent-blue text-accent-gray font-bold"></span> THE SCALE BLUEPRINT
                            </span>
                        </>

                    ) : (
                        // YouTube iframe only after click
                        <iframe
                            className="w-full aspect-video "
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}

                </div>

                {/* Description and duration */}
                <div className="mt-6 flex justify-end gap-10 px-2">
                    <span className="text-[#6B7280] font-bold text-sm">Short Description of VSL.</span>
                    <span className="text-accent-blue font-bold text-sm">[ 02:45 ]</span>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
