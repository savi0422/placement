import React, { useState } from 'react';
import "./StudentRegistration.css";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    course: '',
    semester: '',
    section: '',
    registerNumber: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    pincode: '',
    password: '',
    confirmpassword: '',
    tenthPassoutYear: '',
    tenthPercentage: '',
    diplomaMarks: {
      semester1: '',
      semester2: '',
      semester3: '',
      semester4: '',
      semester5: '',
      semester6: '',
    },
    photo: null,
    resume: null
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDiplomaMarksChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      diplomaMarks: {
        ...prevState.diplomaMarks,
        [name]: value
      }
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        photo: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        resume: file
      }));
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // For form progress
  const progress = (currentStep / 3) * 100;

  return (
    <div className="registration-container">
      <div className="registration-card">
        {!submitted ? (
          <>
            <div className="registration-header">
              <h1>Student Registration</h1>
              <p>Join our academic community today</p>
              
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              
              <div className="steps-container">
                <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className="step-number">1</div>
                  <div className="step-label">Personal</div>
                </div>
                <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className="step-number">2</div>
                  <div className="step-label">Education</div>
                </div>
                <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <div className="step-label">Documents</div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <div className="form-step active-step">
                  <h2>Personal Information</h2>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="Number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="gender">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">Date of Birth</label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Enter your complete address"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter your area pincode"
                      required
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='password'>password</label>
                    <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='set password'
                    required
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='retype password'>confirm password</label>
                    <input
                    type='password'
                    id='password'
                    name='password'
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    placeholder='confirm paswordd'
                    required
                    />
                  </div>
                  
                  <div className="form-buttons">
                    <button type="button" onClick={nextStep} className="btn-next">Next Step</button>
                  </div>
                </div>
              )}
              
              {currentStep === 2 && (
                <div className="form-step active-step">
                  <h2>Educational Information</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="course">Course</label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="btech">Diploma in Computer Science</option>
                        <option value="bca">Diploma in Electrical and Electronis Engneering</option>
                        <option value="mca">Diploma in Mechanical Engneering</option>
                        <option value="mca">Diploma in Civil Engneering</option>
                        <option value="mtech">Diploma in Metlaurgical Engneering</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="semester">Current Semester</label>
                      <select
                        id="semester"
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="section">Section</label>
                      <input
                        type="text"
                        id="section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        placeholder="Enter your section (A, B, C, etc.)"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="registerNumber">Register Number</label>
                      <input
                        type="text"
                        id="registerNumber"
                        name="registerNumber"
                        value={formData.registerNumber}
                        onChange={handleChange}
                        placeholder="Enter your register number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="tenthPassoutYear">10th Passout Year</label>
                      <input
                        type="text"
                        id="tenthPassoutYear"
                        name="tenthPassoutYear"
                        value={formData.tenthPassoutYear}
                        onChange={handleChange}
                        placeholder="Enter 10th passout year"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="tenthPercentage">10th Percentage</label>
                      <input
                        type="text"
                        id="tenthPercentage"
                        name="tenthPercentage"
                        value={formData.tenthPercentage}
                        onChange={handleChange}
                        placeholder="Enter 10th percentage"
                        required
                      />
                    </div>
                  </div>
                  
                  <h3>Diploma Semester Marks</h3>
                  <div className="diploma-marks-container">
                    {Object.keys(formData.diplomaMarks).map((semester, index) => (
                      <div key={index} className="form-group diploma-marks">
                        <label htmlFor={semester}>Semester {index + 1}</label>
                        <input
                          type="text"
                          id={semester}
                          name={semester}
                          value={formData.diplomaMarks[semester]}
                          onChange={handleDiplomaMarksChange}
                          placeholder={`Enter marks for semester ${index + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="form-buttons">
                    <button type="button" onClick={prevStep} className="btn-prev">Previous</button>
                    <button type="button" onClick={nextStep} className="btn-next">Next Step</button>
                  </div>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="form-step active-step">
                  <h2>Upload Documents</h2>
                  
                  <div className="photo-upload-container">
                    <div className="photo-preview">
                      {photoPreview ? (
                        <img src={photoPreview} alt="Student" />
                      ) : (
                        <div className="photo-placeholder">
                          <i className="photo-icon">📷</i>
                          <span>Photo</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="upload-instructions">
                      <h3>Profile Photo</h3>
                      <p>Upload a recent passport size photograph</p>
                      <p className="photo-requirements">JPEG or PNG format • Max size: 1MB</p>
                      
                      <label htmlFor="photo" className="upload-btn">
                        Choose Photo
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          hidden
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="resume-upload-container">
                    <div className="resume-preview">
                      <div className="resume-icon">📄</div>
                      
                      {resumeFileName ? (
                        <div className="resume-info">
                          <h4>Selected File:</h4>
                          <p className="resume-filename">{resumeFileName}</p>
                        </div>
                      ) : (
                        <div className="resume-info">
                          <h4>No File Selected</h4>
                          <p>Please upload your resume</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="upload-instructions">
                      <h3>Resume / CV</h3>
                      <p>Upload your most recent resume or curriculum vitae</p>
                      <p className="resume-requirements">PDF, DOC or DOCX format • Max size: 2MB</p>
                      
                      <label htmlFor="resume" className="upload-btn">
                        Choose File
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeChange}
                          hidden
                        />
                      </label>
                    </div>
                  </div>
                  
                  <div className="form-buttons">
                    <button type="button" onClick={prevStep} className="btn-prev">Previous</button>
                    <button 
                      type="submit" 
                      className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering. Your application has been submitted successfully.</p>
            <p className="reference-number">Reference Number: REG-{Math.floor(Math.random() * 1000000)}</p>
            <p>We have sent a confirmation email to your registered email address.</p>
            <button onClick={() => window.location.reload()} className="btn-new-registration">
              New Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentRegistration;
