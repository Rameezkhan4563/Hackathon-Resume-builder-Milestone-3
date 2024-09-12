document.getElementById("resumeform")?.addEventListener('submit', function(event){
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const academicsElement = document.getElementById("Academics") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("Experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("Skills") as HTMLTextAreaElement;

    if(nameElement && emailElement && phoneElement && academicsElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const academics = academicsElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name} </p>
            <p><strong>Email:</strong> ${email} </p>
            <p><strong>Phone:</strong> ${phone} </p>
            <h3>Education</h3>
            <p>${academics}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById("resumeOutput");
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("resumeOutputElement not found");
        }
    } else {
        console.error('One or more elements are missing');
    }
});
