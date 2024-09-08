// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume');
    form.addEventListener('submit', function (event) {
        var _a;
        event.preventDefault();
        // Get the input values
        var pic = document.getElementById('pic');
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('ph').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // 
        var resumeNameElement = document.getElementById("resumeName");
        // pic element
        var picFile = (_a = pic.files) === null || _a === void 0 ? void 0 : _a[0];
        var picUrl = picFile ? URL.createObjectURL(picFile) : '';
        // unique url path
        var resumeName = resumeNameElement.value;
        var uniquePath = "resume/".concat(resumeName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '__'), "_cv.html");
        // Create the resume content
        var resumeContent = "\n            <h2>Generated Resume</h2>\n            ".concat(picUrl ? "<img src=\"".concat(picUrl, "\" alt=\"Profile Picture\" class=\"pic\">") : '', "\n            <p><strong>Name:</strong> ").concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeContent);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your Latest Resume';
        // Add the resume content to the page
        var resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = resumeContent;
        resumeContainer.style.border = "2px solid #3498bd";
        resumeContainer.style.padding = "20px";
        resumeContainer.style.marginTop = "20px";
        resumeContainer.style.backgroundColor = "aliceblue";
        resumeContainer.style.borderRadius = "8px";
        resumeContainer.appendChild(downloadLink);
        // Remove existing resume content if any
        var existingResume = document.querySelector('.generated-resume');
        if (existingResume) {
            existingResume.remove();
        }
        // Append the new resume content
        resumeContainer.classList.add('generated-resume');
        form.insertAdjacentElement('afterend', resumeContainer);
    });
});
