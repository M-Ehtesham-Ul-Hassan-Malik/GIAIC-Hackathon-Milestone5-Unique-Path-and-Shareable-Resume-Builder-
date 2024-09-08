// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('resume') as HTMLFormElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the input values
        const pic = (document.getElementById('pic') as HTMLInputElement);
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('ph') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // 
        const resumeNameElement = document.getElementById(
            "resumeName"
        )as HTMLInputElement;

        // pic element
        const picFile = pic.files?.[0];
        const picUrl = picFile ?URL.createObjectURL(picFile) : '';

        // unique url path
        const resumeName = resumeNameElement.value;
        const uniquePath = `resume/${resumeName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '__')}_cv.html`;

        // Create the resume content
        const resumeContent = `
            <h2>Generated Resume</h2>
            ${picUrl ? `<img src="${picUrl}" alt="Profile Picture" class="pic">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;


        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeContent);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Latest Resume';

        // Add the resume content to the page
        const resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = resumeContent;
        resumeContainer.style.border = "2px solid #3498bd";
        resumeContainer.style.padding = "20px";
        resumeContainer.style.marginTop = "20px";
        resumeContainer.style.backgroundColor = "aliceblue";
        resumeContainer.style.borderRadius = "8px";

        resumeContainer.appendChild(downloadLink);

        // Remove existing resume content if any
        const existingResume = document.querySelector('.generated-resume');
        if (existingResume) {
            existingResume.remove();
        }

        // Append the new resume content
        resumeContainer.classList.add('generated-resume');
        form.insertAdjacentElement('afterend', resumeContainer);
    });
});
