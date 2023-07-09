
    const videoMediaSection = document.getElementById("videoSectionMedia");

    const apiKey = "28dAr01gEbQKnzGagTsMMjKh5gfd7OiUr8O3UozO";

    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
        },
    };

    const apiURL = "https://api.api-ninjas.com/v1/cars?model=m6";

    async function getCar() {
        try {
            const response = await fetch(apiURL, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const renderedData = await response.json();
            for (let i = 0; i < renderedData.length; i++) {
                const videoSectionBox = document.createElement("div");
                videoSectionBox.classList.add("video-section-box");
            
                const videoSectionBoxVideo = document.createElement("div");
                videoSectionBoxVideo.classList.add("video-section-box-video");
            
                const video = document.createElement("video");
                video.src = "MediaPageVideos/bmwm6.mp4";
                video.muted = true; // Set the video to be muted
            
                videoSectionBoxVideo.appendChild(video);
            
                const videoSectionBoxInfo = document.createElement("div");
                videoSectionBoxInfo.classList.add("video-section-box-info");
            
                const boxInfoDescModel = document.createElement("div");
                boxInfoDescModel.classList.add("box-info-desc");
                boxInfoDescModel.textContent = renderedData[i].model;
            
                const boxInfoDescClass = document.createElement("div");
                boxInfoDescClass.classList.add("box-info-desc");
                boxInfoDescClass.textContent = renderedData[i].class;
            
                const boxInfoDescTransmission = document.createElement("div");
                boxInfoDescTransmission.classList.add("box-info-desc");
                boxInfoDescTransmission.textContent = `Transmission ${renderedData[i].transmission}`;
            
                const boxInfoDescYear = document.createElement("div");
                boxInfoDescYear.classList.add("box-info-desc");
                boxInfoDescYear.textContent = renderedData[i].year;
            
                const boxInfoDescCylinders = document.createElement("div");
                boxInfoDescCylinders.classList.add("box-info-desc");
                boxInfoDescCylinders.textContent = renderedData[i].cylinders;
            
                const boxInfoDescFuelType = document.createElement("div");
                boxInfoDescFuelType.classList.add("box-info-desc");
                boxInfoDescFuelType.textContent = `Fuel Type: ${renderedData[i].fuel_type}`;
            
                videoSectionBoxInfo.appendChild(boxInfoDescModel);
                videoSectionBoxInfo.appendChild(boxInfoDescClass);
                videoSectionBoxInfo.appendChild(boxInfoDescTransmission);
                videoSectionBoxInfo.appendChild(boxInfoDescYear);
                videoSectionBoxInfo.appendChild(boxInfoDescCylinders);
                videoSectionBoxInfo.appendChild(boxInfoDescFuelType);
            
                videoSectionBox.appendChild(videoSectionBoxVideo);
                videoSectionBox.appendChild(videoSectionBoxInfo);
            
                videoSectionBox.addEventListener("mouseenter", function() {
                    video.play();
                });
            
                videoSectionBox.addEventListener("mouseleave", function() {
                    video.pause();
                });
            
                videoMediaSection.appendChild(videoSectionBox);
            }
        } catch (error) {
            console.error(error);
        }
    }
    getCar();
