import React, { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Typewriter = ({ text, language = 'javascript', speed = 50 }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [showCursor, setShowCursor] = useState(true)

	useEffect(() => {
		let index = 0
		const typingInterval = setInterval(() => {
			setDisplayedText(prev => prev + text.charAt(index))
			index++
			if (index >= text.length) {
				clearInterval(typingInterval)
				setShowCursor(false)
			}
		}, speed)

		const cursorInterval = setInterval(() => {
			setShowCursor(prev => !prev)
		}, 500)

		return () => {
			clearInterval(typingInterval)
			clearInterval(cursorInterval)
		}
	}, [text, speed])

	const displayedTextWithCursor = showCursor ? displayedText + '|' : displayedText

	const customStyle = {
		...oneDark,
		'pre[class*="language-"]': {
			...oneDark['pre[class*="language-"]'],
			background: 'none !important',
			backgroundColor: 'transparent !important',
		},
		'code[class*="language-"]': {
			...oneDark['code[class*="language-"]'],
			background: 'none !important',
			backgroundColor: 'transparent !important',
		},
	}

	return (
		<SyntaxHighlighter language={language} style={customStyle}>
			{displayedTextWithCursor}
		</SyntaxHighlighter>
	)
}

const CodeTyper = () => {
	const codeSnippet = ` ppackage com.personaljourney;

public class AspiringComputerScientist {

    private String name = "Mateusz Mogielnicki";
    private String university = "Bialystok University of Technology";
    private String major = "Computer Science";
    private String passion = "Java programming";

    public AspiringComputerScientist() {
        // Constructor
    }

    public void exploreITIndustry() {
        System.out.println("As a budding computer scientist from " + university + 
        ", I am enthusiastically delving into the intricacies of the IT industry.");
    }

    public void applyKnowledgeInPractice() {
        System.out.println("My openness and determination in pursuing goals motivate me " +
        "to continually develop and apply theoretical knowledge in practice.");
    }

    public void developSkills() {
        System.out.println("I am particularly passionate about " + passion + 
        ", which I consider an area in which I want to consistently develop my skills.");
    }

    public static void main(String[] args) {
        AspiringComputerScientist student = new AspiringComputerScientist();
        student.exploreITIndustry();
        student.applyKnowledgeInPractice();
        student.developSkills();
    }
}`

	return (
		<div>
			<Typewriter text={codeSnippet} language="java" speed={0} />
		</div>
	)
}

export default CodeTyper
