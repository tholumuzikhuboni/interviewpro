import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('Missing Gemini API key');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function generateInterviewPrep(jobDescription: string, companyName: string) {
  try {
    const prompt = `As an interview preparation expert, provide detailed suggestions for preparing for an interview at ${companyName} based on this job description:

${jobDescription}

Include:
1. Key technical skills to review
2. Potential interview questions
3. Company research points
4. Relevant projects to highlight
5. Questions to ask the interviewer`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating interview prep:', error);
    throw new Error('Failed to generate interview preparation suggestions');
  }
}

export async function generateApplicationTips(jobDescription: string, companyName: string) {
  try {
    const prompt = `As a job application expert, provide advice for applying to ${companyName} for this position:

${jobDescription}

Include:
1. Key points to emphasize in the resume
2. Cover letter suggestions
3. Portfolio elements to highlight
4. Application strategy
5. Follow-up recommendations`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating application tips:', error);
    throw new Error('Failed to generate application tips');
  }
}

export async function generateInterviewQuestions(
  userName: string,
  jobTitle: string,
  companyName: string,
  experience: string
) {
  try {
    const prompt = `As an interview coach, generate personalized interview questions and suggested answers for:

Name: ${userName}
Job Title: ${jobTitle}
Company: ${companyName}
Experience: ${experience}

Please provide:
1. 5 behavioral questions with personalized answer examples
2. 5 technical questions specific to the role with detailed answers
3. 3 company-specific questions with strategic answers
4. Tips for delivering these answers effectively`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating interview questions:', error);
    throw new Error('Failed to generate interview questions');
  }
}

export async function generateApplicationEmail(
  userName: string,
  jobTitle: string,
  companyName: string,
  experience: string
) {
  try {
    const prompt = `Write a professional job application email for:

Name: ${userName}
Job Title: ${jobTitle}
Company: ${companyName}
Experience: ${experience}

Create a compelling email that:
1. Has a strong subject line
2. Introduces the candidate effectively
3. Highlights relevant experience
4. Shows enthusiasm for the role
5. Includes a professional closing`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating application email:', error);
    throw new Error('Failed to generate application email');
  }
}

export async function generateCoverLetter(
  userName: string,
  jobTitle: string,
  companyName: string,
  experience: string
) {
  try {
    const prompt = `Write a compelling cover letter for:

Name: ${userName}
Job Title: ${jobTitle}
Company: ${companyName}
Experience: ${experience}

Create a professional cover letter that:
1. Opens with a strong introduction
2. Highlights relevant skills and experiences
3. Shows understanding of the company
4. Demonstrates enthusiasm for the role
5. Closes with a clear call to action`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating cover letter:', error);
    throw new Error('Failed to generate cover letter');
  }
}