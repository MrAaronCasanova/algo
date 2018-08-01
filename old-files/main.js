// https://medium.com/coderbyte/the-10-best-coding-challenge-websites-for-2018-12b57645b654

/* --------------------------------------------
CodeByte -mraa-1bor
-------------------------------------------- */

/* ------ LongestWord ------ */

// Casy
// function LongestWord(sen) {
//   let senArr = sen.replace(/[^A-Za-z]/g, ' ').split(' ');
//   let result = senArr[0];
//   senArr.forEach(function (word) {
//     if (word.length > result.length) {
//       result = word;
//     }
//   });
//
//   return result;
// }

// CodeByte
// function LongestWord(sen) {
//
//   // we use the regex match function which searches the string for the
//   // pattern and returns an array of strings it finds
//   // in our case the pattern we define below returns words with
//   // only the characters a through z and 0 through 9, stripping away punctuation
//   // e.g. 'hello$% ##all' becomes [hello, all]
//   var arr = sen.match(/[a-z0-9]+/gi);
//
//   // the array sort function takes a function as a parameter
//   // which is used to compare each element in the array to the
//   // next element in the array
//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   });
//
//   // this array now contains all the words in the original
//   // string but in order from longest to shortest length
//   // so we simply return the first element
//   return sorted[0];
//
// }

// console.log(LongestWord('the $$$longest# word is coderbyte'));
// console.log(LongestWord('i love dogs'));
// console.log(LongestWord('fun!@ time'));

/* ------ FirstFactorial ------ */

// // Casy
// function FirstFactorial(num) {
//   let result = num;
//
//   for (var i = num - 1; i > 0; i--) {
//     result *= i;
//   }
//
//   return result;
// }
//
// console.log(FirstFactorial(4));

/* ------ FirstFactorial ------ */

// // Casy
// function FirstReverse(str) {
//
//   let strArr = str.split('');
//   let revArr = [];
//   for (var i = strArr.length; i >= 0; i--) {
//     revArr.push(strArr[i]);
//   }
//
//   return revArr.join('');
//
// }
//
// // keep this function call here
// console.log(FirstReverse('hello'));

/* ------ LetterChanges ------ */

// // Casy
// function LetterChanges(str) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let vowels = 'aeiou';
//   let strArr = str.toLowerCase().split('');
//   let altArr = strArr.map(function (letter) {
//     let letterIdx = alphabet.indexOf(letter);
//     if (letterIdx !== -1) {
//       if (letterIdx + 1 === 26) {
//         return alphabet[0];
//       } else {
//         return alphabet[letterIdx + 1];
//       }
//     } else {
//       return letter;
//     }
//   });
//
//   let upVowels = altArr.map(function (letter) {
//     if (vowels.indexOf(letter) !== -1) {
//       return letter.toUpperCase();
//     } else {
//       return letter;
//     }
//   });
//
//   // code goes here
//   return upVowels.join('');
// }
//
// // keep this function call here
// console.log(LetterChanges('hello*3z'));
// console.log(LetterChanges('fun times!'));

/* ------ SimpleAdding ------ */

// // Casy
// function SimpleAdding(num) {
//   let result = [];
//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }
//
//   // code goes here
//   return result.reduce(function (acc, next) {
//     return acc + next;
//   });
// }
//
// console.log(SimpleAdding(12));

// // CodeByte
// function SimpleAdding(num) {
//   var answer = 0;
//
//   // loop from 1 to num
//   for (var i = 1; i <= num; i++) {
//     answer = answer + i;
//   }
//
//   return answer;
// }
//
// console.log(SimpleAdding(12));

/* ------ LetterCapitalize ------ */

// function LetterCapitalize(str) {
//   let wordArr = str.split(' ');
//   let capArr = wordArr.map(function (word) {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//
//   return capArr.join(' ');
// }
//
// console.log(LetterCapitalize('hello world'));

/* ------ SimpleSymbols ------ */

// function SimpleSymbols(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[a-z]/i) !== null) {
//       if (str[i - 1] !== '+' || str[i + 1] !== '+') {
//         return false;
//       }
//     }
//   }
//
//   return true;
// }
//
// console.log(SimpleSymbols('f++d+'));
// console.log(SimpleSymbols('aaaa'));
// console.log(SimpleSymbols('+d+=3=+s+'));

/* ------ CheckNums ------ */

// // Casy
// function CheckNums(num1, num2) {
//   if (num1 === num2) {
//     return '-1';
//   } else if (num2 > num1) {
//     return 'true';
//   } else {
//     return 'false';
//   }
// }
//
// console.log(CheckNums(3, 122));

// // CodeByte
// function CheckNums(num1, num2) {
//
//   // we use a ternary expression to write as little code as possible
//   return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
// }
//
// console.log(CheckNums(3, 122));

/* ------ CheckNums ------ */

// function TimeConvert(num) {
//   let hour = Math.floor(num / 60);
//   let min = num % 60;
//
//   // code goes here
//   return `${hour}:${min}`;
// }
//
// // keep this function call here
// console.log(TimeConvert(126));
// console.log(TimeConvert(45));

/* ------ AlphabetSoup ------ */

// function AlphabetSoup(str) {
//   return str.split('').sort().join('');
// }
//
// console.log(AlphabetSoup('coderbyte'));
// console.log(AlphabetSoup('hooplah'));

/* ------ KaprekarsConstant ------ */

// // Casy
// function KaprekarsConstant(num) {
//   let count = 0;
//   let checkNum = num;
//   while (checkNum !== 6174) {
//     let checkArr = checkNum.toString().split('').sort();
//     while (checkArr.length !== 4) {
//       checkArr.unshift(0);
//     }
//
//     let ascNum = checkArr.join('');
//     let descNum = checkArr.reverse().join('');
//     checkNum = descNum - ascNum;
//     count++;
//   }
//
//   return count;
// }
//
// console.log(KaprekarsConstant(11));
// console.log(KaprekarsConstant(2111));
// console.log(KaprekarsConstant(9831));

// ----------------------------
// vid 204   time 1:34

// *********************************************************************************************************************************************************************************************************************************************************************************************************************************

// TermsArr.reduce(function (acc, term) {
// 	acc += term.innerText + '**';
// 	return acc;
// }, '')
//
// TermsArr.reduce(function (acc, term) {
// 	acc += term.innerText + '**';
// 	return acc;
// }, '').split('**')
//
// let newArr = TermsArr.reduce(function (acc, term) {
// 	acc += term.innerText + '**';
// 	return acc;
// }, '').split('**')


0: "Page",
1
:
"Discussion"
2
:
"View source"
3
:
"History"
4
:
"Personal tools↵Log in / create account↵"
5
:
"Log in / create account↵"
6
:
"Navigation↵Main Page↵Contents↵Random page↵Create page↵Help↵Collaborative sites↵"
7
:
"Main Page↵"
8
:
"Contents↵"
9
:
"Random page↵"
10
:
"Create page↵"
11
:
"Help↵"
12
:
"Collaborative sites↵"
13
:
"Interaction↵Community portal↵Current events↵Recent changes↵Site support↵"
14
:
"Community portal↵"
15
:
"Current events↵"
16
:
"Recent changes↵"
17
:
"Site support↵"
18
:
"Toolbox↵What links here↵Related changes↵Special pages↵Printable version↵Permanent link↵"
19
:
"What links here↵"
20
:
"Related changes↵"
21
:
"Special pages↵"
22
:
"Printable version↵"
23
:
"Permanent link↵"
24
:
"AARON - AARON is a screensaver program written by artist Harold Cohen who created the original artistic images. AARON utilizes artificial intelligence to continuously create original paintings on PCs."
25
:
"Abandonware - Abandonware refers to software that is no longer being sold or supported by its publisher. Most abandonware is still considered illegal to sell unless the publisher has re-released the software as freeware."
26
:
"ABC: Another Bittorrent Client - Another Bittorrent Client (ABC) is a BitTorrent client based on BitTornado. It supports a queueing system with priority, global and local (per torrent) preference setting for downloading torrent (including upload and download rating limit), 3 upload options to do with completed file, and a system named Upload Rate Manager (URM) to force dan del piano torrents out of queue if there isn't a pre-set amount of upload activity. There is also an extensive web interface in ABC, allowing for other applications to view and change torrents and preferences remotely."
27
:
"ABEND: Abnormal End of Task - Abnormal end of task (ABEND) refers to software crashes or lossage. This term was derived from an error message on the IBM 360."
28
:
"ABEND: Absent By Enforced Net Deprivation - Absent By Enforced Net Deprivation (ABEND) refers to the sent-in-email subject lines,warning friends and others of forced loss of Internet access (due to moving, network outages, or illness)."
29
:
"ABI: Application Binary Interface - Application Binary Interface(ABI) is a specification for the application programming interface (API) and machine language for a hardware platform."
30
:
"ABNF: Augmented Backus Naur Form - The augmented Backus Naur form (ABNF), an extention to the Backus-Naur form (BNF), is a metasyntax used to express context-free grammars: that is, a formal way to describe formal languages which consist of its own syntax and derivation rules. The motive principle for this metalanguage is to describe a formal system of a language which is a protocol (bidirectional specification). It is documented in RFC 4234 and often serves as the definition language for IETF communication protocol."
31
:
"Abstract Base Class - An abstract base class, a term used in the object oriented programming language, is meant to be used as the base class from which other classes are derived."
32
:
"Abstract Type - In software engineering, an abstract type is a type in a nominative type system which is declared by the programmer, and which has the property that it contains no members which also are not members of some declared subtype. In many object-oriented programming languages, abstract types are known as abstract base classes, interfaces, traits, mixins, flavors, or roles. Note that these names refer to different language constructs which are (or may be) used to implement abstract types."
33
:
"ACCU: Association of C and C++ Users - Association of C and C++ Users (ACCU) is a worldwide association of people who are interested in C, C++, and related programming languages."
34
:
"ACD Canvas - ACD Canvas is a graphics, publishing, and imaging product for personal computers. Canvas provides tools for creating and editing vector graphics and pixel-based images. It is used for illustration, page layout, animation, presentations, and publications in printed and Web formats."
35
:
"ACDI: Asynchronous Communications Device Interface - Asynchronous Communications Device Interface (ACDI) is a software device that permits asynchronous transmission, a way of transmitting data in which one character is sent at a time, and there may be uneven amounts of time between characters.A start bit and a stop bit notify the receiving computer when the transmission begins and ends.In synchronous transmission, strings of multiple characters are transmitted; this method is faster, but more expensive.."
36
:
"ACF NCP: Advanced Communication Function - Network Control Program - Advanced Communication Function - Network Control Program (ACF NCP) is the program that controls network communications in the Systems Network Architecture (SNA) by IBM."
37
:
"Acrobat - Acrobat, a document exchange software from Adobe Systems, provides a platform-independent means of creating, viewing, and printing documents. Acrobat can convert a DOS, Windows, UNIX or Macintosh documents into a Portable Document Format (PDF) which can be displayed on any computer with an Acrobat reader. The Acrobat reader can be downloaded free from the Adobe website."
38
:
"Action Request System - Action Request System is a Client-server software application toolset developed by Remedy Corp. It is most commonly used as a tracking system. The AR System uses a third party database (Sybase, MS SQL, Oracle, etc...) for storing data in tables. In addition, the database stores a set of metatables known as the data dictionary. These metatables contain the source code which tell the applications how to interact with the users and the data. The AR System has an open API, a feature which allows users to create custom client tools and scripts that talk directly to the AR Server."
39
:
"ActionScript - ActionScript is a scripting language used in Macromedia Flash. It is similar in syntax to JavaScript."
40
:
"Active Cell - Active cell, also called the current cell, is the cell in a spreadsheet (such as Microsoft Excel) in which numbers or formulas can be entered. The active cell shows a thick border, and its name is at the top of the screen."
41
:
"Active Content - Active Content is the program code embedded in the contents of a web page. When the page is accessed by a web browser, the embedded code is automatically downloaded and executed on the user's workstation. Active content is either interactive, such as Internet polls or opt-in features, or dynamic, such as animated GIFs, stock tickers, weather maps, JavaScript applications, embedded objects, streaming video and audio or ActiveX applications. Streaming video and audio rely on browser plug-ins, such as RealPlayer, to display active content."
42
:
"ActiveMovie - ActiveMovie, a multimedia streaming technology developed by Microsoft, enables users to view multimedia content distributed over the Internet, an intranet, or CD-ROM. It is built into the Internet Explorer browser and supported by Windows operating systems."
43
:
"ActiveX Programs - ActiveX programs, often written using Visual Basic, are used for active contents that are called and used by other programs and the operating system. For example, ActiveX is used with Microsoft Internet Explorer to make interactive Web pages that can perform functions, rather than static pages. With ActiveX, users can ask or answer questions, use push buttons, and interact in other ways with the Web page. ActiveX applications can have full access to your system and you must be very careful when allow your system to execute this kind of code, because it may conduct malicious activities."
44
:
"ACT-R - ACT-R is a symbolic cognitive architecture, which has been widely used to model different aspects of human cognitive behavior. ACT-R has been used to study many different aspects of human performance including perception and attention, learning and memory, problem solving and decision making, language processing, intelligent agents, intelligent tutor systems, and Human-computer interaction. ACT-R can be compared in many aspects to SOAR, DUAL, EPIC, Psi, Copycat, and subsumption architectures."
45
:
"Ada - Ada, Pascal-based programming language, is a structured, statically typed programming language. It is positioned to address much the same tasks as C or C++, but with the type-safety of a language like Java. Ada was designed to enable computers to control automatic equipment, but is now also used for other applications. Ada was named after Ada, Lady Lovelace."
46
:
"ADABAS - ADABAS is a relational database system from Software AG, used for IBM mainframes, UNIX, VAX, and OS/2. As a high-performance database for large, mission-critical applications, ADABAS supports thousands of users in parallel while giving sub-second response times. Its key features include: Openness and interoperability with minimal resource usage; A single Web-based administration tool; Open SOA and SQL interfaces; Data management with no limits; Proven performance and reliability"
47
:
"Adaptiv Workforce - Adaptiv Workforce, an application from Adaptiv Software, helps employers manage information about employees, shifts, and pay schedules, and build labor forecasts."
48
:
"Adaptive Server Enterprise (ASE) - Adaptive Server Enterprise (ASE), relational database management system product of Sybase Corporation, is a direct descendant of Sybase SQL Server."
49
:
"Ad-Aware - Ad-Aware is a program from Lavasoft that detects and removes spyware on a user's computer. It also detects dialers, trojans, malware, data-mining, aggressive advertising, Parasites, Scumware, Browser hijackers, and tracking components. There is a freeware version called Ad-Aware Personal, as well as two commercial productsâ€”Ad-Aware Plus and Ad-Aware Professional. The free download includes Ad-Aware SE Personal Edition, skins, help manuals, RegHance and the latest definition file. The freeware version of Ad-Aware is compatible with Microsoft Windows 98/Me/NT/2000/XP/2003. Since January 6, 2006, Ad-Aware SE Personal is a part of the Google Pack."
50
:
"Add-in - Add-in, also known as Add-on, is a mini program that runs in combination with the main application in order to extend and improve the functionality of that application. In the Windows environment, add-ins are becoming increasingly commonly-used Object Linking and Embedding (OLE) technologies."
51
:
"Add-on - Add-on, also known as Add-in, is a mini program that runs in combination with the main application in order to extend and improve the functionality of that application. For example, there are add-on report generation programs that are attached to popular database products such as dBASE, giving them additional report-generation and graphics capabilities."
52
:
"AdeptXBBS - AdeptXBBS was a BBS originally written explicitly for the OS/2 operating system. It was believed that the OS/2 operating system would propel this new BBS as a leader. While AdeptXBBS was completed with much of the functionality, features, and performance initially promised, the product never reached the popularity that the authors hoped and then faded away. In particular, as the world of Client/Server BBS systems took hold, the Internet came into wide use, and free operating systems such as Linux and FreeBSD could act as dialin/telnet servers gained popularity, most of BBS systems become obsolete."
53
:
"ADF: Application Development Facility - Application Development Facility (ADF) is an application development package designed for IMS by IBM. Programmers define sets of rules and these are combined with a simple screen design to provide a rather basic application."
54
:
"ADL: Architecture Description Language - An Architecture Description Language (ADL) is a computer language used to describe software and/or system architectures, because the software architecture must be communicated to software developers and other stakeholders concerned about the architectrue. There are several ADLs, such as Acme (developed by CMU), AADL (standardized by SAE), C2 (developed by UCI), Darwin (developed by Imperial College London), and Wright (developed by CMU)."
55
:
"Adobe Acrobat - Acrobat, a document exchange software from Adobe Systems, provides a platform-independent means of creating, viewing, and printing documents. Acrobat can convert a DOS, Windows, UNIX or Macintosh documents into a Portable Document Format (PDF) which can be displayed on any computer with an Acrobat reader. The Acrobat reader can be downloaded free from the Adobe website."
56
:
"Adobe Audition - Adobe Audition, a software product of Adobe Systems based on Cool Editor, is a digital audio editor."
57
:
"Adobe Illustrator - Adobe Illustrator, a software product of Adobe Systems, is a draw and design program for both Macintosh and Windows OS."
58
:
"ADP: Automatic Data Processing - Automatic Data Processing (ADP) refers to computer aided storing, manipulating or processing of information in the data format, requiring minimal or no human interaction."
59
:
"Adware - Adware, a form of spyware, collects information about the user or user activities in order to display advertisements in the Web browser. Adware or advertising-supported software includes advertisements or other marketing material automatically loaded by the software and displayed or played back after installation about the computer or its users activities. It is uploaded automatically when the user has not requested it. These applications often present banner ads in pop-up windows or through a bar that appears on a computer screen."
60
:
"AE: Action Evolution - Action evolution (AE) is a technique used in the fields of artificial intelligence and reinforcement learning for discovering new solutions. It is built on the idea that creative ideas in the human mind develops through a process simular to the evolutionary process. --Mneser 19:00, 20 September 2005 (UTC)"
61
:
"AFC: Advanced Communication Function - Advanced communication function (ACF), also known as Advanced Communications Function/Network Control Program (ACF/NCP), often referred as NCP, is the primary SNA network control program. ACF/NCP resides in the communications controller and interfaces with the SNA access method in the host processor to control network communications. ACF/NCP can also communicate with multiple hosts using local channel or remote links (PU type 5 or PU type 4) thus enabling cross domain application communication. In a multiple mainframe SNA environment, any terminal or application can access any other application on any host using cross domain logon."
62
:
"AFK Gaming - AFK Gaming is a technique used typically by MMORPG gamers, but also can be theoretically used by any other game genre. AFK gamers use software, either in the form of a bot or a game's built-in macro system, to continuously do a repetitive task for them, over and over. It also gives the player a significant competitive edge against other players."
63
:
"After Dark - After Dark is a popular screen saver program from Berkeley Systems that allows users to create custom animations."
64
:
"Agent Software - In the context of computer software, agent is a software program that performs a service, such as collecting device or user information, alerting the user of something that needs to be done; or monitoring incoming data and giving an alert when a message has arrived. An intelligent agent can make decisions and take actions about information it finds."
65
:
"AI: Artificial Intelligence - Artificial Intelligence(AI) is a branch of computer science on how to endow computers with capabilities of human intelligence. AI can be seen as an attempt to model aspects of human thought on computers. It is also sometimes defined as trying to solve by computer any problem that a human can solve faster. Examples of AI include speech and pattern recognition."
66
:
"AIGLX: Accelerated Indirect GLX - Accelerated Indirect GLX(AIGLX) is an open source project founded by the X.Org Foundation and the Fedora Core Linux community to allow accelerated indirect GLX rendering capabilities to X.org and DRI drivers. This allows remote X clients to get fully hardware accelerated rendering over the GLX protocol. AIGLX is also a required component to offering good performance when using an OpenGL compositing window manager, such as Compiz or Metacity."
67
:
"AIX: Advanced Interactive eXecutive - Advanced Interactive eXecutive(AIX), originally called as Advanced IBM Unix, is a proprietary operating system developed by IBM based on UNIX System. AIX has pioneered numerous network operating system enhancements, introducing new innovations later adopted by Unix-like operating systems."
68
:
"Algol Object Code - In computer science, ALGOL Object Code was a simple and compact and stack-based instruction set architecture mainly used in teaching compiler construction."
69
:
"Algorithm - Algorithm is a procedure and sequence of actions to accomplish some task. The concept of an algorithm is often illustrated by the example of a recipe, although many algorithms are much more complex; algorithms often have steps that repeat (iterate) or require decisions (such as logic or comparison). In most higher level programs, algorithms act in complex patterns, each using smaller and smaller sub-methods which are built up to the program as a whole. In most languages, they are isomorphic to functions or methods. Most algorithms can be directly implemented by computer programs; any other algorithms can at least in theory be simulated by computer programs."
70
:
"Allegro Library - The Allegro library is a free video game software library, with functions for 2-dimensional imaging, basic audio, input, timers, and fixed-point and floating-point matrix arithmetic. The programs that use the library work on DOS, Microsoft Windows, BeOS, Mac OS X, and various UNIX systems with (or without) X Window System, abstracting their application programming interfaces into one portable interface."
71
:
"Aloha - Aloha, a software from Media Synergy, allows a user to add graphics, animation, and sound to e-mail messages. "
72
:
"Alpha Test - Alpha test is the first formal test of a newly developed hardware or software product by internal people. The key objectives of the alpha test are functionality confirmation and bug identification. When the first round of bugs has been fixed, the product goes into beta test with actual users and customers."
73
:
"Alpha Version - Alpha version is an early version of a software or hardware product, which passed the Alpha test. Alpha version may not contain all of the features that are planned for the final release. Typically, software goes through two stages of testing before it is considered finished. The first stage, called alpha testing which is done by internal users. The second stage, called beta testing , generally involves a limited number of external users."
74
:
"Alphanumeric - Alphanumeric refers to a group of printable characters that include the letters of the alphabet in both upper and lower case, the numerals plus a limited group of additional symbols and punctuation marks."
75
:
"ALSA: Advanced Linux Sound Architecture - Advanced Linux Sound Architecture(ALSA) is a Linux kernel component intended to replace the original Open Sound System for providing drivers for sound cards. Some of the goals of the ALSA project were to support automatic configuration of sound card hardware, and graceful handling of multiple sound devices in a system, goals which it has largely met. A couple of different frameworks such as JACK use ALSA to provide the ability to perform low latency professional grade audio editing and mixing."
76
:
"ALTQ: ALTernate Queueing - ALTernate Queueing (ALTQ), a queueing framework for BSD UNIX, provides queueing disciplines and other QoS related components required to realize resource-sharing and Quality of Service. It is most commonly implemented on BSD-based routers. ALTQ is included in the base distribution of FreeBSD and is integrated into the pf packet filter of OpenBSD."
77
:
"Aluria Software - Aluria Software is a company that sells spyware removal products such as WhenU."
78
:
"AmigaOS - AmigaOS is the default native operating system of the Amiga personal computer. On top of a basic kernel called Exec, it includes an abstraction of the Amiga's unique hardware, a disk operating system called AmigaDOS, a windowing system called Intuition and a graphical user interface called Workbench."
79
:
"AML: Astronomical Markup Language - Astronomical Markup Language (AML) is a standardized format for exchange of metadata related to astronomy. This language will enhance the ability of astronomers to retrieve scientific data, and make it possible for humans and intelligent agents to use the same information. Humans can view AML documents by means of a Java AML browser; intelligent agents can use an Extensible Markup Language (XML) parser."
80
:
"Amoeba - Amoeba is a distributed operating system. Amoeba is a powerful microkernel-based system that turns a collection of workstations or single-board computers into a transparent distributed system. It has been in use in academia, industry, and government for about 5 years. It runs on the SPARC (Sun4c and Sun4m), the 386/486, 68030, and Sun 3/50 and Sun 3/60. Amoeba is only available under licence from the VUA, but is free of charge and includes all source, binaries and documentation."
81
:
"Anatomic P2P - Anatomic P2P is a decentralised peer-to-peer network based on the BitTorrent protocol. All software that forms a part of Anatomic P2P is licenced under the GNU (General Public License). Anatomic P2P consists of various scripts and applications, including the tracker (or node) script, supertracker (or supernode) script, planter applicatons and the client. All the scripts are written in PHP but nevertheless would function in any other language. All the applications are written in Python."
82
:
"ANDF: Architecture Neutral Distribution Format - Architecture Neutral Distribution Format(ANDF) is an intermediate language created by the Open Software Foundation (OSF, now the Open Group) for the use in developing UNIX software."
83
:
"Angel Operating System - Angel Operating System is a single address space, micro-kernel operating system for multiprocessor computers, developed at Imperial College and City University, London, UK. Angel OS unifies naming and interprocess communication in both shared and distributed memory multiprocessors by using distributed shared memory techniques when shared memory is not already provided by the hardware."
84
:
"ANSYS - ANSYS, a product by ANSYS inc. is a software package which used in finite element analysis. Its field of use is large including structural work, electromagnetics, fluid dynamics, thermal analysis, etc."
85
:
"Anti-Adware - Anti-adware refers to any software utility or algorithm that scans your system and removes adware, spyware, keyloggers, trojans, and other malicious code from your computer. Anti-adware maybe a stand-alone software or part of an anti-virus software."
86
:
"Antique Software - Antique software refers to applications, development tools, and systems software that, while no longer in widespread use, are still of interest. These programs are typically available for download on the Web, sometimes with the blessing of the publisher who still owns the rights."
87
:
"AOS: Add One and do not Skip - Add One and do not Skip (AOS) is a PDP-10 (a Digital Equipment Corporation platform) instruction that took any memory location and added 1 to it. There were eight such instructions: AOSE added 1 and then skipped the next instruction if the result was Equal to zero; AOSG added 1 and then skipped if the result was Greater than 0; AOSN added 1 and then skipped if the result was Not 0; AOSA added 1 and then skipped Always; and so on."
88
:
"Apache - Apache is the most popular web server on the Internet with more than 70% of the web sites on the Internet using Apache. The Apache HTTP Server is a project of the Apache Software Foundation and the software is free. Originally designed for Unix servers, Apache has been ported to Windows and other network operating systems (NOS). The name "Apache" was derived from the word "patchy" that the Apache developers used to describe early versions of their software. Apache provides a full range of Web server features, including CGI, SSL, and virtual domains. Apache also supports plug-in modules for extensibility."
89
:
"Apache HTTP Server - Apache HTTP Server is an open source HTTP web server for Unix-like systems (BSD, Linux, and UNIX systems), Microsoft Windows, Novell Netware and other platforms."
90
:
"Apache Incubator - Apache Incubator is the stepping stone for projects hoping to become fully fledged Apache Software Foundation projects. Code donations from external organisations and existing external projects wishing to move to Apache will enter through the Incubator."
91
:
"Apache Project - The Apache Project is a collaborative software development effort aimed at creating a robust, commercial-grade, featureful, and freely-available source code implementation of an HTTP (Web) server. The project is jointly managed by a group of volunteers worldwide."
92
:
"Apache Tomcat - Apache Tomcat, also called Tomcat, is a web container developed at the Apache Software Foundation. Tomcat implements the servlet and the JavaServer Pages (JSP) specifications from Sun Microsystems, providing an environment for Java code to run in cooperation with a web server. It adds tools for configuration and management but can also be configured by editing configuration files that are normally XML-formatted. Because Tomcat includes its own HTTP server internally, it is also considered a standalone web server."
93
:
"API Documentation - Application Program Interface (API) documentation refers to documentate the Application programming interface (API) functions and operation details, so that other programmers can continue developing in the project, or develop other software that make use of the projects API, without having to study the code itself."
94
:
"API: Application Programming Interface - Application Programming Interface (API) is a set of definitions of the ways one piece of computer software communicates with another. It is a method of achieving abstraction, usually (but not necessarily) between lower-level and higher-level software. An API defines data structures and subroutine calls. Networking APIs are entry points to libraries that implement network and data communication protocols. Traditionally, the primary networking APIs have been implemented in socket libraries, for example Berkeley sockets API, Windows Sockets (Winsock) APIs, and Java network APIs."
95
:
"AppleScript - AppleScript is an object-oriented shell language and command-line interface for Macintosh, beginning with System 7 Pro."
96
:
"AppleShare - AppleShare is the file server software developed by Apple Computer, Inc. for Mac OS users to share files among Macintosh computers on the same network."
97
:
"Applet - Applet is a little application that can be a utility or other simple program. Applets are often written in Java language which are attached to HTML documents. An applet runs in the context of another progam, for example a web browser. The applet must run in a container, which is provided by a host program, or through a plugin, or a variety of other applications including mobile devices that support the applet programming model. Unlike a program, an applet cannot run independently. It provides display features often with interaction with human users, and is usually stateless and has restricted security privileges. An applet characteristically performs a very narrow function that has no independent use. Hence, it is an application -let (Applet)."
98
:
"Application - Application in computer software refers to a complete and self-contained program that helps the user accomplish a specific task. Application programs should be distinguished from system programs such as operating systems, which control the computer and run those application programs."
99
:
"Application Framework - In computer programming, an application framework refers to a set of libraries or classes that are used to implement the standard structure of an application for a specific operating system. By bundling a large amount of reusable code into a framework, much time is saved for the developer."
100
:
"Application Macro - Application macro is a type of macro which allows the user to specify a series of (oft-repeated) actions as one new procedure. These application macros are generally recorded by carrying out the sequence once and letting the application "remember" the actions. More advanced users can often make use of a built-in macro programming language which has direct access to the features of the application."
101
:
"Application Package - Application package includes the software programs and related documentation and instruction manuals of this particular software."
102
:
"Application Program - In computer software, Application program, also known as Application software or simply Application, refers to a complete and self-contained software that helps the user accomplish a specific task. Application programs should be distinguished from system programs such as operating systems, which control the computer and run those application programs."
103
:
"Application Programmer - Application programmer is a person with computer programming expertise to develop application programs."
104
:
"Application Server - An application server is a server computer in a computer network dedicated to running certain software applications. The term also refers to the software installed on such a computer to facilitate the serving (running) of other applications. For example, an web application server delivers content to the Web, interprets site traffic and constructs pages based on a dynamic content repository."
105
:
"Application Software - In computer software, Application software, also known as Application program or simply Application, refers to a complete and self-contained software that helps the user accomplish a specific task. Application programs should be distinguished from system programs such as operating systems, which control the computer and run those application programs."
106
:
"Application Stack - Application stack, also known as application suite or application set, is a group of applications closely related in functionality. For example, a typical office application stack would include programs such as word processing, spreadsheet, database, etc. as well as a Web browser and e-mail and instant messaging programs."
107
:
"Application Suite - Application suite, also known as application stack or application set, is a group of applications closely related in functionality. For example, a typical office application stack would include programs such as word processing, spreadsheet, database, etc. as well as a Web browser and e-mail and instant messaging programs."
108
:
"APSE: Ada Programming Support Environment - Ada Programming Support Environment(APSE) is a set of programs to support software development in the Ada programming language."
109
:
"AR Mid-Tier: Action Request Mid-Tier - Action Request Mid-Tier (AR Mid-Tier) is a servlet application of Remedy's Action Request System, which allows users to access the AR Server with a standard web browser."
110
:
"AR System Administrator - Action Request System (AR System) is a client-server software application toolset developed by Remedy Corp. It is most commonly used as a tracking system. The AR System uses a third party database (Sybase, MS SQL, Oracle, etc...) for storing data in tables. In addition, the database stores a set of metatables known as the data dictionary. These metatables contain the source code which tell the applications how to interact with the users and the data. The AR System has an open API, a feature which allows users to create custom client tools and scripts that talk directly to the AR Server."
111
:
"AR System Import - AR System Import is a fat client for Remedy's Action Request System that is used to import data. Only administrators of the AR System are allowed to use the import tool. The import tool uses the merge action of the AR API to create entries from a .arx or .csv file. This client is only used for importing data - applications, forms, workflow and metadata are imported via AR System Administrator."
112
:
"AR System: Action Request System - Action Request System (AR System) is the Remedy's platform and development environment for automating Service Management business processes.Â  The foundation for Remedy IT Service Management for the Enterprise and Customer Service and Support applications, AR System is also the development environment for thousands of customer- and partner-built applications."
113
:
"Architecture - Architecture, in computer software contex, is a framework or structure that provides the form of a software system and the conventions, policies, and mechanisms for composing itself with subsystems, or component parts, that can populate the architecture. The architecture defines how the parts relate to each other including constraints governing how they can relate. If a system is divided into parts and components, then there are interfaces that define how the parts intercommunicate or interface. "
114
:
"Ardour - Ardour, a Free Software released under the GNU General Public License, is a professional hard disk recorder and digital audio editor application. It currently runs on GNU / Linux, Solaris, and Mac OS X."
115
:
"ASLR: Address Space Layout Randomization - Address Space Layout Randomization (ASLR) is a process which entails arranging the positions of major data areas randomly in virtual address space. This can include the base of the executable, libraries, heap, and stack. The chances of an attacker guessing where any of these randomly placed areas is 1 / 2b, where b is the number of bits of entropy used to determine the position of the data area. In many systems, 2b can be in the thousands or millions; on modern 64-bit systems, these numbers typically reach the millions at least."
116
:
"ASP: Active Server Pages - Active Server Pages (ASP), a Microsoft technology, allows programmers to develop custom code that works with Microsoft's Internet Information Server (IIS). Programmers may use one of two scripting languages to create ASP pages: VBScript (Visual Basic Script) or JavaScript. ASP pages often utilize ActiveX Data Objects to link to SQL Server databases and other data sources."
117
:
"ASPack - ASPack is a computer compression utility for Microsoft Windows operating systems. ASPack reduces the file size of programs by as much as 70%."
118
:
"Assembly - Assembly refers to all of the files that comprise an application, including the resource, security management, versioning, sharing and deployment information. An assembly may appear as a single DLL or EXE file, or as multiple files."
119
:
"Assembly Language - Assembly language is a type of computer CPU programming language, which consists entirely of numbers and are almost impossible for humans to read and write. Each type of CPU has its own machine language and assembly language, so an assembly language program written for one type of CPU won't run on another. In the early days of programming, all programs were written in assembly language. Now, most programs are written in a high-level language such as C and C++. Programmers still use assembly language when speed is essential or when they need to perform an operation that isn't possible in a high-level language."
120
:
"Audacity - Audacity is a free digital audio editor that runs on the Linux/UNIX, Mac OS, and Microsoft Windows operating systems. The source code for Audacity is released under the GNU General Public License. The graphical user interface for the editor has been produced using the wxWidgets library."
121
:
"Authoring Tool - Authoring tool, also known as authorware, is a program to help write hypertext or multimedia applications. Authoring tools allow you to link together objects, such as a paragraph of text, an illustration, or a song. By defining the objects' relationships to each other, and by sequencing them in an appropriate order, users can produce attractive and useful graphics applications. Most authoring systems also support a scripting language for more sophisticated applications."
122
:
"AutoCAD - AutoCAD, a product of AutoDesk, is a popular computer-aided drafting (CAD) software package for 2D and 3D design and drafting. Initially a general-purpose 2D drafting program, AutoCAD has been extended into a family of products, used by land developers, architects, mechanical engineers, and other design professionals. The AutoCAD family of products, taken as a whole, is by far the most widely used CAD software in the world."
123
:
"AutoDesk - AutoDesk is a leading software company. Autodesk's flagship product is the AutoCADÂ® product, which introduced drafting on a PC. The widespread popularity of AutoCAD software forged our companyâ€™s lifetime commitment to practical innovation that drives productivity and profitability. AutoCAD has also paved the way for Autodesk technology leadership in industries such as building, infrastructure, manufacturing, media and entertainment, and wireless data."
124
:
"Autodesk Animator - Autodesk Animator is a 2D animation and painting program. The program is no longer supported or being developed."
125
:
"Autodesk Inventor - Autodesk Inventor is 3D-CAD modeling software package. It is similar in functionality to SolidWorks and SolidEdge. It is marketed as a relatively low-cost alternative to more expensive programs such as: Pro/ENGINEER, CATIA, and I-DEAS."
126
:
"AUTOEXEC.BAT - AUTOEXEC.BAT is the name of a system file found on the MS-DOS operating system. It is a plain-text batch file that is located in the root directory of the boot device. AUTOEXEC.BAT is only used on MS-DOS or Microsoft Windows versions based on MS-DOS, such as Windows 3.x, Windows 95, Windows 98, and Windows Me. The file is executed once the operating system has been booted and after the CONFIG.SYS file has been processed. On Windows, this occurs before the graphical environment has been started."
127
:
"AutoLISP - AutoLISP is a dialect of Lisp programming language built specifically for use with the full version of AutoCAD and its derivatives like Autodesk Map 3D and Autodesk Architectural Desktop. Neither the application programming interface nor the interpreter to execute AutoLISP code are included in the AutoCAD LT product line."
128
:
"Automated information system - Automated information system is an assembly of computer hardware, software, firmware, or any combination of these, configured to accomplish specific information-handling operations, such as communication, computation, dissemination, processing, and storage of information."
129
:
"Automatic Parallelization - Automatic parallelization, also known as auto parallelization or Autoparallelization, is a computer compiler optimization technique, which refers to the use of a optimizing parallelizing compiler to convert sequential code into multi-threaded or vectorized (or even both) code in order to utilize multiple processors simultaneously in a shared-memory multiprocessor (SMP) machine. The goal of automatic parallelization is to relieve programers from the tedious and error-prone manual parallelization process."
130
:
"Automatic Vectorization - Automatic vectorization, in the context of a computer program, refers to the transformation of a series of operations performed linearly, one step at a time, to operations performed in parallel, several at once, in a manner suitable for processing by a vector processor."
131
:
"Autoresponder - Autoresponder, also known as mailbot, is a program that automatically delivers information by e-mail."
132
:
"Autosketch - AutoSketch is a 2D vector drawing program by Autodesk. AutoSketch software provides a comprehensive set of CAD tools for creating precision drawings from electrical details to floor plans, from conceptual sketches to product specifications, and much more."
133
:
"Autotote - Autotote is an automated, computerized off-track and/or on-track betting system for betting on horse races. It is an integrated system for off-track betting, keeping track of race results and winning tickets, and race simulcasting."
134
:
"Avidemux - Avidemux is an open-source free program designed for multi-purpose video editing and processing. It is written in C/C++, using the GTK+ graphics toolkit, and therefore is truly a platform independent, universal video processing program. It is available for almost all distributions of Linux that are capable of compiling C/C++ code, along with the GTK+ graphics toolkit and the SpiderMonkey ECMAScript scripting engine."
135
:
"Avionics Software - Avionics software is embedded software with legally-mandated safety and reliability concerns, that is used in avionics. The main difference between avionic software and conventional embedded software is that the development process is required by law and is optimized for safety."
136
:
"B2evolution - B2evolution is a multi-lingual, multi-user, multi-blog publishing system written in PHP and backed by a MySQL database. It is distributed under the GNU General Public License and is available without charge."
137
:
"Backup - Backup is the process of copying data, software or other digital information on a separate media in addition to its original storage."
138
:
"Backup & Recovery - Backup & recovery are the combination of procedures that can restore lost data in the event of hardware or software failure. Routine backup of databases and logs of computer activity are part of a backup & recovery program."
139
:
"Backward Compatible - Backward compatible refers to th new versions of software or hardware that is compatible with earlier models or versions of the same product. A new version of a program is said to be backward compatible if it can use files and data created with an older version of the same program. A computer is said to be backward compatible if it can run the same software as the previous model of the computer."
140
:
"Baitware - Baitware, similar to freeware, refers to the software with very limited or defective functions which is made available gratis/free of charge. Baitware is released to deceptively attract users and drive them to commercial products."
141
:
"BASH: Bourne-Again Shell - Bourne-Again SHell (BASH) is an interactive UNIX shell based on the traditional Bourne shell, but with increased functionality. BASH is the shell, or command language interpreter, that will appear in the GNU operating system. BASH is a sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh-scripts can be run by BASH without modification."
142
:
"BASIC - BASIC is a simple computer language designed by John G. Kemeny and Thomas E. Kurtz at Dartmouth College in 1963. It first ran on an IBM 704 on 1964-05-01. It was designed for quick and easy programming by students and beginners. BASIC exists in many dialects, and is popular on microcomputers with sound and graphics support."
143
:
"bBlog - bBlog is a Web publishing and content management system system written in PHP and utilizing a MySQL database. bBlog is used to manage frequently updated Web content, especially Weblogs. It is distributed under the GNU General Public License and is available without charge. bBlog's design goals are based around using the Smarty PHP templating engine, with compatible plugin and template formats. This makes it very easy to modify the look and functions of your blog."
144
:
"BCNF: Boyce-Codd Normal Form - Boyce-Codd normal form (BCNF) is a structure and algorithm for the normalization of relational databases. BCNF requires that there be no non-trivial functional dependencies of attributes on something other than a superset of a candidate key (called a superkey). At this stage, all attributes are dependent on a key, a whole key and nothing but a key (excluding trivial dependencies, like A->A). A table is said to be in the BCNF if and only if it is in the 3NF and every non-trivial, left-irreducible functional dependency has a candidate key as its determinant. In more informal terms, a table is in BCNF if it is in 3NF and the only determinants are the candidate keys."
145
:
"BCX: Basic To C Translator - Basic To C Translator(BCX), an open source and free software, translates BASIC to C/C++ for compilation on various Win32 compilers. It is a small command line tool that takes a BASIC source code file and outputs a C/C++ source code file. The result can then be compiled using any of several popular C/C++ compilers, including non-commercial ones. Code can be compiled into 32-bit native Windows console mode programs, Windows GUI programs, and Dynamic Link Libraries."
146
:
"BDS C: BD Software C Compiler - BD Software C Compiler (BDS C) is a compiler for a sizeable subset of the C programming language, that ran on and generated code for the Intel 8080 and Zilog Z80 processors. It was written by Leor Zolman and first released in 1979. "BDS" stood for "Brain Damage Software". BDS C was very popular and influential among CP/M users and developers in the 8-bit microcomputer era."
147
:
"Bedroom Programming - Bedroom programming is a computer programming practice which involves Software or Video Game development by one or a team of amateur programmers who program because they love it, and not for making money out of their software."
148
:
"Bells and Whistles - Bells and whistles in software means those fancy features provided by an application. Typically, the term refers to features that are needed only in special cases or to features that make the program more visibly attractive. The term can be used either favorably or negatively."
149
:
"Berkely Software Design - Berkely Software Design Inc. was a corporation which developed, sold licences to, and supported BSDi, a commercial and partially proprietary variant of the BSD operating system. It was founded by former members of the Computer Sciences Research Group at Berkeley, and the name was chosen for its similarity to "Berkeley Software Distribution" the source of its primary product. It contributed code and resources back to the open source BSD community."
150
:
"Bespoke Software - Bespoke software refers to the custom-made software products, including made-to-order software. Bespoke is a term used in the United Kingdom and elsewhere for an individually- or custom-made product or service. Typically, software companies offer packaged software with standard functions for all customers. Bespoke software addresses specific client needs that can't be satisfied by packaged software. In the U.S., bespoke software is often called custom or custom-designed software."
151
:
"Beta Test - Beta test is the computer system test prior to commercial release. Beta testing is the last stage of testing, and normally can involve sending the product to beta test sites outside the company for real-world exposure or offering the product for a free trial download over the Internet. Beta testing is often preceded by a round of testing called alpha testing."
152
:
"Beta Version - A beta version, also known as beta release, usually represents the first version of a computer hardware or software that implements all features in the initial requirements specification. It is likely to be unstable but useful for internal demonstrations and previews to select customers, but not yet ready for release. Some developers refer to this stage as a preview, as a technical preview (TP) or as an early access."
153
:
"BetBug - BetBug is a downloadable software application that links users together so that they can share betting offers. BetBug effectively functions as a betting exchange. BetBug's distributed network technology comes from P2P File sharing."
154
:
"BI software: Business Intelligence Software - Business Intelligence software (BI Software) is a kind of sotware that enables users to obtain enterprise-wide information more easily. BI software tightly integrates querying, reporting, OLAP, data mining and data warehousing functions to enable users to obtain "all" the information they desire from their organization's numerous databases. BI software should allow you to derive the transactions and summaries you need without having to know the sources (which databases, which servers, etc.)."
155
:
"Binary Compatible - Binary compatible refers to that data files produced by one application/system that are exactly the same as data files produced by another application at the binary format level. Binary compatible avoids many of the conversion problems caused by importing and exporting data from one system to another. For example, many applications for Windows and the Macintosh that are binary compatible, which means that a file produced in a Windows environment is interchangeable with a file produced on a Macintosh."
156
:
"Binary Tree - A binary tree is a tree data structure in which each node has at most two children. Typically the child nodes are called a "left" pointer, a "right" pointer. The "root" pointer points to the topmost node in the tree. The left and right pointers recursively point to smaller "subtrees" on either side. One common use of binary trees is binary search trees; another is binary heaps."
157
:
"Binding Time - Binding Time is the time at which decisions are made. In software programing, there are different types of binding times. Static or early binding happens at compile time and certain type information is used and sometimes then thrown away; dynamic binding or late or virtual binding happens at run time. An example of a static binding is a direct C function call: the function referenced by the identifier cannot change at runtime. An example of dynamic binding is dynamic dispatch, as in a C++ virtual method call."
158
:
"Bit Rot - Bit rot is a colloquial computing term used either to describe gradual decay of storage media or to facetiously describe the spontaneous degradation of a software program over time. The later use of the term implies that software can literally wear out or rust like a physical tool. More commonly, bit rot refers to the decay of physical storage mediums."
159
:
"BitComet - BitComet is a freeware client for BitTorrent. It supports simultaneous downloads, download queue, selected downloads in torrent package, fast-resume, chatting, disk cache, speed limits, port mapping, proxy, ip-filter, etc. BitComet also provides an embedded Internet Explorer window for the purpose of making torrent searching easier. A default list of torrent index sites is included, which users can modify to remove unwanted sites and add missing ones."
160
:
"BitLord - BitLord is a BitTorrent client. It supports simultaneous downloads, download queue, selected downloads in torrent package, fast-resume, chatting, disk cache, speed limits, port mapping, proxy, ip-filter, etc. BitLord is an outdated repackaged BitComet client, which adds two new buttons to the toolbar for linking to pornography and gambling sites."
161
:
"BitTorrent Client - A BitTorrent client is a computer program that is used to download and upload files via the BitTorrent protocol. The first BitTorrent client was BitTorrent itself, developed by Bram Cohen. There are many BitTorrent clients were created later. Some are based on the original BitTorrent while some are completely rewritten. BitComet and BitLord are two examples of the BitTorrent clients."
162
:
"Bloatware - Bloatware, also called software bloat or fatware, is a type of software that requires lots of computer resources such as disk space and RAM. It is also used in a more general context to describe programs which appear to be using more system resources than necessary, or implementing extraneous features."
163
:
"Blog Client - Blog client, also known as weblog client, is a software that can manage (post, edit) blogs from operating system with no need to launch a web browser. A typical blog client has an editor, a spell-checker and a few more options that simplify content creation and editing."
164
:
"Blogware - Blogware, also called weblog software or blog software, is a category of software which consists of a specialized form of Content Management Systems specifically designed for creating and maintaining weblogs. Most blogware applications have features such as facilitating authoring and editing of blog posts or articles, various linking and web syndication features, and the ability to easily publish the blog to the world wide web."
165
:
"Blue Martini Software - Blue Martini Software (Blue Martini Software, Inc.) is a privately held software manufacturer and professional services provider based in San Mateo, California that sells and supports an eponymous e-commerce enterprise application that supports sales online, by phone, and at the point-of-purchase."
166
:
"BMRT: Blue Moon Rendering Tools - Blue Moon Rendering Tools (BMRT) is RenderMan-compliant photorealistic rendering systems. It was distributed as freeware. BMRT was a popular renderer with students and other people who were trying to learn the RenderMan interface. It also had some features PhotoRealistic RenderMan did not have at time, for example, raytracing."
167
:
"BNF: Backus Naur Form - The Backus Naur form (BNF), also known as the Backus Naur formalism, Backus normal form, or Panini Backus Form, is a metasyntax used to express context-free grammars: that is, a formal way to describe formal languages. BNF is widely used as a notation for the grammars of computer programming languages, command sets and communication protocols, as well as a notation for representing parts of natural language grammars. Most textbooks for programming language theory and/or semantics document the programming language in BNF. Some variants, such as augmented Backus-Naur form (ABNF), have their own documentation."
168
:
"BoastMachine - BoastMachine is a web publishing application and content management system written in PHP using a MySQL database backend. BoastMachine is used to create, publish and manage weblogs. It is a free software licensed under the GPL."
169
:
"Boehm Garbage Collector - In computer science, Boehm-Demers-Weiser garbage collector, often simply known as Boehm GC, is a conservative garbage collector for C and C++, which is used by many projects that are implemented in C or C++, as well as by runtime environments for a number of other languages, including the Gnu Compiler for Java runtime environment, and the Mono implementation of the Microsoft .NET platform."
170
:
"Bookmark - Bookmark, in computing world, is a facility for marking a specific place in electronic documentation to enable easy return to it. It is used in several types of software, including PDF files, electronic help files and tutorials within a program or online. Bookmarks are frequently used on the Web, to remember a uniform resource locator (URL) in order to return to it. Most Web browsers therefore have built-in bookmark facilities, whereby the browser stores the URL with the page name attached. To return directly to the site, the user picks the page name from the list of saved bookmarks"
171
:
"Boolean - Boolean, named after George Boole (an English mathematician in the mid-19th century) is a complete mathematical logic system. Boolean logic and algebra has many applications in electronics, computer hardware and software."
172
:
"Boolean Algebra - Boolean algebra is an algebraic structure (a collection of elements and operations on them obeying defining axioms) that captures essential properties of both set operations and logic operations. Specifically, it deals with the set operations of intersection, union, complement; and the logic operations of AND, OR, NOT. A Boolean algebra is also called a Boolean lattice."
173
:
"Boolean AND - Boolean AND is one of the operations in the Boolean algebra that is performed on a pair of one-digit binary numbers. The result is another one-digit binary number. For example, 1 AND 1 yields 1; all other combinations yield 0."
174
:
"Boolean logic - Boolean logic is a complete system for logical operations. It was named after George Boole, an English mathematician in the mid-19th century. Boolean logic has many applications in electronics, computer hardware and software. For example, in circuit design in electrical engineering, 0 and 1 may represent the two different states of one bit in a digital circuit, typically high and low voltage. Circuits are described by expressions containing variables, and two such expressions are equal for all values of the variables if, and only if, the corresponding circuits have the same input-output behavior. Furthermore, every possible input-output behavior can be modeled by a suitable Boolean expression. Basic logic gates such as AND, OR, and NOT gates may be used alone, or in conjunction with NAND, NOR, and XOR gates, to control digital electronics and circuitry."
175
:
"Boolean OR - Boolean OR is one of the operations in the Boolean algebra that is performed on a pair of one-digit binary numbers. The result is another one-digit binary number. For example, 0 OR 0 yields 0; All other combinations yield 1."
176
:
"Boolean value - Boolean value, also known as boolean datatype, is a primitive datatype having two values: one and zero (sometimes called true and false). It is the special case of a binary numeric datatype of only one digit, or bit, and can also be represented in any other radix by restricting the range of allowed values for certain operations. This datatype is used in boolean and other operations such as: and (AND, &, *), or (OR, |, +), exclusive or/not equivalent (xor, NEQV, ^), equal (EQV, =, ==) and not (NOT, ~, !) which correspond to some of the operations of Boolean algebra and arithmetic."
177
:
"Boost Library - Boost library is a collection of libraries that extend the functionality of C++. The libraries are licensed under the Boost Software License, a very open license designed to allow Boost to be used with any project. Several Boost libraries have been accepted for incorporation into the next library technical report of the C++ standard committee."
178
:
"Bootstrapping - Bootstrapping is a term used in Computer Programming to describe the techniques involved in writing a compiler (or assembler) in the target programming language which it is intended to compile."
179
:
"Bot: RoBOTic Computer Ccontrolled Entity - A bot is a roBOTic computer controlled entity that simulates an online or LAN multiplayer human deathmatch opponent, team deathmatch opponent or a cooperative human player. Computer game bots work via artificial intelligence routines pre-programmed to suit the game map, game rules, game type and other parameters unique to each game. Bots are not only found in FPS PC games but also featured in several console games."
180
:
"Bottom-up Design - Bottom-up design, in contrast to the top down design, is one of the software design strategies in which individual parts of the system are specified in detail. The parts are then linked together to form larger components, which are in turn linked until a complete system is formed. Strategies based on this bottom-up information flow seem potentially necessary and sufficient because they are based on the knowledge of all variables that may affect the elements of the system."
181
:
"Bounds-Checking Elimination - Bounds-checking elimination is a compiler optimization useful in programming languages or runtimes that enforce bounds checking, the practice of consistently checking every index into an array to verify that the index is within the defined valid range of indexes. Its goal is to detect which of these indexing operations do not need to be validated at runtime, and eliminating those checks."
182
:
"BRL-CAD - BRL-CAD is a Constructive Solid Geometry (CSG) solid modeling Computer-aided design (CAD) system. BRL-CAD includes an interactive geometry editor, ray tracing support for graphics rendering and geometric analysis, computer network distributed framebuffer support, image-processing and signal-processing tools. The entire package is distributed in source code and binary form. BRL-CAD became an open source project on December 21, 2004. BRL-CAD now continues to be developed and maintained by a core community of open source developers ever since."
183
:
"Brute Force Programing - Brute force programing refers a primitive programming style in which the programmer relies on the computer's processing power instead of intelligence to simplify the problem. The brute-force programs are written in a heavy-handed, tedious way, full of repetition and devoid of any elegance or useful abstraction."
184
:
"BSA: Business Software Alliance - Business Software Alliance (BSA), created by Microsoft in 1988, is an organization to combat software theft. The alliance includes the majority of leading software publishers such as Novell, Symantec, and Autodesk and is actively campaigning in over 65 countries. The BSA's key missions include: 1. Lobbying to strengthen copyright laws and co-operation with law enforcement agencies. 2. Educating the public through marketing, roadshows, etc. 3. Bringing legal actions against counterfeiters. BSA's aims are the same as the Federation Against Software Theft but it is not limited to the UK."
185
:
"BSD Daemon - BSD Daemon is the BSD operating system's mascot, named after a daemon, a type of software program common on Unix-like operating systems. The copyright of the BSD Daemon is held by Marshall Kirk McKusick who tries to ensure that it is properly used to identify only BSD-based software and services."
186
:
"BSD license: Berkeley Software Distribution License - Berkeley Software Distribution (BSD) license is a type of license agreement for free software (a subset of open source software). The BSD license is a permissive license and is one of the most widely used free software licenses. It is used most commonly for the Berkeley Software Distribution(BSD), a Unix-like operating system for which the license was named."
187
:
"BSD/OS - BSD/OS, also known as BSDi and BSD/386, was a commercial version of the Berkeley Software Distribution operating system that had been developed by the University of California, Berkeley's Computer Science Research Group in the 1970s and 1980s."
188
:
"BSD: Berkeley Software Distribution - Berkeley Software Distribution (BSD), also known as Berkeley System Distribution, is the UNIX derivative distributed by the University of California, Berkeley starting in the 1970s. The name is also used collectively for the modern descendants of these UNIX distributions. The BSD versions (4.1, 4.2, and 4.3) and the commercial versions derived from them (SunOS, ULTRIX, Mt. Xinu, Dynix) held the technical lead in the Unix world."
189
:
"BSP: Board Support Package - Board support package(BSP) is part of a software package that is processor or platform dependent. Typically, sample source code for the BSP for various processors is provided by the software package developer. To port the complete software package, the code in the sample BSP should be modified. Most commercial real-time operating systems have a BSP to make porting easy."
190
:
"BSS: Block Started by Symbol - Block Started by Symbol (BSS) was a pseudo-instruction in UA-SAP (United Aircraft Symbolic Assembly Program), and the assembler was developed in the mid-1950s for the IBM 704. The BSS keyword was later incorporated into FAP (FORTRAN Assembly Program), IBM's standard assembler for its 709 and 7090/94 computers. It defined a label and reserved uninitialized space for a given number of words. In computer programming, .bss or bss is used by many compilers and linkers as the name of the data segment containing uninitialized variables. It is often referred to as the "bss section" or "bss segment"."
191
:
"BST: Binary Search Tree - A binary search tree (BST), also called ordered binary tree, is a type of binary tree where the nodes are arranged in order: for each node, all elements in its left subtree are less-or-equal to the node (<=), and all the elements in its right subtree are greater than the node (>). BST has the following properties:↵Each node has a value.↵A total order is defined on these values.↵The left subtree of a node contains only values less than the node's value.↵The right subtree of a node contains only values greater than or equal to the node's value.↵The major advantage of binary search trees is that the related sorting algorithms and search algorithms such as in-order traversal can be very efficient.↵"
192
:
"Each node has a value."
193
:
"A total order is defined on these values."
194
:
"The left subtree of a node contains only values less than the node's value."
195
:
"The right subtree of a node contains only values greater than or equal to the node's value."
196
:
"The major advantage of binary search trees is that the related sorting algorithms and search algorithms such as in-order traversal can be very efficient."
197
:
"Budget Range - Budget range is the name given to software (usually video games) that is sold for a fraction (usually less than half) of a regular product price. While most of the software released under budget range are re-releases of successful products (such as Sony's Platinum range), other labels (usually smaller, localized or "value" labels of larger companies) release their new games at budget prices to gather a broader audience."
198
:
"Bug - In computer programming, a bug, also called software bug, is an error, flaw, mistake, failure, or fault in a computer program that prevents it from working as intended, or produces an incorrect result. Bugs arise from mistakes and errors, made by people, in either a program's source code or its design. A program that contains a large number of bugs, and/or bugs that seriously interfere with its functionality, is said to be buggy. Reports about bugs in a program are referred to as bug reports, also called PRs (problem reports), trouble reports, CRs (change requests), and so forth."
199
:
"Bundled Software - Bundled software refers to the software that comes free with the purchase of new hardware or with another purchased software. Bundled software usually is a variety of basic or demo programs, sometimes an encyclopedia, sample computer games, or other multimedia software."
200
:
"Business Software - Business software is generally any software program that helps a business increase productivity or measure their productivity. The term covers a large variation of uses within the business environment, and can be categorized by using a small, medium and large matrix. For example, accounting software is business software."
201
:
"Byte-Code - Byte-code is a binary file containing an executable program, formed by a sequence of op code/data pairs. Byte-code is a sort of intermediate code that is more abstract than machine code. It is often treated as a binary file containing an executable program, much like an object module. Byte-code is called so because usually each opcode is one byte in length but the length of instruction code varies. Each instruction has one byte operation code from 0 to 255 (or as hexadecimal: 00 to FF) followed by parameters such as registers or memory address. This is a typical case, but the specification of bytecode largely varies in language."
202
:
"Bzip2 - Bzip2 is an open source data compression algorithm and program developed by Julian Seward in 1996. The compressor's stability and popularity grew over the next several years, and Seward released version 1.0 in late 2000."
203
:
"C Programming Language - The C programming language (often, just "C") is a general-purpose, procedural, imperative computer programming language developed in the early 1970s by Dennis Ritchie for use on the Unix operating system. The first major program written in C was the UNIX operating system. It has since spread to many other operating systems. Although originally designed as a systems programming language, C has proved to be a powerful and flexible language that can be used for a variety of applications, from business programs to engineering. C is a particularly popular language for personal computer programmers because it is relatively small -- it requires less memory than other languages."
204
:
"C# - C# is an object-oriented programming language developed by Microsoft as part of their .NET initiative, and later approved as a standard by ECMA and ISO. C# has a procedural, object oriented syntax based on C++ that includes aspects of several other programming languages (most notably Delphi, Visual Basic, and Java) with a particular emphasis on simplification (fewer symbolic requirements than C++, fewer decorative requirements than Java)."
205
:
"C++ - C++, originally named "C with Classes, is a high-level programming language developed by Bjarne Stroustrup at Bell Labs. C++ adds object-oriented features to its predecessor, C. C++ is a statically-typed free-form multi-paradigm language supporting procedural programming, data abstraction, object-oriented programming, and generic programming. C++ is one of the most popular programming languages. The C++ programming language standard was ratified in 1998 as ISO/IEC 14882:1998, and the current version of which is the 2003 version, ISO/IEC 14882:2003. A new version of the standard (known informally as C++0x) is being developed."
206
:
"CAAD: Computer Aided Architectural Design - Computer Aided Architectural Design (CAAD) software programs are the repository of accurate and comprehensive records of buildings and are used by architects and architectural companies. In a more general sense, CAAD also refers to the use of any computational technique in the field of architectural design other than by means of architecture-specific software. For example, software which is specifically developed for the computer animation industry (e.g. Maya and 3DStudio Max), is also used in architectural design."
207
:
"CAD: Computer Aided Design - Computer-aided design (CAD), also known as Computer Assisted Design, is the use of a wide range of computer-based tools that assist engineers, architects and other design professionals in their design activities. It is the main geometry authoring tool within the Product Lifecycle Management process and involves both software and sometimes special-purpose hardware. Current packages range from 2D vector based drafting systems to 3D parametric surface and solid design modellers."
208
:
"CADD: Computer-Aided Design and Drafting - Computer-Aided Design and Drafting (CADD), one type of computer aided design (CAD), is a form of automation that helps designers prepare drawings, specifications, parts lists, and other design-related elements using special graphics- and calculations-intensive computer programs. The technology is used for a wide variety of products in such fields as architecture, electronics, and aerospace, naval, and automotive engineering."
209
:
"CAE: Computer-Aided Engineering - Computer-aided engineering (CAE) analysis is the application of computer software in engineering to analyze the robustness and performance of components and assemblies. It encompasses simulation, validation and optimization of products and manufacturing tools. CAE systems can provide support to businesses, which is achieved by the use of reference architectures and their ability to place information views on the business process."
210
:
"CAID: Computer-Aided Industrial Design - Computer-aided industrial design (CAID) is a subset of computer-aided design (CAD) that includes software that directly helps in product development. Within CAID programs designers have the freedom of creativity, but typically follow a simple design methodology: - Creating sketches, using a stylus Generating surfaces directly from the curves"
211
:
"Callback - In computer programming, a callback is executable code that is passed as an argument to other code. It allows a lower-level software layer to call a function defined in a higher-level layer. Usually, the higher-level code starts by calling a function within the lower-level code passing to it a pointer or handle to another function. While the lower-level function executes, it may call the passed-in function any number of times to perform some subtask. In another scenario, the lower-level function registers the passed-in function as a handler that is to be called asynchronously by the lower-level at a later time in reaction to something. A callback can be used as a simpler alternative to polymorphism and generic programming, in that the exact behavior of a function can be dynamically determined by passing different (yet compatible) function pointers or handles to the lower-level function. This can be a very powerful technique for code reuse."
212
:
"Call-by-Reference - Call-by-reference is an evaluation strategy in computer programming, in which a function is passed an implicit reference such as argument's address to its argument rather than the argument value itself. The called function then can directly access the argument through such reference."
213
:
"Call-by-Value - Call-by-value is the most common evaluation strategy in computer programming, used in languages as far-ranging as C and Scheme. When invoking functions in programming languages, if calling function pass the argument to called function by the copy of the argument's value, it's called Call-By-Value. Changes to the copy will never affect the original variable's value in the calling function."
214
:
"CAM: Computer-Aided Manufacturing - Computer-aided manufacturing (CAM) refers to using software to generate the instruction codes for a Computer Numerical Control (CNC) machine in order for it to cut out a shape designed in a computer-aided design (CAD) system. Sometimes the CAM software is integrated with the CAD system, but not always. In electronic design automation, CAM tools prepare printed circuit board (PCB) and integrated circuit design data for manufacturing."
215
:
"CAMA: Computer Assisted Mass Appraisal - Computer Assisted Mass Appraisal (CAMA) is a generic term for any software package used by government agencies to help establish real estate appraisals for property tax calculations."
216
:
"CAR: Computer-Assisted Reviewing - Computer-assisted reviewing (CAR) tools are pieces of software based on text comparison and analysis algorithms. They focus on differences between two documents, taking into account each document's typology through an intelligent analysis: differences do not have the same value depending on their type and/or the document field/subject."
217
:
"Careware - Careware, also known as charityware, is software distributed in a way that benefits a charity. Some careware is distributed free, and the author suggests that some payment be made to a nominated charity. Other careware includes a levy for charity on top of the distribution charge."
218
:
"CASE: Computer Aided Software Engineering - Computer-aided software engineering (CASE) is the use of software tools to assist in the development and maintenance of software. Tools used to assist in this way are known as CASE Tools. CASE tools can help with one or more phases of the software life-cycle, including the project management, business and functional analysis, design, code generation, implementation, testing and maintenance of software."
219
:
"Casting Variable - Casting Variable in computer programming simply means reassigning the type of a variable. When casting a variable from one type to another, all you are doing is telling the computer to use a different type to store the variable. For example, you declared a variable of type short. In most cases, that would mean that the largest positive value you could store would be 32,767. But somewhere in your program, you realize that you're going to have to do a calculation which could increase the value over this maximum. In this case, you need to perform casting variable."
220
:
"CATIA - CATIA is the CAD/CAM/CAE commercial software suite developed by Dassault Systemes and marketed world-wide by IBM. It is commonly referred to as a 3D PLM software. All stages of product development are supported, from conceptualization, through design (CAD) and manufacturing (CAM) until analysis (CAE). It provides an open development architecure through interfaces which can be used to customize or develop applications. The API's are supported in Fortran and C for V4 and Visual Basic and C++ for V5. These API's are called CAA2 (or CAA V5). The CAA2 are COM based interfaces. These interfaces provide a seamless integration for products developed on the CATIA suite of software."
221
:
"Cc65 - cc65, an open source package under GNU General Public License, is a complete cross development package for 65(C)02 systems, including a powerful macro assembler, a C compiler, linker, librarian and several other tools."
222
:
"CCEA: Citrix Certified Enterprise Administrator - Citrix Certified Enterprise Administrator (CCEA) is a certification program of Citrix products that enables you to master Citrix products such as Citrix Management Services, Load Balancing Services, Program Neighborhood and Citrix NFuse."
223
:
"CD Grabber - CD Grabber, also known as CD ripper or CD extractor, is a piece of software designed to extract raw digital audio from a compact disc to a file or other output. CD grabber supports converting CD to WAV, the converter makes direct digital copies from audio CDs and saves them as WAV easily."
224
:
"CD Ripper - A CD ripper, also known as CD grabber or CD extractor, is a piece of software designed to extract raw digital audio (in format commonly called CDDA) from a compact disc to a file or other output."
225
:
"CD/DVD Authoring - In computing, CD authoring or DVD authoring is the process of recording source material€”video, audio or other data€”onto a compact disc or DVD in a particular format.Authoring is commonly done in software on personal computers and workstations equipped with CD or DVD recorders. There are, however, stand-alone devices like personal video recorders which can also author and record discs."
226
:
"CDDL: Common Development and Distribution License - Common Development and Distribution License (CDDL) is an open source and Free software license, produced by Sun Microsystems, based on the Mozilla Public License (MPL), version 1.1. The CDDL was submitted for approval to the Open Source Initiative on December 1, 2004 and approved as an open source license in mid-January 2005. The CDDL is one of the 9 preferred licenses listed by the Open Source Initiative (OSI)."
227
:
"CeCILL: CEA CNRS INRIA Logiciel Libre - CEA CNRS INRIA Logiciel Libre (CeCILL) is a Free Software license adapted to both International and French legal matters, in the spirit of and retaining compatibility with the GNU General Public License."
228
:
"Cedega - Cedega, formerly known as WineX, is TransGaming Technologies' proprietary fork of Wine, which is designed specifically for running games written for Microsoft Windows under Linux. As such, its primary focus is implementing the DirectX API."
229
:
"Celestia - Celestia is an open source, 3D astronomy program for Windows, Mac OS X, and Linux created by Chris Laurel. The program, based on the Hipparcos Catalogue, allows user to display objects ranging in scale from artificial satellites to entire galaxies in three dimensions using OpenGL. Unlike most planetarium software, the user is free to travel about the Universe."
230
:
"Censorware - Censorware is a category of software that is used to do Internet content blocking or Internet filtering. In other words, Censorware limits the user's access to content on the Internet. Libraries and schools commonly use this type of filtering software to restrict its users from accessing pornography. Parents may also use censorware to restrict their children's access to the Internet."
231
:
"CFG: Control Flow Graph - A control flow graph (CFG) is an abstract data structure used in compilers. It is an abstract representation of a procedure or program, maintained internally by a compiler. Each node in the graph represents a basic block, i.e. a straight-line piece of code without any jumps or jump targets; jump targets start a block, and jumps end a block. Directed edges are used to represent jumps in the control flow. There are, in most presentations, two specially designated blocks: the entry block, through which control enters into the flow graph, and the exit block, through which all control flow leaves."
232
:
"CFML: ColdFusion Markup Language - ColdFusion Markup Language(CFML) is a proprietary markup language developed by Allaire for use with ColdFusion. CFML is a tag-based Web scripting language supporting dynamic Web page creation and database access in a Web server environment. In the language, ColdFusion tags are embedded in HTML files."
233
:
"CGI: Common Gateway Interface - The Common Gateway Interface (CGI) is a standard for external gateway programs to interface with information servers such as HTTP servers. CGI scripts are commonly used on Web sites to achieve customised results. Generally, when the visitor performs some action, such as filling in a form or clicking on a link, the server executes a script using information input by the visitor. This allows the appearance or behaviour of the Web site to be customised for that visitor."
234
:
"cgi-bin - cgi-bin is the usual name of the server directory in which Common Gateway Interface (CGI) programs are held."
235
:
"CGI: Computer Generated Imagery - Computer generated imagery (CGI), also known as Computer animation, is the application of the field of computer graphics (or more specifically, 3D computer graphics) to special effects. CGI is used in movies, television programs and commercials, and in printed media. Video games most often use real-time computer graphics (rarely referred to as CGI), but may also include pre-rendered "cut scenes" and intro movies that would be typical CGI applications."
236
:
"Character - In computer and machine-based telecommunications terminology, a character is a unit of information that roughly corresponds to a grapheme or a grapheme-like unit or symbol, such as in an alphabet or syllabary in the written form of a natural language. An example of a character is a letter, numeral, or punctuation mark. This includes all the ASCII and extended ASCII characters, including the space and control characters. In character-based software, everything that appears on the screen, including graphics symbols, is considered to be a character. In graphics-based applications, the term character is generally reserved for letters, numbers, and punctuation."
237
:
"Character Code - Character code is a computer code which represents a particular character or symbol with specific meaning. Most current operating systems use 8-bit character codes: some of which represent commands to the computer, while most of which represent the AlphaNumeric symbols of the main Western Languages. Other languages that use extended or alternate writing systems, such as Asian languages, use 16 bits and are so called Double Byte charater sets."
238
:
"Character Encoding - A character encoding or character set (sometimes referred to as code page) consists of a code that pairs a sequence of characters from a given set with something else, such as a sequence of natural numbers, octets or electrical pulses, in order to facilitate the storage of text in computers and the transmission of text through telecommunication networks. Common examples include Morse code, which encodes letters of the Latin alphabet as series of long and short depressions of a telegraph key; and ASCII, which encodes letters, numerals, and other symbols, both as integers and as 7-bit binary versions of those integers, generally extended with an extra zero-bit to facilitate storage in 8-bit bytes (octets)."
239
:
"Character Mapping - Character mapping refers to the process of using a table used in an operating system or font to map the character codes to the glyphs used in a font. Most character encoding uses an 8-bit system allowing a maximum of 256 character codes. Extended or non-AlphaNumeric languages often use 16-bit or Double Byte encoding. Also, Character Maps or not necessarily cross platform compatible. For example, the Macintosh and Windows operating systems use differing character maps. However, Type 1 fonts do contain the glyphs necessary for both these mappings and so work in both Macintosh and Windows systems and others."
240
:
"Character Repertoire - Character repertoire is the set of all characters onto which a coded character set maps integers (code positions)."
241
:
"Character Set - Character set is a defined list of characters recognized by the computer hardware and software. Each character is represented by a number. The ASCII character set, for example, uses the numbers 0 through 127 to represent all English characters as well as special control characters. European ISO character sets are similar to ASCII, but they contain additional characters for European languages."
242
:
"Charmap: Character Map - Character Map (charmap.exe) is an applet included with Microsoft Windows operating systems which can be used to inspect the characters in any installed font, to check what keyboard input is used to select those characters, and to copy characters to the clipboard in lieu of typing them in."
243
:
"Checkpoint - Checkpoint, in computer programming, is the point in the program source code where progress can be halted, while running, until conditions are suitable for progression to the next stage."
244
:
"Chinook Checkers Program - Chinook is the first computer program that won the world checker champion title in the competition against humans. Chinook program's algorithm includes an opening book, a library of opening moves, from games played by grandmasters, deep search algorithm, good move evaluation function and the end-game database having all positions with eight or fewer pieces. The linear handcrafted evaluation function considered several features of the game board including piece count, kings count, trapped kings, turn, runaway checkers (unimpeded path to be kinged) and other minor factors. All of Chinook's 'knowledge' was programmed in by its creators vs the program learning strategies."
245
:
"CIF: Common Intermediate Format - Common Intermediate Format (CIF) is a video format used in videoconferencing systems that supports both NTSC and PAL signals. CIF is part of the ITU H.261 videoconferencing standard. It specifies a data rate of 30 frames per second (fps), with each frame containing 288 lines and 352 pixels per line. CIF is used to standardize the horizontal and vertical resolutions in pixels of YUV sequences in video signals. CIF has many variations for different resolutions and technologies."
246
:
"CIM: Common Information Model - Common Information Model (CIM), a standard defined by organizations such as the Distributed Management Task Force (DMTF) and the IEC, provides a schema that defines how the managed elements in an IT environment are represented as a common set of objects and relationships between them. CIM allows multiple parties to exchange management information about these managed elements. CIM not only represents these managed elements and the management information, but also provides means to actively control and manage these elements. By using a common model of information, management software can be written once and work with many implementations of the common model without complex and costly conversion operations or loss of information. The managed elements represented in the CIM Schema include most of today's elements in an IT environment, for example Computer systems, Operating systems, Networks, Middleware, Services and Storage."
247
:
"Citadel Software - Citadel is software for running a Bulletin Board System. The first Citadel came online in 1980 with a single 300 baud modem, and some versions of the software, supporting thousands of simultaneous users, are still in use today. Citadel development has always been collaborative with a strong push to keep the source code in the public domain. This makes Citadel one of the oldest surviving FOSS projects."
248
:
"CL: Common LISP - Common Lisp (CL) is a dialect of the Lisp programming language, standardised by ANSI X3.226-1994. Developed to standardize the divergent variants of Lisp which predated it, it is not an implementation but rather a language specification. Several implementations of the Common Lisp standard are available, including commercial products and open source software. Common Lisp is a general-purpose programming language, in contrast to Lisp variants such as Emacs Lisp and AutoLISP which are embedded extension languages in particular products. Unlike many earlier Lisps, Common Lisp (like Scheme) uses lexical variable scope."
249
:
"Class - Class, in the context of object oriented computer language, is the prototype for an object in an object-oriented language; analogous to a derived type in a procedural language. A class may also be considered to be a set of objects which share a common structure and behaviour. The structure of a class is determined by the class variables which represent the state of an object of that class and the behaviour is given by a set of methods associated with the class."
250
:
"Class Library - Class library is a term used in the object oriented language, whcih refers to collections of class definitions and implementations. Software companies like Microsoft created class libraries for reuses in programming. Class libraries and toolkits have the reputation of being open but too-much-assembly-required. A best of both worlds is to deliver a useful application composed from a toolkit where disassembly and reassembly for evolution is supported."
251
:
"Clean Install - Clean install refers to a way to install or upgrade an OS to a computer system. There are two ways to conduct a clean install. (1) upgrade of an operating system (OS) on a hard drive that already has an OS running off of it without carrying over any settings of the older OS, such as user preferences or information about the hardware and/or the software. (2) To install an OS on a hard drive that does not already have an OS installed on it or a newly formatted hard drive."
252
:
"ClearCase - ClearCase, developed by Rational software and now owned by IBM, provides lifecycle management and control of software development assets. With integrated version control, automated workspace management, parallel development support, baseline management, and build-and-release management, ClearCase provides the capabilities needed to create, update, build, deliver, reuse and maintain business-critical assets."
253
:
"ClearDDTS - ClearDDTS is a Distributed Defect Tracking System developed by Rational software and now owned by IBM. ClearDDTS provides change request management for UNIX development, specifically designed to track and manage defects and enhancement requests found during development and quality assurance testing. ClearDDTS can be tightly integrated with software configuration management products, such as Rational ClearCase, to effectively manage change throughout the software development lifecycle."
254
:
"ClearQuest - ClearQuest, developed by Rational software and now owned by IBM, enables better insight, predictability and control of the software development process. Through flexible workflow management and defect and change-tracking across the application lifecycle, Rational ClearQuest helps to automate and enforce development processes, manage issues throughout the project lifecycle, and facilitate communication between all stakeholders across the enterprise."
255
:
"Client - In client/server computing, a client is a system that accesses a (remote) service on another computer by some kind of network. The term was first applied to devices that were not capable of running their own stand-alone programs, but could interact with remote computers via a network. These dumb terminals were clients of the time-sharing mainframe computer."
256
:
"Client-Side - In computer networking, the term client-side refers to operations that are performed by the client in a client-server relationship. Typically, a client is a software program, such as a web browser, that runs on a user's local computer or workstation and connects to a server as necessary. Operations may be performed on the client-side because they require access to information or functionality that is available on the client, but not on the server because the user needs to observe them or provide input, or because the server lacks the processing power to perform the operations in a timely manner for all of the clients it serves."
257
:
"CLISP - CLISP, a Common Lisp implementation, is part of the GNU project, originally developed by Bruno Haible and Michael Stoll. CLISP includes both an interpreter and a compiler (that compiles to bytecode), as well as a debugger, a socket interface, a high-level foreign language interface, strong internationalization support, and an object system (CLOS, MOP). It is written in C and Common Lisp."
258
:
"Closed Source - Closed source is a term invented as an antonym for open source and used to refer to any program whose licensing terms do not qualify as open source. Generally, it means that the customer will only get a binary version of the computer program they licensed and no copy of the program's source code, rendering modifications to the software practically impossible from the technical side. The source code in this development model is regarded as a trade secret of the company, so parties that may get source code access, such as colleges, have to sign non-disclosure agreements in advance."
259
:
"ClosedBSD - ClosedBSD is a derivative of FreeBSD aimed at providing firewall and Network Address Translation services. One of the advantages of ClosedBSD is that it can be run directly off a floppy disk or a CD-ROM, with no hard drive required. In spite of its small size, the software includes a fully-functional ncurses-based interface."
260
:
"Cloud computing - Shared computing services provided on demand by computers accessed over the Internet.↵"
261
:
"cmd.exe - Cmd.exe is the command line interpreter on OS/2 and on Windows NT-based systems (including Windows 2000, XP, and Server 2003). It is the analog of command.com in MS-DOS and Windows 9x systems, or of the shells used on Unix systems. cmd.exe improves on command.com in several areas. It has a greater number of built-in commands, and the error reporting is better. In the OS/2 version of cmd.exe, errors are reported in whatever the current language of system is, their text being taken from the system message files. The help command can then be issued with the error message number to obtain further information. Both the OS/2 and the Windows NT versions of cmd.exe have more detailed error messages than that of command.com."
262
:
"CML: Chemical Markup Language - Chemical Markup Language(CML) is an approach to managing molecular information using tools such as XML and Java. Chemical information is traditionally stored in many different files types which inhibit reuse of the documents. CML uses XML's portability to help CML developers and chemists design interoperable documents. There are a number of tools that can generate, process and view CML documents. Publishers can distribute chemistry within XML documents by using CML."
263
:
"CMM: Capabilities Maturity Model - Capability Maturity Model (CMM), developed by the Software Engineering Institute (SEI) at Carnegie Mellon University, is a collection of instructions an organization can follow with the purpose to gain better control over its software development process. The CMM ranks software development organizations according to a hierarchy of five process maturity levels. Each level ranks the development environment according to its capability of producing quality software. A set of standards is associated with each of the five levels. The standards for level one describe the most immature, or chaotic, process, and the standards for level five describe the most mature, or quality, process."
264
:
"Coco/R - Coco/R is a compiler generator (Compiler-compiler), which takes an attributed grammar of a source language and generates a scanner and a parser for this language. The scanner works as a deterministic finite automaton. The parser uses recursive descent. LL(1) conflicts can be resolved by a multi-symbol lookahead or by semantic checks. Thus the class of accepted grammars is LL(k) for an arbitrary k."
265
:
"COCOMO: Constructive Cost Model - Constructive Cost Model(COCOMO) is a method of estimating the number of man-months it will take to develop a software product. There are three levels in the COCOMO: - 1) Basic COCOMO - is a static, single-valued model that computes software development effort (and cost) as a function of program size expressed in estimated lines of code. - 2) "cost drivers" that include subjective assessment of product, hardware, personnel and project attributes. - 3) Detailed COCOMO - incorporates all characteristics of the intermediate version with an assessment of the cost driver's impact on each step (analysis, design, etc.) of the software engineering process."
266
:
"Code - Code, in Computer Programming refers to source code or machine code. Source code is any series of statements written in some human-readable computer programming language, while machine code refers to instructions for a computer processor in some machine language. The word "code" is often used to distinguish instructions from data."
267
:
"Code Co-op - Code Co-op is the peer-to-peer version control system made by Reliable Software. Code Co-op uses peer-to-peer architecture to share projects among developers and to control changes to files. Instead of using a centralized database (the repository), it replicates its own database on each computer involved in the project."
268
:
"Code Generation - Code generation is the process by which a compiler converts a syntactically-correct program (source code) into a series of instructions that could be executed by a machine (Machine code). The input to the code generation stage typically consists of a parse tree, abstract syntax tree, or intermediate language code; the target machine may be a physical machine such as a microprocessor, or an abstract machine such as a virtual machine or an intermediate language, (human-readable code)."
269
:
"Codec: Compression/Decompression - In computing world, Codec refers to compression/decompression, which typically is an algorithm or specialized computer program that encodes or reduces the number of bytes consumed by large files and programs. Files encoded with a specific codec require the same codec for decoding. MPEG is a type of codec algorithms."
270
:
"Coded Character Set - Coded character set, also known as character encoding or character set, refers to the mapping from a set of integers to a set of characters. This mapping is generally 1:1. In ASCII code set, for example, the code position 65 in ASCII maps only to "A", and it's the only position that maps to "A"."
271
:
"CodeView - CodeView was a standalone debugger that originally shipped with Microsoft C/C++ 7.0 and earlier. It also shipped with Visual Basic for DOS. Upon the release of Microsoft Visual C++ 1.0, the functionality of CodeView was integrated into a single programming environment, known as the Integrated Development Environment (IDE). This integration is seen by many developers to be a more natural way of developing software since coding and debugging can be done without switching programs or context."
272
:
"CodeWarrior - CodeWarrior is an integrated development environment from Metrowerks for the Macintosh, Microsoft Windows, Linux and other systems such as embedded systems from Freescale Semiconductor. (Metrowerks is a wholly-owned subsidiary of Freescale.) Specialized versions for the Sony PlayStation 2, Nintendo GameCube, Palm OS, and Symbian OS also exist, and there was even a version for BeOS."
273
:
"Coding - In computer hardware, coding is the process of converting information obtained on a subject or unit into coded values (typically numeric) for the purpose of data storage, management, and analysis. While in software, coding means implement a programing logic using a specific language such as C or C++. In cryptography, coding refers to the act of writing in code or cipher."
274
:
"COE: Common Operating Environment - Common operating environment (COE) specifies a common IT architecture within an organization and promotes interoperability and cross-platform capabilities among an organization's devices. In a COE, all workstations within an organization run the same software and use the same interfaces so that its devices are standardized and information presentation and platform interfaces are consistent throughout the organization."
275
:
"Cognitive Architecture - A cognitive architecture is a computational process that acts like a certain cognitive system, most often, like a person, or acts intelligent under some definition. The term architecture implies an approach that attempts to model not only behavior, but also structural properties of the modelled system."
276
:
"ColdFusion - ColdFusion is a product that includes a server and a development toolset designed to integrate databases and Web pages. ColdFusion was created by Allaire Corporation of Cambridge, Mass. which merged with Macromedia and now part of Adobe Systems. With ColdFusion, a user could enter a zip code on a Web page, and the server would query a database for information on the nearest movie theaters and present the results in HTML form. Cold Fusion Web pages include tags written in Cold Fusion Markup Language (CFML) that simplify integration with databases and avoid the use of more complex languages like C++ to create translating programs."
277
:
"Collaborative Software - Collaborative software, also called social software, is a type of software that allows people to work together on the same documents and projects over local and remote networks. Collaborative software embraces the communications systems as well, including e-mail, videoconferencing, instant messaging and chat. Lotus Notes is an example of collaborative software."
278
:
"COM: Component Object Model - Component Object Model (COM) is a Microsoft platform for software componentry introduced in 1993, largely to replace the interprocess communication mechanism DDE used by the initial release of OLE. It is used to enable interprocess communication and dynamic object creation in any programming language that supports the technology. The term COM is often used in the software development world as an umbrella term that encompasses the OLE, OLE Automation, ActiveX, COM+ and DCOM technologies. COM provides a language-neutral way of implementing objects such that they can be used in environments different from the one they were created in, even across machine boundaries. For well-authored components, COM allows reuse of objects with no knowledge of their internal implementation because it forces component implementers to provide well-defined interfaces that are separate from the implementation."
279
:
"Command - Command, in computing, refers to an instruction to a computer or device to perform a specific task. Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface. Commonly a command is a directive to some kind of command line interface, such as a command interpreter. Commands come in different forms such as: 1) special words (keywords) that a program understands 2) function keys 3) choices in a menu 4) buttons or other graphical objects on your screen."
280
:
"Command Interpreter - Command interpreter is a program which reads textual commands from the user or from a file and executes them. Some commands may be executed directly within the interpreter itself (e.g. setting variables or control constructs), others may cause it to load and execute other files. Unix's command interpreters are known as shells."
281
:
"Command.com - COMMAND.COM is the name for the default operating system shell (or command line interpreter) for DOS and 16/32bits versions of Windows (95/98/98 SE/Me). It also has an additional role, as the first program run after boot, hence being responsible for setting up the system by running the AUTOEXEC.BAT configuration file, and being the ancestor of all processes. COMMAND.COM has two distinct modes of work. First is the interactive mode, in which the user types commands which are then executed immediately. The second is the batch mode, which executes a predefined sequence of commands stored as a text file with the extension .BAT. Its function as the default command interpreter is analogous to that of the Unix shells, although COMMAND.COM's functionality is considerably more limited than that of its Unix counterparts. cmd.exe is COMMAND.COM's successor on Windows NT/2000/XP/2003 and OS/2. COMMAND.COM is also available on those systems to provide compatibility when running DOS applications."
282
:
"Commercial Software - Commercial software is a computer software sold for commercial purposes or that serves commercial purposes. The most famous examples of commercial software are the products offered on the IBM PC and clones in the 1980s and 90s, including famous programs like Lotus 123, Word Perfect and the various parts that make up Microsoft Office. Commercial software may be re-packaged in boxes and sold in retail stores or directly from vendors. Downloadable software over the Internet for commercial purpose is becoming popular."
283
:
"Common Core Services - Common core services are services that the operating system has to take care of, these are usually administrated by the Kernel of an operating system. These may include: - Memory management - Internet functionality - Network Security features - Library manager - loader - Execute applications - Disk access - User interface - Application programming interface"
284
:
"Communications Software - Communications software refers to the type of software that is used for network communication purpose. For example, the software used to send and receive data over telephone lines through modems."
285
:
"Compatible - Compatible, in computer industry, refers to the ability of one device or program to work with another device or program. For example, a printer and a computer are said to be compatible if they can be connected to each other. An IBM compatible PC, on the other hand, is a computer that can run the same software as an IBM PC."
286
:
"Compiler - Compiler is a type of computer program that translates source code into object code. A compiler is likely to perform many or all of the following operations: lexing, preprocessing, parsing, semantic analysis, code optimizations, and code generation."
287
:
"Compiler Bug - A compiler bug is a type of computer bug. Compiler bug may cause translating the source program incorrectly, so that when the program runs it produces the wrong answer or some error message that does not really relate to the original program. Some compilers also attempt to optimize the source code during translation, so that it will run faster, or use less memory, or both. This optimization is often the most complicated part of a compiler, and hence is likely to have the most bugs."
288
:
"Compiler Directive - Compiler directive is data embedded in source code by programmers to tell compilers some intention about compilation. A compiler directive often tells the compiler how to compile; other source code tells the compiler what to be compiled."
289
:
"Compiler Optimization - Compiler optimization is the process of using some optimization techniques that have been programmed into a compiler, to improve the performance or reach other objectives of the source code. These techniques are automatically applied by the compiler whenever they are appropriate. Because programmers no longer need to manually apply these techniques, programmers are free to write source code in a straightforward manner, expressing their intentions clearly. Then the compiler can choose the most efficient way to handle the implementation details."
290
:
"Compiler-Compiler - A compiler-compiler, also known as a parser generator, is a utility for generating the source code of a parser, interpreter or compiler from an annotated language description in the form of a grammar (usually in BNF) plus code that is associated with each of the rules of the grammar that should be executed when these rules are applied by the parser. These pieces of code are sometimes referred to as semantic action routines since they define the semantics of the syntactic structure that is analysed by the parser."
291
:
"Componetware: Component Software - Component software (componentware) is a type of software designed to work as a component of a larger application. The goal of component software is to standardize the interfaces between software components so that all components can work together seamlessly. Therefore, ideally, it is possible to mix software components from different manufacturers in a single system. Two standards -- OLE and OpenDoc -- are designed to help programmers develop components that can work together."
292
:
"Computational Linguistics - Computational linguistics is an interdisciplinary field dealing with the statistical and logical modeling of natural language from a computational perspective. This modeling is not limited to any particular field of linguistics. Computational linguistics was formerly usually done by computer scientists who had specialized in the application of computers to the processing of a natural language. Recent research has shown that language is much more complex than previously thought, so computational linguistics work teams are now sometimes interdisciplinary. Computational linguistics draws upon the involvement of linguists, computer scientists, experts in artificial intelligence, cognitive psychologists and logicians, amongst others."
293
:
"Computational Science - Computational science, also known as scientific computing, is the field of study concerned with constructing mathematical models and numerical solution techniques and using computers to analyze and solve scientific and engineering problems. In practical use, it is typically the application of computer simulation and other forms of computation to problems in various scientific disciplines such as Physics. Computational science and computer science are very different fields."
294
:
"Computer Animation - Computer animation, also known as Computer generated imagery (CGI) is the art of creating moving images via the use of computers. It is a subfield of computer graphics and animation. Increasingly it is created by means of 3D computer graphics, though 2D computer graphics are still widely used. Sometimes the target of the animation is the computer itself, sometimes the target is another medium, such as film."
295
:
"Computer Game - A computer game is a computer-controlled game with or without video technologies involved. In common usage, a "computer game" or a "PC game" refers to a game that is played on a personal computer. There always must also be some sort of input device, usually in the form of button/joystick combinations (on arcade games), a keyboard & mouse/trackball combination (computer games), or a controller (console games), or a combination of any of the above. Also, more esoteric devices have been used for input (see also Game controller). Usually there are rules and goals, but in more open-ended games the player may be free to do whatever they like within the confines of the virtual universe."
296
:
"Computer Graphics - Computer graphics (CG) is the field of visual computing, where one utilizes computers both to generate visual images synthetically and to integrate or alter visual and spatial information sampled from the real world. Computer graphics field can be divided into several areas: real-time 3D rendering (often used in video games), computer animation, video capture and video creation rendering, special effects editing (often used for movies and television), image editing, and modeling (often used for engineering and medical purposes). Development in computer graphics was first fueled by academic interests and government sponsorship. However, as real-world applications of computer graphics in broadcast television and movies proved a viable alternative to more traditional special effects and animation techniques, commercial parties have increasingly funded advances in the field."
297
:
"Computer Science - Computer science, or computing science, is an academic field that studys the theoretical foundations of information and computation and their implementation and application in computer systems. Computer science has many sub-fields; some emphasize the computation of specific results (such as computer graphics), while others (such as computational complexity theory) relate to properties of computational problems. Still others focus on the challenges in implementing computations. For example, programming language theory studies approache to describing computations, while computer programming applies specific programming languages to solve specific computational problems."
298
:
"ConceptBase - ConceptBase is a deductive and object-oriented database management system based on Datalog rather than SQL. It stores all factual information in a single flat data structure called P-facts. On top of that deductive rules, integrity constraints, and queries are defined to capture the semantics of the application domain. The main application domain of ConceptBase is conceptual modeling, model management, and meta modeling."
299
:
"Config Files: Configuration Files - In computing, configuration files (config files) are used to configure the initial settings for some computer programs. They are used for user applications, server processes and operating system settings. The files are often written in ASCII (rarely UTF-8) and line-oriented, with lines terminated by a newline or carriage return/line feed pair, depending on the operating system. They may be considered a simple database."
300
:
"CONFIG.SYS - CONFIG.SYS is the primary configuration file for the MS-DOS and OS/2 operating systems. It is a special file that contains setup or configuration instructions for the computer system. The commands in this file configure DOS for use with devices and applications in the system. The commands also set up the memory managers in the system. After processing the CONFIG.SYS file, DOS proceeds to load and execute the command shell specified in the shell= line of CONFIG.SYS, or COMMAND.COM if there is no such line. The command shell in turn is responsible for processing the AUTOEXEC.BAT file."
301
:
"Configuration - In communications or computer systems, configuration is the way a system is set up, or the assortment of components that make up the system. Configuration can refer to either hardware or software, or the combination of both. Often, configuration pertains to the choice of hardware, software, firmware, and documentation. The configuration affects system function and performance."
302
:
"Configuration Management - In software development, configuration management is a system for keeping track of large software projects. Configuration management system include functions such as version control and automatically documents all components used to build executable programs. It is able to recreate each build as well as to recreate earlier environments in order to maintain previous versions of a product. It may also be used to prevent unauthorized access to files or to alert the appropriate users when a file has been altered."
303
:
"Constant Folding - Constant folding is one of the compiler optimization techniques used by many modern compilers. Constant folding is the process of simplifying constant expressions at compile time. Terms in constant expressions are typically simple literals, such as the integer 2, but can also be variables whose values are never modified, or variables explicitly marked as constant."
304
:
"Constant Propagation - Constant propagation is one of the compiler optimization techniques used by many modern compilers. Constant propagation is the process of substituting the values of known constants in expressions at compile time. Such constants include those defined above, as well as intrinsic functions applied to constant values."
305
:
"Constraint Logic Programming - Constraint logic programming is a form of constraint programming, in which logic programming is extended to include concepts from constraint satisfaction. A constraint logic program is a logic program that contains constraints in the body of clauses. An example of a clause including a constraint is A(X,Y) :- X+Y>0, B(X), C(Y). In this clause, X+Y>0 is a constraint; A(X,Y), B(X), and C(Y) are literals like in regular logic programming. Intuitively, this clause tells one condition under which the statement A(X,Y) holds: this is the case if X+Y is greater than zero and both B(X) and C(Y) are true."
306
:
"Constraint Programming - Constraint programming is a programming paradigm where relations between variables can be stated in the form of constraints. Constraints differ from the common primitives of other programming languages in that they do not specify a step or sequence of steps to execute but rather the properties of a solution to be found. The constraints used in constraint programming are of various kinds: those used in constraint satisfaction problems, those solved by the simplex algorithm, and others. Constraints are usually embedded within a programming language or provided via separate software libraries."
307
:
"Constraint Satisfaction - In artificial intelligence and operations research, constraint satisfaction is the process finding a solution to a set of constraints. Such constraints express allowed values for variables, and a solution is therefore an evaluation of these variable that satisfies all constraints."
308
:
"Content Management System - A content management system is a computer software system for organizing and facilitating collaborative creation of documents and other content. For example, a content management system may be a web application used for managing websites and web content. They can also be used for storage and single sourcing of documentation for a firm including but not limited to operators' manuals, technical manuals, sales guides, etc."
309
:
"Control Panel - Control panel refers to the front end of a system which can set the configuration of the system. For example, in a PC or a Macintosh, control panel is part of the operating system that has the ability to control an aspect of system configuration, such as the display, software add/remove, language and network properties."
310
:
"Cooperative Multitasking - Cooperative multitasking, also known as non-preemptive multitasking, is a form of multitasking where it is the responsibility of the currently running task to give up the processor to allow other tasks to run. This contrasts with pre-emptive multitasking where the task scheduler periodically suspends the running task and restarts another. Cooperative multitasking has the advantage of making the operating system design much simpler, but it also makes it less stable because a poorly designed application may not cooperate well, and this often causes system freezes."
311
:
"Copy Propagation - Copy propagation, a optimization technique in the program compiler, is the process of replacing the occurrences of targets of direct assignments with their values. A direct assignment is an instruction of the form x = y, which simply assigns the value of y to x. Copy propagation is a useful "clean up" optimization frequently used after other optimizations have already been run."
312
:
"Copycat - Copycat refers to the tendency of humans to duplicate the behavior of others. Copycat is also the name of a model of analogy making and human cognition based on the concept of the parallel terraced scan, developed by Douglas Hofstadter, Melanie Mitchell, and others."
313
:
"Copyleft - In a non-legal sense, copyleft, a play on the word copyright, is the opposite of copyright. Copyleft refers to the practice of using copyright law to remove restrictions on the distribution of copies and modified versions of a work for others and require the same freedoms be preserved in modified versions. A widely used copyleft license is the GNU General Public License (GPL). Many fans of copyleft media believe that copyleft is a cross between copyright and public domain."
314
:
"Copyright - Copyright is a set of exclusive rights regulating the use of a particular expression of an idea or information, including but not limited to art designs, computer software, books, documents etc. At its most general, it is literally "the right to copy" an original creation. In most cases, these rights are of limited duration. The symbol for copyright is ©, and in some jurisdictions may alternately be written (c)."
315
:
"Copyright Infringement - The copyright infringement of software refers to several practices when done without the permission of the copyright holder: - 1. Creating a copy and selling it. This is the act most people refer to as software piracy. It is illigel in most countries. - 2. Creating a copy and giving it to someone else. This constitutes copyright infringement in most jurisdictions. It is not infringing under specific circumstances such as fair use and fair dealing. - 3. Creating a copy to serve as a backup. This is seen as a fundamental right of the software-buyer in some countries. It can be infringement, depending on the laws and the case law interpretations of those laws. - 4. Renting the original software. Software licenses often try to restrict the usual right of a purchaser of a copyrighted work to let others borrow the work. In some jurisdictions the validity of such restrictions are disputed. - 5. Reselling the original software. Licenses often say that the buyer does not buy the software but instead pays for the right to use the software. Therefore, the buyer can not resell the software without specific permission of the software vendor."
316
:
"CORC: CORnell Compiler - CORnell Compiler(CORC) was a simple computer language developed at Cornell University in 1962 to serve students for math problems. Its developers, industrial engineering professors Richard Conway and William Maxwell and mathematics professor Robert J. Walker, sought to create a diagnostic compiler in PL/I which could both expose math and engineering students to computing and remove the burden of mechanical problem-solving from their professors."
317
:
"CORE: Challenge of Reverse Engineering - Challenge of Reverse Engineering (CORE) is a software cracking group for the IBM PC which was founded in June of 1997 by a team of members from Ontario, Canada. Within four years the group made more than 10,000 releases (cracks, key generators and the like). These days the group is growing larger and there are already subgroups -- COREPDA (which is "working" with software for PocketPC, PDA etc.) and COREUtile. The Group CORE is today active and still "working"."
318
:
"CosmicOS - CosmicOS is a self-contained message designed to be understood primarily by treating it as a computer program and executing it. Self-contained messages are of interest for CETI research, but there is much difference of opinion over the most appropriate encoding and broadcast medium to use. CosmicOS is released in modular form, so that the basic message can be adapted to a particular concrete instantiation."
319
:
"Course Management System - A course management system is a computer program that facilitates computerised learning or e-learning, especially by helping teachers and learners with course administration. Such e-learning system is also called Learning Management Systems (LMS), Virtual Learning Environments (VLE), education via computer-mediated communication (CMC) or Online Education."
320
:
"Crack Intro - A crack intro, also known as a cracktro, loader, or just intro, is a small introduction sequence added to cracked software, designed to inform the user which "cracking crew" or individual cracker was responsible for removing the software's copy prevention and distributing the crack."
321
:
"Critical Section - In computer programming a critical section is a piece of code or a set of instructions that can only be executed by one process or thread at a time. If the instructions are interrupted, a race condition might occur. It will usually terminate in fixed time, and a process will only have to wait a fixed time to enter it. Some synchronisation mechanism is required at the entry and exit of the critical section to ensure exclusive use."
322
:
"CRM: Customer Relationship Management - Customer Relationship Management(CRM) is an information system that is used to plan, schedule and control the presales and postsales activities in an organization to manage customer relationships. CRM embraces all aspects of dealing with prospects and customers, including the call center, sales force, marketing, technical support and field service. There are three parts of application architecture of CRM: - Operational - automation to the basic business processes (marketing, sales, service) - Collaborative - ensures the contact with customers (phone, email, fax, web, sms, post, in person)"
323
:
"Cron - Cron is a Unix application that runs jobs for users and administrators at scheduled times of the day."
324
:
"Cross Compiler - A cross compiler is a compiler capable of creating executable code for another platform than the one on which the cross compiler is run. Such a tool is handy when you want to compile code for a platform that you don't have access to, or because it is inconvenient or impossible to compile on that platform (as is the case with embedded systems.)"
325
:
"Crowd Simulation - Crowd simulation is the process of simulating the movement of a large number of objects or characters, now often appearing in 3D computer graphics for film. The need for crowd simulation arises when a scene calls for more characters than can be practically animated using conventional systems, such as skeletons/bones."
326
:
"CSCI: Computer Software Configuration Item - Computer Software Configuration Item(CSCI) is a group of software treated as a single entity by a configuration management (CM) system. CSCI is for configuration control at the system architectural design, by contractual specification, or as development products. CSCI entities include software products to be developed or used under contract, and certain elements required from the software development environment."
327
:
"CSE: Common Subexpression Elimination - Common subexpression elimination (CSE), a term in compiler theory, is the practice of finding repeated redundant expression evaluations, and replacing them with a single computation assigned to a temporary variable. Although it can be done manually, the term usually refers to a compiler optimization."
328
:
"CSV: Comma Separated Values - Comma Separated Values (CSV) is a data type that is commonly used no-frills text file format for import from and export to spreadsheets and SQL databases."
329
:
"CUA: Common User Access - Common User Access (CUA) is a set of guidelines for the user interface to personal computer operating systems and computer programs, developed by IBM starting in 1987 as part of their Systems Application Architecture. Used originally in the OS/2 and Microsoft Windows operating systems, parts of the CUA standard are now implemented in programs for other operating systems, including variants of Unix. Java AWT and Swing use it as well. The CUA contains standards for the operation of dialog boxes, menus and keyboard shortcuts. For example, in programs written to the CUA standard, help is always summoned by pressing the F1 function key. New programs should be easier to use because users will not have to learn new commands to perform standard tasks."
330
:
"Cubase - Cubase is a MIDI, music sequencer and digital audio editing computer application (commonly known as a DAW - Digital Audio Workstation) created by the German firm Steinberg in 1989. Cubase started as a MIDI recording and editing tool. Later, features for recording raw audio were introduced. Cubase was originally written for the Atari ST, and has since been ported to Apple Macintosh and Microsoft Windows."
331
:
"Custom Software - Custom software, also called bespoke software, is software that was developed with a specific organization and its requirements in mind. Custom software is necessary when mass market software does not satisfy the functionalities required."
332
:
"Customized Toolbar - Customized toolbar is a toolbar that can be custom configured (modified) by the user. For example, buttons in the toolbar can be added and deleted as required."
333
:
"CVS: Concurrent Versions System - The Concurrent Versions System (CVS), also known as the Concurrent Versioning System, implements a version control system: it keeps track of all work and all changes in a set of files, typically the implementation of a software project, and allows several (potentially widely separated) developers to collaborate. CVS has become popular in the free software and open-source worlds. CVS is released under the GNU General Public License."
334
:
"Cwiab: Church Website in a Box - Church Website in a Box (CWIAB) is a free, open source content management system created from Postnuke, released under the GNU General Public License. The CWIAB project was started because Postnuke was very well suited for use by churches, but quite a bit of effort was still required collecting various PostNuke modules and installing them. Church Website in a Box can be installed in minutes and provides adequate functionality for most churches 'out of the box.' CWIAB is not a fork, but a collection of PostNuke and relevant modules."
335
:
"Cyclomatic Complexity - Cyclomatic complexity is a software metric (measurement) concept in computational complexity theory. It was developed by Thomas McCabe and is used to generally measure the complexity of a program. It directly measures the number of linearly independent paths through a program's source code."
336
:
"Cygwin - Cygwin is a collection of free software tools originally developed by Cygnus Solutions to allow various versions of Microsoft Windows to act somewhat like a UNIX system. It aims mainly at porting software that runs on POSIX systems (such as Linux systems, BSD systems, and UNIX systems) to run on Windows with little more than a recompilation. Cygwin is currently maintained by employees of Red Hat and others."
337
:
"Daemon - In Unix and other computer multitasking operating systems, a daemon is a computer program that runs in the background, rather than under the direct control of a user; they are usually instantiated as processes. The Daemon program, often started at the time the system boots and runs continuously without intervention from any of the users on the system, forwards the requests to other programs (or processes) as appropriate. Typically daemons have names that end with the letter "d"; for example, syslogd is the daemon which handles the system log. Windows OS refers to daemons as System Agents and services."
338
:
"DAM: Digital Asset Management - Digital asset management (DAM) refers to the practice and domain of organizing digital files, like images, documents, videos and presentations. The term asset is used to indicate that such files have some sort of intrinsic value that makes it worthwhile to manage them. DAM is related to and can be considered a superset of content management. For more information see also digital asset management systems and content management systems. To manage digital assets effectively, assets must be made available to the people who need them to efficiently contribute to the growth of the culture using them."
339
:
"DARCS: David's Advanced Revision Control System - David's Advanced Revision Control System (Darcs) is a distributed software revision control system designed by David Roundy to replace the centralized Concurrent Versions System (CVS). In the Darcs Each copy of the source tree acts as a full repository, allowing several different versions to be maintained in different locations. Patches are global to the repository and are subject under certain conditions to reordering, as governed by the project's theory of patches"
340
:
"Data - Data, in information industry, refers to distinct pieces of information, usually formatted in a special way. All information system is divided into two general categories: data and programs. Data can exist in a variety of forms - as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Programs refer to the collections of instructions for manipulating data, which may be software programs for compute processing, or a set of instructions for manual data operation."
341
:
"Data Architect - A data architect is a person responsible for making sure an organization's strategic goals are optimized through the use of enterprise data standards. Data architect's job frequently includes the set up and maintain a metadata registry and allows domain-specific stakeholders to maintain their own data elements."
342
:
"Data Architecture - Data architecture describes how data is processed, stored, and utilized in a given system. It provides criteria for data processing operations that make it possible to design data flows and also control the flow of data in the system. Data architecture also includes topics such as metadata management, business semantics, data modeling and metadata workflow management."
343
:
"Data Cleansing - Data cleansing, also called as data scrubbing, is the process of detecting and removing and/or correcting a database to increase data accuracy, reduce redundancy and enhance consistency of different sets of data that have been merged from separate databases. Sophisticated software applications are available to clean a database data using algorithms, rules and look-up tables, a task that was once done manually and therefore still subject to human error."
344
:
"Data Conversion - Data conversion is the conversion of one form of computer data to another--the changing of bits from being in one format to a different one, usually for the purpose of application interoperability or of capability of using new features. At the simplest level, data conversion can be exemplified by conversion of a text file from one character encoding to another. More complex conversions are those of office file formats, and conversions of image and audio file formats are an endeavor that is beyond the ken of ordinary computer users."
345
:
"Data Element - Data element, as a term used in metadata, is an atomic unit of data that has the following characters: 1) An identification such as a data element name; 2) A clear data element definition; 3) One or more representation terms; 4) Optional enumerated values Code (metadata); 5) A list of synonyms to data elements in other metadata registries Synonym ring. Data elements usage can be discovered by inspection of software applications or application data files through a process of manual or automated Application Discovery and Understanding. Once data elements are discovered, they can be registered in a metadata registry."
346
:
"Data element definition - In metadata, a data element definition is a human readable phrase or sentence associated with a data element within a data dictionary that describes the meaning or semantics of a data element. Data element definitions are critical for external users of any data system. Good definitions can dramatically ease the process of mapping one set of data into another data set of data. This is a core feature of distributed computing and intelligent agent development."
347
:
"Data Mapping - Data mapping is the process of creating data element mappings between two distinct data models. Data mapping is the first step in creating a data transformation between a data source and a destination. For example, a company that would like to transmit and receive purchases and invoices with other companies might use data mapping to create data maps from a company's data to standardized ANSI ASC X12 messages for items such as purchase orders and invoices."
348
:
"Data Migration - Data migration refers to the translation of data between storage types, formats, or computer systems. Data migration is necessary when an organization decides to use a new computing systems or database management system that is incompatible with the current system. Data migration is usually performed programatically to achieve an automated migration, freeing up human resources from tedious tasks. It is required when organizations or individuals change computer systems or upgrade to new systems."
349
:
"Data Modeling - Data modeling is the process of structuring and organizing data. It defines a structure for data that is typically implemented in a database management system and that enables (and limits) to enter data in that structure. Data modeling is often the first step in database design and object-oriented programming as the designers first create a conceptual model of how data items relate to each other. Data modeling involves a progression from conceptual model to logical model to physical schema."
350
:
"Data Processing - Data processing is a computer process that converts data into required information. The processing is usually assumed to be automated and running on a computer. There are many data processing applications, such as accounting programs that convert raw financial data into meaninful reports for various purpose. Another example is customer relationship management systems (CRM) and employee relationship data systems."
351
:
"Data Scrubbing - Data scubbing, also called as data cleaning, is the process of detecting and removing and/or correcting a database to increase data accuracy, reduce redundancy and enhance consistency of different sets of data that have been merged from separate databases. Sophisticated software applications are available to clean a database data using algorithms, rules and look-up tables, a task that was once done manually and therefore still subject to human error."
352
:
"Data Structure - Data structure is the pattern to store data in a computer so that it can be used efficiently. Often a carefully chosen data structure will allow a more efficient algorithm to be used. The choice of the data structure often begins from the choice of an abstract data structure. A well-designed data structure allows a variety of critical operations to be performed, using as few resources, both execution time and memory space, as possible. Data structures are implemented using the data types, references and operations on them provided by a programming language."
353
:
"Data Transformation - Data transformation converts data from a source data format into destination data. Data transformation can be divided into two steps: 1) data mapping maps data elements from the source to the destination and captures any transformation that must occur; 2) code generation that creates the actual transformation program."
354
:
"Database Administration - Database administration refers to duties, typically performed by a DBA in an organization, such as disaster recovery (backups and testing of backups), performance analysis and tuning, and some database design or assistance thereof."
355
:
"Database Model - A database model is a theory or algorithm describing how a database is structured and used. Several such models have been suggested, for example, Hierarchical model, Network model, Relational model, Object-Relational model, Object model, Associative, Concept-oriented, Entity-Attribute-Value, Multi-dimensional model, Semi-structured, and Star schema."
356
:
"Database Normalization - Databases normalization is a process that eliminates redundancy, organizes data efficiently, reduces the potential for anomalies during data operations and improves data consistency. The formal classifications used for quantifying "how normalized" a relational database is are called normal forms. A non-normalized database is vulnerable to data anomalies because it stores data redundantly. If data is stored in two locations, but later is updated in only one of the locations, then the data is inconsistent; this is referred to as an "update anomaly". A normalized database stores non-primary key data in only one location."
357
:
"Database Object - Database Object is a piece of information or record that is stored in a database."
358
:
"Database Query Language - Database query language is a kind of programming language to retrieve information from a database. The person formulating the query is expected to understand the relevant rules for formulating the query, and to program the query according to the requirements. Examples of the database query language are the CODASYL database language, "network" databases, relational algebra, relational calculus, Datalog, SQL3, QUEL, XPointer, XPath and OQL."
359
:
"Database Server - A database server is a computer program that provides database services to other computer programs or computers, as defined by the client-server model. The term may also refer to a computer dedicated to running such a program. Database management systems frequently provide database server functionality, and some DBMS's (e.g., MySQL) rely exclusively on the client-server model for database access."
360
:
"Datalog - Datalog is a query and rule language for deductive databases that syntactically is a subset of Prolog. Query evaluation with Datalog is sound and complete and can be done efficiently even for large databases. Query evaluation is usually done using bottom up strategies. For restricted forms of datalog that don't allow any function symbols, safety of query evaluation is guaranteed."
361
:
"Dating Software - Dating software refers to software that powers a dating website. This software runs on the server (computer) that hosts the dating website."
362
:
"DB/DC: Database/Data Communications - Database/Data Communications (DB/DC) refers to the software system that has both database and communications capabilities."
363
:
"DB: Database - Database(DB) is a collection of organized information and data. In computer industry, database is an electronic filing system. Various techniques are used to model data structure. Most database systems are built around one particular data model, although it is increasingly common for products to offer support for more than one model. Traditional databases are organized by fields, records, and files. A field is a single piece of information; a record is one complete set of fields; and a file is a collection of records."
364
:
"DB2: DataBase 2 - DB2, abbreviated from DataBase 2, is a relational database system developed by IBM Corporation, originally for use on large mainframe computer systems. It has since been ported to a variety of platforms including SunOS, Solaris, Linux, Windows 95/98/NT/2000 and HP-UX. DB2 can be administered from either the command-line or a GUI. DB2 has APIs for .NET CLI, Java, Python, Perl, PHP, Ruby on Rails, C++, C, REXX, PL/I, COBOL, RPG, FORTRAN, and many other programming languages. DB2 also supports integration into the Eclipse and Visual Studio .NET integrated development environments."
365
:
"DBA: Database Administrator - A database administrator (DBA) is a person who is responsible for the environmental aspects of a database. The duties of a database administrator varies depending on job description, corporate and Information Technology (IT) policies and the technical features and capabilities of the database management systems (DBMSs) being administered. They nearly always include disaster recovery (backups and testing of backups), performance analysis and tuning, and some database design or assistance thereof."
366
:
"DBase - DBase is a commercial relational database management system intruduced first by Ashton-Tate corporation in the early 1980s and now belongs to the dBase Corporation. DBASE was never able to make transition successfully to Microsoft Windows and was eventually displaced by newer products like Paradox, Clipper, FoxPro, and Microsoft Access."
367
:
"DBCS: Double-Byte Character Set - Double-Byte Character Set (DBCS) is a type of character encoding scheme which uses 16-bits (two-bytes) rather than 8-bits (one-bytes) characters. Using double-byte characters expands the possible number of combinations of 1s and 0s from 256 (as in ASCII) to 65,536 (or 256 x 256). Double-byte character sets are needed for such languages as Japanese, Chinese, and Korean. DBCS has different flavors, for example, double byte for ALL characters (including control character), or double byte only for image characters."
368
:
"DBI: DataBase Interface for Perl - The DBI (DataBase Interface) is the standard database interface module for Perl programming language. It defines a set of methods, variables and conventions that provide a consistent database interface independent of the actual database being used. The DBI and DBD Perl packages allow Perl programmers to view the many database environments that are on the market in a uniform way."
369
:
"DBMS: Database Management Ssystem - Database management system (DBMS) is a system or software designed to manage a database, and run operations on the data requested by numerous clients. Typical examples of DBMS use include accounting, human resources and customer support systems. DBMS enables user to store, modify, and extract information from a database. There are many different types of DBMSs, ranging from small systems that run on personal computers to huge systems that run on mainframes."
370
:
"Dbx Debugger - Dbx is a popular, UNIX-based source-level debugger found primarily on Solaris, AIX, IRIX, and BSD UNIX systems. It provides symbolic debugging for programs written in C, C++, Pascal, and Fortran.dbx is also available on IBM z/OS systems, in the UNIX System Services component. dbx for z/OS can debug programs written in C and C++. It can also perform machine level debugging. As of z/OS V1R5, dbx is able to debug programs using the DWARF debug format. z/OS V1R6 added support for debugging 64-bit programs."
371
:
"DCL: Data Control Language - Data Control Language (DCL) is a computer language for controlling access to data in a database. Examples of DCL commands are GRANT and REVOKE."
372
:
"DCOM: Distributed Component Object Model - Distributed Component Object Model (DCOM), developed by Microsoft and previously called Network OLE, enables software components to communicate directly over a network. DCOM is designed for use across multiple network transports, including such Internet protocols as HTTP."
373
:
"DDD: Data Display Debugger - Data Display Debugger (DDD) is a popular graphical user interface for command-line debuggers such as GDB, DBX, JDB, WDB, XDB, the Perl debugger, and the Python debugger.DDD is licensed under the GNU GPL and is open source."
374
:
"DDL: Data Definition Language - Data Definition Language(DDL) is a computer language for defining data. XML Schema is an example of a pure DDL (although only relevant in the context of XML). A subset of SQL's instructions forms another DDL."
375
:
"DDMS: Distributed Database Management System - Distributed database management system (DDMS) is a software system that permits the management of the distributed database and makes the distribution transparent to the users. Distributed database is a collection of multiple, logically interrelated databases distributed over a computer network. Sometimes distributed database system is used to refer jointly to the distributed database and the distributed Database Management System(DBMS). Distributed database management systems can be architected as client-server systems or peer-to-peer ones. In the former, one or more servers manage the database and handle user queries that are passed on by the clients. The clients usually have limited database functionality and normally pass the SQL queries over to the servers for processing. In peer-to-peer systems, each site has equal functionality for processing."
376
:
"DDT: Dynamic Debugging Technique - Dynamic Debugging Technique (DDT) was the name of several debugger programs originally developed for DEC hardware, originally known as DEC Debugging Tape because it was distributed on paper tape. The first version of DDT was developed at MIT for the PDP-1 computer in 1961, but newer versions on newer platforms continued to use the same name."
377
:
"Dead Code - In computer programming, dead code, also known as unreachable code, typically consists of blocks of programming instructions or entire routines that will never be accessed because all calls to them have been removed, or code that cannot be reached for some reason. Dead code is undesirable for a number of reasons, but primarily because it suggests that there is a fault in the software. Detecting dead code is a form of static analysis and involves performing control flow analysis to find any code that will never be executed regardless of the values of variables and other conditions at runtime."
378
:
"Dead code Elimination - Dead code elimination is a compiler optimization technique used to reduce program size by removing code which can never be executed (known as dead or unreachable code)."
379
:
"Debug Monitor - Debug monitor is a piece of software that has been designed specifically for use as a debugging tool for processors and chips. The debug monitor provides a set of primitive commands to view and modify memory locations and registers, create and remove breakpoints, and execute your program. A remote debugger with knowledge of the command format communicates with the debug monitor and combines these primitives to fulfill higher-level requests like program download and single-step."
380
:
"Debugger - Debugger is a computer program that is used to debug other programs. Sometimes, a debugger may also include testing and optimizing functions. For example, when the program crashes, the debugger shows the position in the original code if it is a source-level debugger or symbolic debugger, commonly seen in integrated development environments. If it is a low-level debugger or a machine-language debugger, it shows the line in the disassembly."
381
:
"Decompiler - A decompiler is a computer program that translates executable programs (the output from a compiler) into an equivalent (relatively) high level language (source code). By comparison, a disassembler translates an executable program into assembly language."
382
:
"Deflate Algorithm - Deflate Algorithm is a lossless data compression algorithm that uses a combination of the LZ77 algorithm and Huffman coding. It was originally defined by Phil Katz for version 2 of his PKZIP archiving tool, and was later specified in RFC 1951. Deflate is used in gzip compressed files and PNG image files, in addition to the ZIP file format for which Katz originally designed it. Source code for Deflate compression and decompression can be found in zlib, the freely available, general-purpose compression library."
383
:
"Defragment - Defragment is a process often required in a computer system to reorganize the disk by putting files into contiguous order. Because the operating system stores new data in whatever free space is available, data files become spread out across the disk as they are updated. Large files may be broken into many fragments, which will slow down the read/write of hard disks. A deframentation software rewrites all the files and stores them in adjacent sectors."
384
:
"Dehardwarization - Dehardwarization refers to the trend in design of new computer hardware which tends to eliminate as many hardware components as possible and supplanting their functionality with software. An example of dehardwarized devices include softmodems and many AC'97 based audio cards."
385
:
"Delphi - Delphi is a programming language and Integrated Development Environment (IDE). It is produced by Borland (known for a time as Inprise). The Delphi language, formerly known as Object Pascal (Pascal with object-oriented extensions) originally targeted only Microsoft Windows, but now builds native applications for Linux and the Microsoft .NET framework as well."
386
:
"Demo: Demostration Version - Demo version, or demostration version, of software is a free or low-priced sample of a program. Demo programs are often with some features disabled or time limitations. It is intended to give the user enough of a taste to want to buy the full version program."
387
:
"Demoware - Demoware is commercial software released by way of a free download with limitations, that is intended to give the user enough of a taste to want to buy the full version program. Demoware usually is limited in one (or more) of the following ways:↵Remains functional for a set number of days from installation.↵May only be launched for a set number of times.↵Adds identifying marks to the output. Common with image and video editing demoware.↵Is limited to a set number of "days of use" (i.e. only days you actually use the program count toward its trial limit)↵Program execution terminates after a set time period (typically between 5 and 60 minutes).↵Limited number of times that an important function may be used↵"
388
:
"Remains functional for a set number of days from installation."
389
:
"May only be launched for a set number of times."
390
:
"Adds identifying marks to the output. Common with image and video editing demoware."
391
:
"Is limited to a set number of "days of use" (i.e. only days you actually use the program count toward its trial limit)"
392
:
"Program execution terminates after a set time period (typically between 5 and 60 minutes)."
393
:
"Limited number of times that an important function may be used"
394
:
"Deprecated Software - Deprecated software, also called deprecation, refers to a software or a function inside a software package that is considered obsolete and on its way out, usually in favor of something better. The software or feature still works in the current version, although it may raise alert messages as warnings. These serve to alert the user to the fact that the feature may be removed in future releases, and slowly support for the program is phased out."
395
:
"Der Dirigent - Der Dirigent is a free (licensed under the GNU General Public License), open source content management system written with PHP and MySQL. It offers full flexibility and extendability while featuring an accomplished set of ready-made interfaces, functions and modules. "Der Dirigent" has two operating modes: a so-called "Frontend" which presents "Der Dirigent" based website to its users and a "Backend" used by authors and site admins to manage content for the website. After the simple Installation, you need no ftp program. You can do everything in the browser, even the online editing of Cascading Style Sheet or JavaScript."
396
:
"Design Compiler - Design Compiler is a product of Synopsys that compiles and optimises (in terms of silicon area and maximum clock frequency) high-level electronic circuit descriptions specified by restricted sub-languages of either Verilog or VHDL, into a gate-level netlist representation of a circuit. This procedure is an example of logic synthesis."
397
:
"DeskScan - DeskScan is Hewlett-Packard software used in conjunction with a scanner. Using DeskScan, pictures or documents can be scanned into the computer (turned into digital files), edited, and placed in one of the right formats to be posted on a Web page or inserted into PowerPoint presentations."
398
:
"DesktopBSD - DesktopBSD is a UNIX-like, desktop-oriented operating system based on FreeBSD. Its goal is to combine the stability of FreeBSD with the ease-of-use of K Desktop Environment (KDE), which is the default graphical user interface."
399
:
"Dev-C++ - Dev-C++ is a free Integrated Development Environment(IDE) for programming use in C and its derivative, C++. Dev-C++ is bundled with the open source MinGW compiler utilizing gcc and its C++ counterpart, g++. Dev-C++ is distributed under the GNU General Public License. The Dev-C++ IDE is written in Delphi and/or its Linux port of Kylix."
400
:
"Device Driver - Device driver, or a software driver, is a specific type of computer software, developed to allow interaction between the computer and hardware devices. Each device driver is typically a piece of operating system-specific as well as hardware-dependent software that makes it possible for application software to attach to, read and write data from, and change the behavior of the peripheral device.Â  Typically this constitutes an interface for communicating with the device, through the specific computer bus or communications subsystem that the hardware is connected to, providing commands to and/or receiving data from the device, and on the other end, the requisite interfaces to the operating system and software applications. Device driver enables another program, typically an operating system or applications software package or computer program running under the operating system kernel, to interact transparently with a hardware device, and usually provides the requisite interrupt handling necessary for any necessary asynchronous time-dependent hardware interfacing needs."
401
:
"DGCA - In computing, DGCA is a freeware compression utility created in 2001 by Shin-ichi Tsuruta. DGCA is also a compressed archive format, the next generation of 'GCA'. DGCA has higher compression than ZIP, Strong Password, Unicode Filename. However, DGCA is not a major compression format."
402
:
"DIB: Device-Independent Bitmap - Device-Independent Bitmap (DIB), also kown as Bitmap (BMP), is the graphics format supported by Windows and some other OS. The graphic files in DIB format are generally end with a .bmp extension. DIB images can also be transferred in metafiles and the clipboard. It's called device-independent because colors are represented in a format independent of the final output device. When a DIB image is output to a specific device, the device driver translates the DIB colors into actual colors that the output device can display. For example, to display bitmap graphs on screen, Device Dependent Bitmap (DDB) must be used."
403
:
"Digial pen - Digital pen is an electronic writing instrument that allows the user to digitally capture a handwritten note or drawing. Typically, digital pen is connected with a computer using a Universal Serial Bus (USB) cradle to let the user upload the handwritten notes for processing and storage. The pen looks like a regular ball-point pen and can be used as such, but requires special digital paper if the user wishes to digitally capture what he has written."
404
:
"Digital Paper - Digital paper is patterned paper used in conjunction with a digital pen to create handwritten digital documents. The proprietary printed dot pattern uniquely identifies the position coordinates on the paper. The digital pen uses this pattern to store the handwriting and upload it to a computer."
405
:
"Digital Wallet - Digital wallet, also known as e-wallet, is a system designed for electronic commerce transactions over the Internet quickly and securely. A digital wallet can hold a user's payment information encrypted, a digital certificate to identify the user, and shipping information to speed transactions. The consumer benefits because their information is encrypted and safe, no retyping required when conduct e-commerce online from different vendors, and payment in digital cash or check. Merchants benefit by receiving protection against fraud. Paypal is an example of such digital wallet system."
406
:
"DirectX - DirectX, provided by Microsoft, is a suite of multimedia application programming interfaces (APIs) built into Microsoft Windows OS. DirectX provides a standard development platform for Windows-based PCs by enabling software developers to access specialized hardware features without having to write hardware-specific code. The DirectX APIs give multimedia applications access to the advanced features of high-performance hardware such as three-dimensional (3-D) graphics acceleration chips and sound cards. They control low-level functions, including two-dimensional (2-D) graphics acceleration; support for input devices such as joysticks, keyboards, and mice; and control of sound mixing and sound output. Because of DirectX, what you experience with your computer is better 3-D graphics and immersive music and audio effects."
407
:
"Disassembly - Disassembly is the process of taking a binary program and deriving the source code from it."
408
:
"Disassembler - A disassembler is a computer program which translates machine language to assembly language. It therefore performs the inverse operation to an assembler. However, the output of a disassembler is often designed for human-readability rather than suitability for input to an assembler (called disassembly). By comparison, a decompiler translates machine language into a high level language."
409
:
"Distcc - Distcc is a computer program that distributes processes of compiling C and its derivatives like C++ and Objective C source code over a computer network. With the right configuration, the program can dramatically reduce compilation time."
410
:
"Distiller - Distiller is a software program from Adobe which converts postscript files to portable document format (.pdf) files. Postscript files have special coding which instruct the printer how to print the document."
411
:
"Distributed Computing - Distributed computing may mean different things in different situation. It may refer to the use of multiple computers in an organization rather than one centralized system. This use of the term was popular in the 1970s. It may also mean the use of multiple computers networked throughout a wide geographical area to solve a single problem."
412
:
"Distributed Database - A distributed database is a database that is under the control of a central database management system (DBMS) in which storage devices are not all attached to a common CPU. It may be stored in multiple computers located in the same physical location, or may be dispersed over a network of interconnected computers. Because the database is distributed, different users can access it without interfering with one another. However, the DBMS must periodically synchronize the scattered databases to make sure that they all have consistent data."
413
:
"Distribution Software - Distribution software is a software system that helps companies to manage internal and external resources. Distribution software manages everything from order processing and inventory control to accounting, purchasing and customer service, supply chain management, sales, CRM, inventory, warehouse and finance management."
414
:
"DJGPP - DJGPP is a 32-bit C/C++ development system for 386 PCs and PC compatibles running MS-DOS, developed by DJ Delorie in 1989. It is a software port of the popular gcc compiler, as well as many other GNU development utilities, to DOS Protected Mode Interface(DPMI)."
415
:
"DKBTrace - DKBTrace was a graphical ray tracing program which was the forerunner of POV-Ray. It had no GUI and ran via the command line. It featured quadric shapes (spheres, ellipsoids, planes, etc), constructive solid geometry (intersection, difference, union), and procedural textures like wood and marble. It was written for UNIX by David K. Buck (1986) and Aaron Collins. The last version (DKBTrace 2.12) was built in 1989."
416
:
"DLL Hell - DLL hell is a phrase used to describe the complications which arise when working with dynamic link libraries (DLLs). DLL Hell encompasses the difficulties of managing dynamic-link libraries (DLLs) in Microsoft Windows operating systems, such as conflicts between DLL versions, difficulty in obtaining required DLLs, and having many unnecessary DLL copies. DLL Hell is an example of a latent operating system design flaw â€” that is, problems occur in well-written programs because of bad programming practice or a bug in poorly-written software that is tolerated by the operating system. The paradigm of a latent operating system flaw is time slice multiplexing in Microsoft operating systems pre-dating OS2 and Windows NT. With time slicing, a rogue or buggy program can effectively disable the entire computer, forcing the user to hard boot the machine."
417
:
"DLL: Dynamic-Link Library - Dynamic-link library (DLL) is Microsoft's implementation of the shared library concept in the Microsoft Windows operating systems. These libraries usually have the file extension DLL, OCX (for libraries containing ActiveX controls), or DRV (for legacy system drivers). The file formats for DLLs are the same as for Windows EXE files that is, Portable Executable (PE) for 32-bit Windows, and New Executable (NE) for 16-bit Windows. DLLs can contain code, data, and resources, in any combination. DLL is files containing groups of often-used computer code which can be shared amongst many programs. This has several advantages: programmers who use library code do not need to keep reinventing the wheel; programs which invoke library code do not each need to include a copy of that code, making their files smaller; updates to library code can be applied in one place, rather than in many programs."
418
:
"DM: Data Mart - Data mart (DM) is a specialized version of a data warehouse (DW). Whereas a data warehouse combines databases across an entire enterprise, data marts are usually smaller and focus on a particular subject or department. Data marts contain a snapshot of operational data that helps business people to strategize, based on analyses of past trends and experiences. Since a data mart configuration emphasizes easy access to relevant information, the star schema or dimensional model is a fairly popular design choice, as it enables a relational database to emulate the analytical functionality of a multi-dimensional database."
419
:
"DM: Data Mining - Data mining (DM), also known as Knowledge-Discovery in Databases (KDD) or Knowledge-Discovery and Data Mining (KDD), is the process of automatically searching large volumes of data for patterns. Data mining uses automated data analysis techniques to uncover previously undetected relationships among data items. Data mining often involves the analysis of data stored in a data warehouse. Three of the major data mining techniques are regression, classification and clustering."
420
:
"DML: Data Manipulation Language - Data Manipulation Language (DML) is a family of computer languages used by computer programs or database users to retrieve, insert, delete and update data in a database. The currently most popular Data manipulation language is that of SQL, which is used to retrieve and manipulate data in a Relational database. Other forms of DML are those used by IMS/DL1, CODASYL databases (such as IDMS), and others."
421
:
"DMX: Data Mining Extensions - Data Mining Extensions (DMX) is a query language for Data Mining Models, much like that SQL is a query language for relational databases and MDX is a query language for OLAP databases. DMX syntax is more similar to SQL than MDX."
422
:
"Doc-O-Matic - Doc-O-Matic is a commercial automatic documentation generator that creates fully cross linked documentation systems, including both Source Code Documentation, Online Help and User Manuals in PDF, browser-based Help, HTML Help, MS Help 2, Windows Help, RTF and XML. Doc-O-Matic supports all major project file formats as well as the following programming languages: C/C++, C++/CLI, C#, Delphi, Java, IDL, VB.NET, JavaScript, MATLAB, ASP.NET, JSP."
423
:
"Document! X - Document! X is a documentation generator which automates technical documentation production for VB6/VBA source code, C#/VB.NET/C++ or other .NET language assemblies, databases, COM components, type libraries and XSD schemas. Document! X consists of an authoring and documentation built environment (including HTML based Visual Authoring tools) as well as Visual Comment Editor Add-Ins for Visual Basic, VBA and Visual Studio .NET."
424
:
"DOMi: DOM Inspector - DOM Inspector (DOMi) is one of the web developer tools included in Mozilla Application Suite and Mozilla Firefox. The main function of the DOM Inspector is to inspect the Document Object Model tree of HTML and XML-based documents."
425
:
"Donateware - Donateware (or donationware) is freely distribution software. But the user must donate to a charitable cause in order to "register" the software. Sometimes the author of the program stipulates which charity the user must donate to, sometimes they just suggest one, and sometimes the author leaves the choice up to the user. Normally the user does not need to contact the author with any information in order to "register" their program - it is implicit with the donation (registering does not "unlock" any extra features)."
426
:
"DOOM - DOOM is a 1993 computer game by id Software that is among the landmark titles in the first-person shooter genre. It is widely recognized for its pioneering use of immersive 3D graphics, networked multiplayer gaming, and the support for players to create custom expansions (WADs). Distributed as shareware, Doom was downloaded by an estimated 10 million people within two years, popularizing the mode of gameplay and spawning a gaming subculture; as a sign of its impact on the industry, games from the mid-1990s boom of first-person shooters are often known simply as "Doom clones". Its graphic and interactive violence has also made Doom the subject of much controversy reaching outside the gaming world."
427
:
"Doom WAD - Doom WADs (Where's All the Data?) are mods for the computer game Doom or its sequel Doom II. Immediately after its release in 1993, Doom attracted a sizeable following of players who created their own WAD files packages containing levels, graphics and other game data and played a vital part in spawning the mod-making culture which is now commonplace for first-person shooters. Literally thousands of WADs, ranging from single custom levels to full original games, have been created for Doom; most of these can be downloaded for free over the Internet. Several WADs have also been released commercially, and for some people the WAD-making hobby became a gateway to a professional career as a level designer."
428
:
"DOS: Disk Operating System - Disk Operating System (DOS) commonly refers to the family of closely related operating systems which dominated the IBM PC compatible market between 1981 and 2000: PC-DOS, MS-DOS, FreeDOS, DR-DOS, Novell-DOS, OpenDOS, PTS-DOS, ROM-DOS and several others. Of these, MS-DOS from Microsoft was the most widely used. These operating systems ran on IBM PC type hardware using the Intel x86 CPUs or their compatible cousins from other makers. Such a system must handle physical disk I/O, the mapping of file names to disk addresses and protection of files from unauthorised access (in a multi-user system). DOS should present a uniform interface to different storage device such as floppy disks, hard disks and magnetic tape drives. It may also provide some kind of locking to prevent unintentional simultaneous access by two processes to the same file (or record)."
429
:
"DotGNU - DotGNU is a GNU-sponsored project for devising web services, software componentry and the like. It is compatible with Microsoft .NET and similar to the Mono project from Novell.The DotGNU developers say that while they realize that the Microsoft .NET platform is a powerful concept, its commercialization by a single company may be threatening the free software movement. There are nonetheless a lot of open source projects being made in C#."
430
:
"DotNetNuke - DotNetNuke is a free, open source, extensible content management system ideal for creating and maintaining professional websites. Originally based on the iBuySpy code demo released by Microsoft, the system is now in its 3rd edition. You customize the look and feel of your site by creating one or more Skins that require little more than HTML knowledge to create. Like many other Content Management Systems, the power of DotNetNuke lies not so much in its built-in features but its easy extensibility."
431
:
"Doxygen - Doxygen is a Documentation generator for C++, C, Java, IDL (Corba and Microsoft flavors) and to some extent Objective-C, PHP, C# and D. Being highly portable, it runs on most Unix systems as well as on Windows and Mac OS X. Most of the Doxygen code was written by Dimitri van Heesch."
432
:
"Drawing Program - Drawing program allows a user to draw freehand and create complex graphics. It may include features such as special fonts, clip art, or painting facilities that allow a user to simulate on the computer the drawing characteristics of specific real-world implements such as charcoal, watercolours, or pastels. For example, Corel Draw and Adobe Illustrator are drawing programs."
433
:
"DRDA: Distributed Relational Database Architecture - Distributed Relational Database Architecture is an IBM proprietary architecture for relational database."
434
:
"Dreamweaver - Dreamweaver is an HTML editor developed by Macromedia, now part of Adobe Systems. It was originally designed for professional web designers and offers an editing system that combines both the productivity of WYSIWYG design with the control of HTML code editing mode. This combination was quite unique in late 1990s and helped Dreamweaver to a widespread adoption. It is currently available for Mac and Windows and holds about 80% of the professional HTML editor market."
435
:
"Dribbleware - Dribbleware refers to the software which is prematurely released with frequent update, fixes, and patches after release. With the intense market pressure to release software products as soon as possible, and with the increased ease of updating software via Internet downloads, dribbleware is becoming the norm rather than the exception."
436
:
"Driver Wrapper - A driver wrapper is software that functions as an adapter between an operating system and a driver, such as a device driver, that was not designed for that operating system. It can enable the operating system to use technologies for which no native implementation exists."
437
:
"Drupal - Drupal is a content management framework, content management system and blogging engine which was originally written by Dries Buytaert as a bulletin board system. Drupal has become much more, thanks to its flexible architecture, and is the software used to power Debian Planet, Terminus1525, Wikinerds Portal, Spread Firefox, and KernelTrap, among others. Drupal is written in PHP using strict coding standards."
438
:
"DSI: Delivered Source Instruction - Delivered source instruction (DSI) refers to one line of new source code developed for software. DSI is used to estimate software cost. Typically expressed in thousands of lines of code (e.g., 5,000 DSI or 5KDSI). DSI is the primary input to many tools for estimating software cost. The term "delivered" is generally meant to exclude non-delivered support software such as test drivers. However, if these are developed with the same care as delivered software, with their own reviews, test plans, documentation, etc., then they should be counted. The "source instructions" include all program instructions created by project personnel and processed into machine code by some combination of preprocessors, compilers, and assemblers. It excludes comments and unmodified utility software. It includes job control language, format statements, and data declarations."
439
:
"DSL: Domain-Specific Language - Domain-specific language(DSL), also known as domain-specific programming language, is a programming language designed to be useful for a specific set of tasks. Examples of DSLs include spreadsheet macros, YACC for parsing and compilers, Csound, a language used to create audio files, and GraphViz, a language used to define directed graphs, and create a visual representation of that graph. DSLs have also been called by various names: Little languages, Macros, Application languages, Very high level languages, etc."
440
:
"DSSI: Disposable Soft Synth Interface - Disposable Soft Synth Interface (DSSI) is a virtual instrument (software synthesizer) plugin architecture for use by music sequencer applications. It was designed for applications running under Linux, although there is nothing specific to Linux in the interface itself. It is sometimes described as "LADSPA for instruments". LADSPA is the more general plugin architecture for filters, reverbs and other sound processing software tools, whereas DSSI is specifically for instruments. DSSI, however, uses LADSPA as an event transport mechanism and as such extends LADSPA."
441
:
"DW: Data Warehouse - Data warehouse (DW) is a computer database that collects, integrates and stores an organization's data with the aim of producing accurate and timely management information and supporting data analysis. A DW typically has the following characters: 1) SUBJECT oriented, meaning that the data in the database is organised so that all the data elements relating to the same real-world event or object are linked together; 2) Time variant, meaning that the changes to the data in the database are tracked and recorded so that reports can be produced showing changes over time; 3) Non-volatile, meaning that data in the database is never over-written or deleted, but retained for future reporting; and, 4) Integrated, meaning that the database contains data from most or all of an organisation's operational applications, and that this data is made consistent."
442
:
"EBNF: Extended Backus Naur form - Extended BackusNaur form (EBNF) is an extension and simplification of the original Backusâ€“Naur form (BNF) metasyntax notation. Originally developed by Niklaus Wirth, the most commonly used variants of EBNF are currently defined by standards, most notably ISO-14977."
443
:
"ECM: Enterprise Content Management - Enterprise Content Management (ECM) is any of the strategies and technologies employed in the information technology industry for managing the capture, storage, security, revision control, retrieval, distribution, preservation and destruction of documents and content. ECM especially concerns content imported into or generated from within an organization in the course of its operation, and includes the control of access to this content from outside of the organization's processes."
444
:
"Editor - Editor in computing refers to an application program that enables you to create and edit some types of files. There are many different types of editors, such as: text editor, an application to edit plain text; hex editor, an application to edit binary data; HTML editor, an application to edit webpages; XML editor, an application to edit XML data; digital audio editor, an application to edit audio data; raster graphics editor; vector graphics editor; level editor, an application to edit levels of computer games; etc."
445
:
"EFence: Electric Fence - Electric Fence (eFence) is a memory debugger written by Bruce Perens. It consists of a library which a programmer can link into his or her code to override the standard library memory management functions. eFence triggers a program crash when the memory error occurs, so a debugger can be used to inspect the code that caused the error."
446
:
"EFSM: Extended Finite State Machine Model - Extended Finite State Machine Model (EFSM) is an enhanced model based on the traditional finite state machine (FSM), which is a model of behavior composed of states, transitions and actions. In a conventional FSM, the transition is associated with a set of input Boolean conditions & a set of output Boolean functions. In an EFSM model, the transition can be expressed by an if statement. If trigger conditions are all satisfied, the transition is fired, bringing the machine from the current state to the next state and performing the specified data operations. The models are used widely in modeling reactive systems, linguistics, computer science, philosophy, biology, mathematics, and logic."
447
:
"EGCS: Experimental/Enhanced GNU Compiler System - Experimental/Enhanced GNU Compiler System(EGCS) was a compiler system which forked from the GNU Compiler System (GCC) in 1997 and was re-merged in April 1999. By 1991, GCC 1.x had reached a point of stability, but architectural limitations prevented many desired improvements, so the Free Software Foundation started to work on GCC 2.x."
448
:
"EIAS: Electric Image Animation System - The Electric Image Animation System (EIAS) is a 3D computer graphics package published by EI Technology Group. It currently runs on the Mac OS X, Windows, and Solaris platforms. EIAS's primary competitors in the integrated 3D package space are Autodesk with Maya and 3D Studio Max, Avid with Softimage|XSI, Maxon with Cinema 4D, and Newtek with LightWave 3D."
449
:
"Emacs - Emacs is a class of text editors, possessing an extensive set of features, that are popular with computer programmers and other technically proficient computer users. Many versions of Emacs have appeared since 1975 when the original version was introduced, but nowadays there are two that are commonly used: GNU Emacs, started by Richard Stallman in 1984 and still maintained by him, and XEmacs, a fork of GNU Emacs which was started in 1991 and has remained mostly compatible. Both use a powerful extension language, Emacs Lisp, that allows them to handle tasks ranging from writing and compiling computer programs to browsing the web."
450
:
"Emacs LISP - Emacs LISP is a dialect of the Lisp programming language used by the GNU Emacs and XEmacs text editors (which will be collectively referred to as Emacs in this article.) It is used for implementing most of the editing functionality built into Emacs, the remainder being written in C. Users of Emacs commonly write Emacs Lisp code to customize and extend Emacs."
451
:
"Emulation - Emulation refers to the capabilities of a program or device to imitate another program or device. Emulation attempts to model, to various degrees, the state of the device being emulated. Emulation tricks other systems into believing that the device is really some other emulated device. A example of emulation is to mimic the experience of running arcade games or console games on personal computers. In a networked environment, a computer acts as if it is another kind of computer or terminal. For example, a PC user opens a remote terminal session to a Unix, so it may run a program that emulates an Unix terminal."
452
:
"Emulation Mode - Emulation Mode is an operational state of a computer when it is running a foreign program under emulation. For example, a PC user opens a remote terminal session to a Unix, and it may run a program that emulates an Unix terminal."
453
:
"Emulator - Emulator is a software or hardware device with emulation program to imitate another program or device. A software emulator allows computer programs to run on a platform (computer architecture and/or operating system) other than the one for which they were originally written. A hardware emulator is an emulator which takes the form of a hardware device. Examples include printer emulators inside the ROM of the printer, and FPGA-based emulators."
454
:
"Enterprise Software - Enterprise Software is a type of software that solves an enterprise wide problem (rather than a departmental problem) and usually enterprise software is written using Enterprise Software Architecture. Due to the cost of building what is often proprietary software only large organizations attempt to build software that models the entire business enterprise and is the core system of governing the enterprise and the core of business communications within the enterprise. Enterprise software is often categorized by the business function that it automates - such as accounting software, human resource management or sales force automation software. It also varies by industry verticals due to common business processes within a specific industry. There are enterprise systems devised for health care, for example, or for manufacturing enterprises."
455
:
"Enterprise Software Architecture - Enterprise Software Architecture, also known as Enterprise Architecture, is the practice of applying a comprehensive and rigorous method for describing a current and/or future structure and behaviour for an organization's processes, information systems, personnel and organizational sub-units, so that they align with the organization's core goals and strategic direction. Although often associated strictly with information technology, it relates more broadly to the practice of business optimization in that it addresses business architecture, performance management and process architecture as well."
456
:
"Entropy - Entropy, a concept in physics, is a measrue of disorder or randomness of a system. In data compression, it is a measure of the amount of non-redundant and non-compressible data in an object (the amount that is not similar). In encryption, it is the amount of disorder or randomness that is added. In software, it is the disorder and jumble of its logic, which occurs after the program has been modified over and over."
457
:
"ESC/Java: Extended Static Checker for Java - Extended Static Checker for Java (ESC/Java) is a Compaq (now part of HP) programming tool that attempts to find common run-time errors in Java programs by static analysis of the program text. Users can control the amount and kinds of checking by annotating their programs with specially formatted comments or pragmas."
458
:
"Etnus TotalView - Etnus TotalView is a debugger for Unix-like and Mac OS X systems and supports C/C++ and Fortran. It allows process control down to the single thread, the ability to look at data for a single thread or all threads at the same time, and the ability to synchronize threads through breakpoints. TotalView integrates memory leak detection and other heap memory debugging features. Data analysis features help find anomalies and problems in the target program's data, and the combination of visualization and evaluation points let the user watch data change as the program executes."
459
:
"Evaluation Strategy - An evaluation strategy (or reduction strategy) for a programming language is a set of (usually deterministic) rules for defining the evaluation of expressions under Î²-reduction. Emphasis is typically placed on functions or operators â€” an evaluation strategy defines when and in what order the arguments to a function are evaluated, when they are substituted into the function, and what form that substitution takes. A language may combine several evaluation strategies; for example, C++ combines call-by-value with call-by-reference. Most languages that are predominantly strict use some form of non-strict evaluation for boolean expressions and if-statements."
460
:
"Exec Shield - Exec Shield is a security patch for the Linux kernel that adds an NX bit to x86 CPUs. It was developed by Ingo Molnar of Red Hat, and is used as a part of Fedora Core 1, 2 and 3. Exec Shield attempts to flag data memory as non-executable and program memory as non-writeable. This suppresses many security exploits, such as those stemming from buffer overflows and other techniques relying on overwriting data and inserting code into those structures. Exec Shield also supplies some address space layout randomization for the mmap() and heap base."
461
:
"Extended ASCII - Extended ASCII, also known as high ASCII, is a set of codes using 8 bits for each character, instead of 7 bits as the basic ASCII set. The basic ASCII set provides it a total of 128 unique symbols. The extended ASCII character set gives it an additional 128 characters. The extra characters represent characters from foreign languages and special symbols for drawing pictures."
462
:
"EXtensible Markup Language (XML) - Extensible Markup Language (XML), a subset of SGML, defines a syntax that lets you create markup languages to specify information structures. Information structures define the type of information, for example, subscriber name or address, not how the information looks (bold, italic, and so on). External processes can manipulate these information structures and publish them in a variety of formats. Text markup language designed to enable the use of SGML on the World Wide Web. XML allows you to define your own customized markup language. XML tags are not predefined. You must define your own tags. XML uses a Document Type Definition (DTD) or an XML Schema to describe the data. XML is not a replacement for HTML. Actually, XML and HTML are complimentary to each other."
463
:
"External Command - In DOS and OS/2, external command is a function performed by a separate utility program that accompanies the operating system. Contrast with internal command."
464
:
"Extreme Programming - Extreme Programming (XP) is a software engineering methodology developed by Kent Beck, the most prominent of several agile software development methodologies. It prescribes a set of day-to-day practices for developers and managers; the practices are meant to embody and encourage particular values. Extreme Programming is effectively used with small teams of developers who need to develop software quickly in an environment of rapidly-changing requirements."
465
:
"EZ Publish - EZ publish is a popular enterprise open source (under the GNU GPL license) content management system (CMS) and development framework, developed, distributed, and supported by eZ systems with input and help from an active user and developer community. While the development has not forked, there also exists a modified version called "edition pieserver"."
466
:
"FAB: FORTRAN Assembly Program - FORTRAN Assembly Program (FAP) was a macro FORTRAN assembler for the IBM 709, 7090, and 7094 computers of the 1950s and 60s."
467
:
"FASM: Flat Assembler - Flat Assembler(FASM) is a free, multiple-pass, Intel-style assembler supporting the IA-32 and x86-64 architectures. FASM is written in assembly language, comes with full source. The project was started in 1999 by Tomasz Grysztar.Â  It is noted for its fast speed, size optimizations, portability, powerful macro capabilities, and online forum community. However, it uses (almost) no command-line options. Binaries/sources are available for Linux, Windows (w/ IDE), DOS, OpenBSD etc., MenuetOS, OctaOS, and Dex4u. FASM contains bindings to the Windows GUI and OpenGL. All versions of FASM can directly output any of the following: flat binary, ELF or COFF (classic or MS) objects, or executables in either MZ, ELF or PE format. An unofficial port targeting the ARM architecture (FASMARM) exists."
468
:
"FAST: Federation Against Software Theft - Federation Against Software Theft(FAST) is a non-profit organisation, formed in 1984 by the software industry with the aim of eradicating software theft in the UK. In addition to prosecuting organisations and individuals for software theft, FAST set up a campaign of public education and awareness to ensure that users of commercial software understand the effects of software theft. FAST gives a member organisation, which has signed a Code of Ethics and is committed to the carrying out of a regular software audit, a period of grace before bringing action if there is evidence of irregularities by the member organisation."
469
:
"FastCAD - FastCAD is a 2D and 3D Computer Aided Design (CAD) program for Windows, which uses FCW as the file extension. It includes 3d modeling and rendering, symbol definition editing, and advanced capabilities for working with multiple drawings and overlays. FastCAD is written in assembler and will run well on basic hardware."
470
:
"FAT: File Allocation Table - File Allocation Table (FAT) is file system developed by Microsoft for MS-DOS and is the primary file system for consumer versions of Microsoft Windows up to Windows Me. The FAT file system is an ideal format for floppy disks and solid-state memory cards, and a convenient way of sharing data between disparate operating systems installed on the same computer (a dual boot environment). FAT is replaced by New Technology File System (NTFS) since the release of Windows NT."
471
:
"Fat Binary - A fat binary, also known as multiarchitecture binary, is a computer program that is native to multiple instruction set architectures (ISA) and thus can be run on multiple processor types. The usual method of implementation is to include a version of the machine code for each ISA, resulting in a file n times larger than a normal one-architecture binary."
472
:
"Fetch-and-add CPU instruction - Fetch-and-add CPU instruction is a special instruction that automatically modifies the contents of a memory location. It is used to implement Mutual exclusion and concurrent algorithms in multiprocessor systems."
473
:
"Fibonacci Number Program - Fibonacci number program is a popular program in many beginning computer science courses, introducing the concept of recursion by calculating and printing the Fibonacci numbers. In general, however, a recursive algorithm to compute Fibonacci numbers is extremely inefficient when compared to other algorithms, such as iterative or matrix equation algorithms."
474
:
"Fibonacci Numbers - In mathematics, the Fibonacci numbers is a sequence of numbers defined recursively by the Fibonacci rule: after two starting values, each number is the sum of the two numbers before it. For example, the first Fibonacci numbers for n = 0, 1, 2, 3, are - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946"
475
:
"Fifth-Generation Programming Language - Fifth-generation programming language (5GL) is a programming language based around solving problems using constraints given to the program, rather than using an algorithm written by a programmer. Most constraint-based and logic programming languages and some declarative languages are fifth-generation languages. Fifth-generation languages are used mainly in artificial intelligence research. Prolog, OPS5, and Mercury are the best known fifth-generation languages."
476
:
"FileMaker Pro - FileMaker Pro is a desktop-based relational database management system from FileMaker Inc., similar to Microsoft Access. FileMaker was one of a handful of database applications released on the Apple Macintosh in the 1980s."
477
:
"Filename Extension - Filename extension is a portion of a filename, following the point after the individual file name. Filename extenson indicates the type of data stored in the file. Many operating systems use filename extensions, e.g. Unix,MS-DOS. Examples include "c" for C source code, "doc" for Miscrosft word, "ps" for PostScript, "txt" for text fle, etc."
478
:
"Fiora - Fiora was a Computer role-playing game originally inspired by various bots floating around IRC's EsperNet servers. It took many elements from Tactics Ogre, and derived its turn system from different aspects of James "Iyouboushi's" Kaiou bot and Craig's Future bot."
479
:
"FireFox - Firefox, also known as Mozilla Firefox, is a free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers. Firefox includes an integrated pop-up blocker, tabbed browsing, live bookmarks, support for open standards, and an extension mechanism for adding functionality. Although other browsers have some of these features, Firefox became the first such browser to include them all and achieve wide adoption."
480
:
"Firmware - Firmware is software that is embedded in a hardware device. It is often provided on flash ROMs or as a binary image file that can be uploaded onto existing hardware by a user. The firmware typically implements a portion of the network protocols, security mechanisms and administrative capabilities of the hardware device."
481
:
"First Generation Programming Language - First-generation programming language(1GL) is a machine-level programming language, which was written in 1s and 0s. There is no compiler or translator required and it can be understood and used by a CPU directly. The code using 1GL can run very fast and efficiently since it is directly executed by the CPU. However, machine language is somewhat more difficult to learn than higher generational programming languages, and it is far more difficult to edit if errors occur. Furthermore code portability is significantly reduced in the 1GL based code. First-generation programming language is mainly used now on very ancient computers. Machine level programming still finds a use in several areas of modern programming with the help of native-code compilers which creates machine language, usually from a higher-level language."
482
:
"FLAC: Free Lossless Audio Codec - Free Lossless Audio Codec (FLAC) is a popular free audio compression codec that is lossless. Unlike lossy codecs such as MP3 and AAC, it does not remove any information from the audio stream and is suitable both for everyday playback and for archiving audio collections. "Free" means that the specification of the stream format can be implemented by anyone without prior permission, and that neither the FLAC format nor any of the implemented encoding/decoding methods is covered by any patent. The sources for libFLAC and libFLAC++ are available under Xiph.org's BSD license and the sources for flac, metaflac, and the plugins are available under the GPL."
483
:
"Flex Lexical Analyser Generator - The Flex lexical analyser generator (Flex) is a free software alternative to Lex. Flex is a tool for generating scanners: programs which recognized lexical patterns in text. Flex reads the given input files, or its standard input if no file names are given, for a description of a scanner to generate.Â "
484
:
"FMV: Full Motion Video - Full motion video (FMV) is a popular term for pre-recorded TV-quality movie or animation in a video game. FMV is simply a playback of something that was previously recorded. With modern computer hardware, games are rendered at much higher resolutions than typical FMVs, resulting in FMVs being easily spottable as "lower quality" than the game itself. In this case, while a pre-rendered FMV may use more advanced effects than possible in-game, it is considered lower quality due to being seen at a lower resolution."
485
:
"FOP: Formatting Objects Processor - Formatting Objects Processor(FOP) is an XSL-FO processor written in Java, which provides the feature to convert XSL-FO files to PDF or direct-printable-files. FOP was originally developed by James Tauber who donated it to the Apache Software Foundation in 1999. It is part of the Apache XML project."
486
:
"FORTRAN - FORTRAN is the oldest high-level programming language, designed by John Backus for IBM in the late 1950s. FORTRAN is a general-purpose, procedural, imperative programming language that is especially suited to numeric computation and scientific computing. It is still in use today, particularly for scientific applications that require extensive mathematical computations. The two most common versions of FORTRAN are FORTRAN IV and FORTRAN 77. A new ISO and ANSI standard for FORTRAN, called FORTRAN-90, was developed in the early 90s."
487
:
"Forward Compatible - Forward compatible, also known as upward compatible, refers to software that runs not only on the computer for which it was designed, but also on newer and more powerful models. Forward compatibility is important because it means you can move to a newer, larger, and more sophisticated computer without converting your data. An example of upward/forward compatibility is the specification that a web browser ignore HTML tags not recognised. Ignoring data or application instructions not recognized is the typical behavior of forward compatible systems."
488
:
"Fourier Transform - The Fourier Transform, named after Joseph Fourier, is an integral transform that re-expresses a function in terms of sinusoidal basis functions, i.e. as a sum or integral of sinusoidal functions multiplied by some coefficients ("amplitudes"). Fourier Transform technique is used to evaluate the importance of various frequency cycles in a time series pattern."
489
:
"Fourth-Generation Language - A fourth-generation programming language (4GL) is a programming language closer to human languages than typical high-level programming languages. Such languages arose after the introduction of modern, block-structured third-generation programming languages, which improved the process of software development. Most 4GLs are used to access databases. For example, a typical 4GL command is FIND ALL RECORDS WHERE COMPANY IS "JAVVIN"."
490
:
"FPA: Function Point Analysis - Function point analysis (FPA) is a method used to gauge the size and complexity of computer software, employing a function point as a unit of measure. Function points are a unit measure for software size, much like an hour is to measure time."
491
:
"Free Software - Free software, according to the definition of the Free Software Foundation (FSF), refers to the software that everyone is free to copy, redistribute and modify. That implies that it must be available as source code. It does not imply that it is free of charge, so anyone can sell free software so long as they don't impose any new restrictions on its redistribution or use."
492
:
"Free Software License - Free software license refers to a license which grants permissions to the recipient to remove any ownership issues which would otherwise prevent the software from being free software. With free software license, recipients of the software is granted the freedom to modify and redistribute the software by the copyright holder."
493
:
"FreeBASIC - FreeBASIC is an open source (under GPL) 32-bit, BASIC programming language compiler. It is designed to be syntax compatible with QuickBASIC, while expanding on the language and capabilities. It compiles for DOS, Microsoft Windows and Linux, and is being ported to other platforms."
494
:
"FreeBSD - FreeBSD is a Unix-like free operating system descended from AT&T UNIX via the Berkeley Software Distribution (BSD) branch through the 386BSD and 4.4BSD operating systems. It runs on processors compatible with the Intel x86 family, as well as on many other processors such as AMD64 and PowerPC processors. It also runs on the PC-98 architecture. Support for the ARM and MIPS architectures is currently in development."
495
:
"FreeDoom - FreeDoom is a Doom WAD file intended to be used instead of the copyrighted file from the original Doom and Doom II. The idea is that since the source to Doom is released as open source you can combine the free game engine with the free WAD to create an entirely free game. This also makes it possible to use all user-made WADs that require the original (and copyrighted) WAD by replacing it."
496
:
"FreeSBIE - FreeSBIE is a LiveCD (LiveDistro) type of operating system that is able to load directly from a bootable CD without any installation process and without any hard disk. It is based on the FreeBSD operating system."
497
:
"FreeTDS - FreeTDS is a free open source programming library, that implements the Tabular Data Stream protocol. It can be used in place of Sybase's db-lib or ct-lib libraries. It also includes an ODBC library. It allows many open source applications such as Perl and PHP (or your own C or C++ program) to connect to Sybase ASE or Microsoft SQL Server."
498
:
"FrontPage - FrontPage is Microsoft HTML editor to be used to create large complex Web sites. FrontPage is a WYSIWYG (what-you-see-is-what-you-get) editor, meaning that you can create the Web page exactly as you want it to look on the screen, and the program adds the HTML source code necessary to make sure that the page looks right in a Web browser."
499
:
"FSF: Free Software Foundation - Free Software Foundation(FSF) is an organisation devoted to the creation and dissemination of free software, i.e. software that is free from licensing fees or restrictions on use. The Foundation's main work is supporting the GNU project with a basic belief that information is community property and all software source should be shared."
500
:
"FSM: Finite State Machine - A finite state machine (FSM) or finite automaton is a model of behavior composed of states, transitions and actions. A state stores information about the past, i.e. it reflects the input changes from the system start to the present moment. A transition indicates a state change and is described by a condition that would need to be fulfilled to enable the transition. An action is a description of an activity that is to be performed at a given moment. In addition to their use in modeling reactive systems, finite state automata are significant in many different areas, including linguistics, computer science, philosophy, biology, mathematics, and logic."
501
:
"FSML: Financial Services Markup Language - Financial Services Markup Language(FSML), a data description language based on the metalanguage Standard Generalized Markup Language (SGML), was developed to create financial documents for delivery over the Internet, including eCheck and their associated documentation. FSML is a set of markup symbols or codes that allows its users to define the individual items that compose a document, assemble items into larger document parts that take on a contextual meaning, and enable the screening of a document for digital signatures, endorsement, additions, or deletions."
502
:
"FTP Client - FTP client is a software installed on a workstation which uses the FTP protocol to connect to an FTP server to transfer files. Basic FTP clients are part of operating systems, including Windows, DOS, Linux and Unix. However, many enhanced clients are available typically as shareware/freeware for Windows and as free software for Unix-like systems. Many web browsers have built-in FTP clients as well. Commercial FTP clients also exist with high performance or advanced features."
503
:
"Functional Programming - Functional programming is a programming paradigm that conceives computation as the evaluation of mathematical functions and avoids state and mutable data. Functional programming emphasizes the application of functions, in contrast to imperative programming, which emphasizes changes in state and the execution of sequential commands. Functional programming is defined more by a set of common concerns and themes than any list of distinctions from other paradigms. Often considered important are higher-order and first-class functions, closures, and recursion. Other common features of functional programming languages are continuations, Hindley-Milner type inference systems, non-strict evaluation (including, but not limited to, "laziness"), and monads."
504
:
"Functional Programming Language - Functional programming languages, based on the functional programming paradigm, is a type of programming languages that consist of a set of (possibly recursive) function definitions and an expression whose value is output as the program's result. Functional programing languages are one kind of declarative language. They are based on the typed lambda calculus with constants. There are no side-effects to expression evaluation so an expression. Furthermore, an expression can always be replaced by its value without changing the overall result (referential transparency). Functional programming languages have largely been emphasized in academia rather than in commercial software development. Notable exceptions are Erlang (highly-concurrent telecom applications), J and K (financial analysis), and domain-specific programming languages like XSLT. Important influences on functional programming have been the lambda calculus, the APL programming language, the Lisp programming language, and more recently the Haskell programming language."
505
:
"GA: Global Arrays - The Global Arrays (GA) is a public domain toolkit that provides an efficient and portable shared-memory programming interface for distributed-memory computers. Unlike other shared-memory environments, the GA model exposes to the programmer the non-uniform memory access (NUMA) characteristics of the high performance computers and acknowledges that access to a remote portion of the shared data is slower than to the local portion. The locality information for the shared data is available, and a direct access to the local portions of shared data is provided. Global Arrays have been designed to complement rather than substitute for the message-passing programming model. The programmer is free to use both the shared-memory and message-passing paradigms in the same program, and to take advantage of existing message-passing software libraries. Global Arrays are compatible with the Message Passing Interface (MPI)."
506
:
"GAMS: General Algebraic Modeling System - The General Algebraic Modeling System (GAMS) is a high-level modeling system for mathematical programming problems. The program itself consists of a language compiler and a group of integrated solvers. Thus, GAMS is not a solver itself."
507
:
"Gas: GNU Assembler - GNU assembler (Gas) is the default GNU Compiler Collection (GCC) back-end and is used to compile Linux and other operating systems such as the GNU operating system. It is a part of the GNU Binutils package. It runs and assembles on and for a number of different architectures. Gas uses the AT&T assembler syntax, instead of the Intel syntax used in many other assemblers."
508
:
"GCA - In computing, GCA is a freeware compression utility created in 2000 by Shin-ichi Tsuruta. GCA is a compressed archive format. It has higher compression capabilities than ZIP, especially with binary files. The next generation of GCA is 'DGCA'."
509
:
"GCC: GNU Compiler Collection - The GNU Compiler Collection (GCC) is a set of programming language compilers produced by the GNU Project. It is free software distributed by the Free Software Foundation (FSF) under the GNU GPL and GNU LGPL, and is a key component of the GNU toolchain. It is the standard compiler for the free software Unix-like operating systems, and several proprietary operating systems, notably Apple Mac OS X. Originally named the GNU C Compiler, because it only handled the C programming language, GCC was later extended to compile C++, Objective-C, Java, Fortran, and Ada among others."
510
:
"GCJ: GNU Compiler for Java - The GNU Compiler for Java (GCJ) is a compiler for the Java programming language that is part of the GNU Compiler Collection (GCC). It can compile Java source code to either Java Virtual Machine bytecode, or directly to machine code for any of a number of CPU architectures. It can also compile class files containing bytecode or entire Java archives (JARs) containing such class files into machine code. Almost all of the runtime library used by GCJ come from the GNU Classpath project."
511
:
"GDB: GNU Debugger - GNU Debugger (GDB) is the standard debugger for the GNU software system. It is a portable debugger that runs on many Unix-like systems and works for many programming languages, including C, C++, and FORTRAN. Originally written by Richard Stallman in 1988, GDB is free software released under the GNU General Public License. GDB offers extensive facilities for tracing and altering the execution of computer programs."
512
:
"GDL: GNU Data Language - GNU Data Language(GDL) is a free IDL (Interactive Data Language) compatible incremental compiler. It runs existing IDL programs from the Research Systems Inc."
513
:
"GDM:Â  GNOME Display Manager - GNOME Display Manager(GDM) provides an alternate display manager for the X Window System. The X Window System by default uses the X display manager (XDM). However, resolving XDM configuration issues typically involves using the command line. GDM allows users to customize or troubleshoot settings without having to resort to a command line. Users can pick their session type on a per-login basis. GDM also features easy customisation with themes."
514
:
"Geeklog - Geeklog is Open-Source software that works as a Weblog, CMS or Web Portal. Geeklog is written in PHP and uses MySQL as a backend database. Geeklog allows you to create your own virtual community portal complete with user administration, story posting, customised look, comments, polls, calendar, web links, content syndication, and more."
515
:
"Generic Software - Generic Software, contrast with "custom software", refers to the ready-made software, traditionally shrink-wrapped but downloadable in today's market.Â "
516
:
"GeoGebra - GeoGebra is a free dynamic mathematics software that joins [[geometry[[, [[algebra[[ and [[calculus[[. It is developed for education in secondary schools by Markus Hohenwarter at the University of Salzburg."
517
:
"Geronimo Application Server - The Geronimo Application Server is an open source application server developed by the Apache Software Foundation, and it is under the Apache licence. The Geronimo application server has already met the Sun J2EE 1.4 Technology Compatibility Kit (TCK) since version 1.0 M4."
518
:
"gFTP - gFTP is a free/open source multithreaded FTP client. It is most used on Unix-like systems, but it can be used on Microsoft Windows and Mac OS X. It includes both a GUI (which utilizes the GTK+) and a command-line interface. gFTP is released under the terms of the GPL and has been translated into 41 languages."
519
:
"GHC: Glasgow Haskell Compiler - Glasgow Haskell Compiler (GHC), also known as Glorious Haskell Compiler, is an open source native code compiler for the functional programming language Haskell which was developed at the University of Glasgow."
520
:
"Ghost: General Hardware-Oriented Software Transfer - General Hardware-Oriented Software Transfer (Ghost) is a disk cloning program, originally produced by Binary Research, but purchased by Symantec in 1998. The Ghost program launched the market for disk-cloning software."
521
:
"GIFT: GNU Image Finding Tool - GNU Image Finding Tool (GIFT) is a Content Based Image Retrieval System (CBIRS). The GIFT is based on Viper, the result of a research effort at the Vision Group at the computer science center of the University of Geneva. The GIFT is an open framework for content-based image retrieval. It is designed to accommodate new ways of querying the framework. The protocol for client-server communication, MRML, is XML based and fully documented. This aims to promote code reuse among researchers and application developers."
522
:
"GIMP: GNU Image Manipulation Program - GNU Image Manipulation Program (GIMP) is a bitmap graphics editor, a program for creating and processing raster graphics. It also has some support for vector graphics. The project was started in 1995 by Spencer Kimball and Peter Mattis and is now maintained by a group of volunteers; it is licensed under the GNU General Public License."
523
:
"glibc: GNU C Library - The GNU C Library (glibc) is GNU's C standard library, a free software package available under the GNU Lesser General Public License. Glibc is used in systems which run many different kernels and different hardware architectures. Its most common use is in Linux systems on x86 hardware, but officially supported hardware includes: x86, Motorola 680x0, DEC Alpha, PowerPC, ARM, ETRAX CRIS, MIPS, s390, and SPARC.Â "
524
:
"GLPK: GNU Linear Programming Kit - The GNU Linear Programming Kit (GLPK) is a software package intended for solving large-scale linear programming (LP), mixed integer programming (MIP), and other related problems. It is a set of routines written in ANSI C and organized in the form of a callable library. The package is part of the GNU Project, which is released under the GNU General Public License."
525
:
"Glueware - Glueware is a type of software that can be used to "glue" or integrate systems, software components and databases together, to form a seamless integrated system."
526
:
"Gmail Drive - Gmail Drive, a free shell namespace extension ("add-on") for Microsoft Windows Explorer, makes it possible to create a new network share on the workstation. In order to use this add-on, you need a Gmail account from Google Gmail. The add-on enables you to use the normal Windows desktop file copy and paste commands to transfer files to and from your Gmail account just as if it was physically located on your local network."
527
:
"GML: Generalized Markup Language - Generalized Markup Language (GML) is a set of macros (tags) for the IBM text formatter, "SCRIPT". SCRIPT is the main component of IBM's Document Composition Facility (DCF). GML simplifies the description of a document in terms of its format, organization structure and content parts and their relationship, and other properties. GML markup (or tags) describe such parts as chapters, important sections, and less important sections (by specifying heading levels), paragraphs, lists, tables, and so forth. Using GML, a document is marked up with tags that define what the text is, in terms of paragraphs, headers, lists, tables, and so forth. The document can then be automatically formatted for various devices simply by specifying a profile for the device. For example, it is possible to format a document for a laser printer or a line (dot matrix) printer or for a screen simply by specifying a profile for the device without changing the document itself."
528
:
"GNAT: GNU NYU Ada Translator - GNU NYU Ada Translator (GNAT) is the GNU Ada Compiler based on GNU Compiler Collection (GCC). The front-end and runtime are written in Ada, and are licensed using the General Public License."
529
:
"GNAVI - GNAVI is an open source visual software development environment licensed under the GPL. The language foundation of GNAVI is the international standard of engineering, Ada. GNAVI for Microsoft Windows offers comparable features to Delphi and Visual Basic including use of Active X controls and the ability to interface with .NET and Java."
530
:
"GNOME:  GNU Network Object Model Environment - GNU Network Object Model Environment (GNOME) project is an international effort to create an easy-to-use computer desktop environment built entirely from software considered free by the Free Software Foundation."
531
:
"GNU Arch - GNU arch is a software revision control system that is part of the GNU Project and licensed under the GNU General Public License. It is used to keep track of the changes made to a source tree and to help programmers combine and otherwise manipulate changes made by multiple people or at different times. GNU arch is decentralized, removing the need for a central server for which developers have to be authorized in order to contribute."
532
:
"GNU Aspell - GNU Aspell (Aspell) is the standard spelling checker software for the GNU software system designed to replace Ispell. It also compiles for other Unix-like operating systems and Microsoft Windows. The main program is licensed under the GNU Lesser General Public License, the documentation under GNU Free Documentation Licence. Dictionaries for it are available for about 70 languages."
533
:
"GNU Build System - The GNU build system, a part of GNU toolchain, is a suite of tools produced by the GNU project that assist in making packages portable to many UNIX-like systems."
534
:
"GNU General Public License - GNU General Public License (GNU GPL) also known as General Public License (GPL) is a widely used free software license, originally written by Richard Stallman for the GNU project. The GNU Project was launched in 1984 to develop a complete UNIX style operating system which is free software: the GNU system. The latest version of the license, version 2, was released in 1991. The GNU Lesser General Public License (LGPL) is a modified version of the GPL, intended for some software libraries."
535
:
"GNU Hurd - The GNU Hurd is a component of the core of the GNU operating system distributed as free software under the GPL. It is a set of servers (or daemons, in Unix-speak) that work on top of GNU Mach or the L4 microkernel. The Hurd aims to surpass Unix kernels in functionality, security, and stability, while remaining largely compatible with them. This is done by having the Hurd track the POSIX specification, while avoiding arbitrary restrictions on the user."
536
:
"GNU Mach - GNU Mach, an implementation of the Mach microkernel, is the default microkernel in the GNU Hurd kernel of the GNU operating system. GNU Mach runs on IA-32 machines, and is expected to be ported to other computers. Mach is particularly well suited for SMP and network cluster techniques. Thread support is provided at the kernel level, and the kernel itself takes advantage of that. Network transparency at the IPC level makes resources of the system available across machine boundaries. GNU Mach is maintained by developers on the GNU project and distributed under GNU General Public License (GPL)."
537
:
"GNU MDK: GNU MIX Development Kit - The GNU MIX Development Kit(GNU MDK) is a software package for developing, running and debugging programs written in MIXAL, an assembly-like language for programming a fictional computer called MIX. It is a free package distributed under GNU General Public License (GPL)."
538
:
"GNU Readline - GNU readline is a software library created and maintained by the GNU project. It provides line-editing capabilities. For instance, in a readline-enabled application, pressing C-b (CTRL-B) moves the cursor back one space, whereas C-f moves the cursor forward one space; C-r searches in history; these key bindings (which are the default, although bindings like vi's are optional) are taken from one of GNU's earliest and most popular projects, the text editor Emacs. Readline supports a variety of advanced features, including a kill ring (a more flexible version of a copy/paste clipboard) and tab completion. As a cross-platform library, readline allows many applications on various systems to exhibit identical line-editing behavior. It is a free package distributed under GNU General Public License (GPL)."
539
:
"GNU Robots - GNU Robots is a computer game for programmers. The goal is to guide a robot simulation around a maze, consuming food, avoiding baddies, and collecting as many prizes as possible in the process. However, the player cannot control the robot once the game begins; the robot acts according to a Scheme script previously written by the player. It is a free package distributed under GNU General Public License (GPL)."
540
:
"GNU Savannah - GNU Savannah is a project of the Free Software Foundation, which serves as a collaborative software development management system for Free Software projects. Savannah currently offers CVS, mailing list, web hosting, file hosting, and bug tracking services. It is a free package distributed under GNU General Public License (GPL)."
541
:
"GNU Screen - GNU Screen is a GNU fullscreen console multiplexer which permits a user to multiplex one terminal into multiple terminals. Thus screen allows the user to perform several additional tasks over a normal terminal. It is a free package distributed under GNU General Public License (GPL)."
542
:
"GNU TEXMACS - GNU TEXMACS, alternatively called TeXmacs, is a free scientific word processor component of the GNU project, which was inspired by both TeX and GNU Emacs. The program allows you to write structured documents via a user-friendly WYSIWYG interface. New styles may be created by the user. The program implements high-quality typesetting algorithms and TeX fonts, which help the user to produce professional looking documents."
543
:
"GNU Toolchain - The GNU toolchain refers to a collection of the programming tools produced by the GNU project. These tools form an integrated system that is used for programming both applications and operating systems. Parts of the toolchain are also widely used in the Solaris Operating Environment (which, in the opinion of many, needs the GNU tools for reasonable usability) and Microsoft Windows programming with Cygwin and MinGW/MSYS. Projects that are included in the GNU toolchain: - GNU make - build and compilation automation - The GNU Compiler Collection (GCC) - compilers for several languages - The GNU Binutils - linker, assembler and other tools - The GNU Debugger (GDB) - an interactive debugger - The GNU build system (autotools) - Autoconf, Autoheader, Automake, Libtool - makefiles generatorsÂ "
544
:
"GNU/kFreeBSD - GNU/kFreeBSD is an operating system that uses the kernel of FreeBSD in conjunction with GNU userland software. Currently, the following distributions of GNU/kFreeBSD are available: Debian GNU/kFreeBSD, Gentoo/FreeBSD. It should be noted that the k in kFreeBSD refers to the fact that only the kernel of the FreeBSD operating system is used."
545
:
"GNU/Linux - GNU/Linux, simply called Linux in most cases, refers to all the variants GNU operating systems using the Linux kernel."
546
:
"GNU/NetBSD - GNU/NetBSD is a term for an operating system using the NetBSD kernel but GNU userland software, like Debian GNU/NetBSD, a Debian version currently available for IA-32 and Alpha architectures."
547
:
"GNU: Gnu's Not UNIX - GNU, a recursive acronym for â€œGNU's Not UNIX, is a project sponsored by the Free Software Foundation that develops and maintains a complete free UNIX like software environment including operating system kernel and utilities, editor, compiler and debugger. Variants of the GNU operating system, which use the kernel Linux, are now widely used; though these systems are often referred to as Linux, they are more accurately called GNU/Linux systems."
548
:
"GNUstep - GNUstep is a free software implementation of NeXT's OpenStep Objective-C libraries (called frameworks), widget toolkit, and application development tools not only for Unix-like operating systems, but also for Microsoft Windows. It is part of the GNU project."
549
:
"Goto - Goto, also spelled as "go to", "GO TO", "GOTO", is a construct and keyword found in several higher-level programming languages (e.g. Fortran, COBOL, BASIC, C) to cause an unconditional jump or transfer of control from one point in a program to another. The destination of the jump is usually indicated by a parameter after the command."
550
:
"GPL: General Public License - General Public License(GPL) is a free license type applied to most software from the Free Software Foundation(FSF) and the GNU project and other authors who choose to use it. The normal licences as defined by the copyright law are designed to prevent users from sharing or changing it. By contrast, the General Public License is intended to provide the freedom to share and change software - to make sure the software including source code is open and free for all its users, distributors and modifiers (as long as the changes are clearly marked, the derivative work is not sold and is also licensed under the GPL.)"
551
:
"GPL: General Purpose Language - General Purpose Language(GPL), also known as general purpose programming language, is a programming language that can be used for any purposes. Examples of DSLs include C, C++, BASIC, FORTRAN, etc."
552
:
"GPS: GNAT Programming Studio - GNAT Programming Studio (GPS), formerly known as the GNAT Programming System, is a free multi-language IDE for GNU/Linux, MS Windows and Solaris/Sparc. GPS uses GTK+ as graphical user interface. This IDE is released by AdaCore under the GNAT Modified General Public License."
553
:
"Greenware - Greenware is a software license which provides an end user with the right to use a particular program or obtain the source code, if he makes an effort to help out the environment such as using only recycled computer paper, recycling the computer paper after using it, using public transport, etc."
554
:
"Greyware - Greyware refers to a malicious software or code that is considered to fall in the "grey area" between normal software and a virus. Greyware is a term for which all other malicious or annoying software such as adware, spyware, trackware, and other malicious code and malicious shareware fall under."
555
:
"Groupware - Groupware, also known as Collaborative software, is a type of computer software or computer-based systems that support groups of people engaged in a common task (or goal) and that provide an interface to a shared environment. It is the basis for computer supported cooperative work. Such software systems as mail, calendaring, chat, wiki belong into this category."
556
:
"GSL: GNU Scientific Library - GNU Scientific Library (GSL) is a software library written in the C programming language for numerical calculations in applied mathematics and science. The GSL is part of the GNU project and is distributed under the GNU GPL."
557
:
"GTK+: GIMP Toolkit - GIMP Toolkit (GTK+), licensed under the LGPL as a free (and open source) software, is one of the two most popular widget toolkits for the X Window System, intended for creating graphical user interfaces. GTK+ and Qt have supplanted Motif, previously the most widely-used X widget toolkit. GTK+ uses the C programming language, although its designers use an object-oriented paradigm. The GNOME platform bindings provide for C++ (gtkmm), Perl, Ruby, Java and Python (PyGTK) bindings; others have written bindings for many other programming languages (including Ada, D, Haskell, Pascal, PHP, and all .NET programming languages)."
558
:
"GTK-Qt - The GTK-Qt Theme Engine is a project allowing GTK to use Qt widget styles. It behaves like a normal GTK theme engine, but calls functions from Qt instead of doing the drawing itself."
559
:
"GUI: Graphical User Interface - A graphical user interface (GUI) is a method of human interacting with a computer through direct manipulation of graphical images and widgets in addition to text. A program with a GUI runs under some windowing system (e.g. The X Window System, Apple Macintosh, Microsoft Windows, Acorn RISC OS, NEXTSTEP). The program displays certain icons, buttons, dialogue boxes etc. in its windows on the screen and the user controls it mainly by moving a pointer on the screen (typically controlled by a mouse) and selecting certain objects by pressing buttons on the mouse while the pointer is pointing at them."
560
:
"Guiltware - Guiltware refers to the kind of shareware software that attempts to make the user register and pay for the software by exploiting the user's sense of guilt. For example, when people are using a un-registered version software, on-screen messages are displayed, usually when the program is started, reminding users that they have an unregistered version of the program that they should pay for if they intend to continue using it. Some programs will also display the message at random intervals while the program is in use."
561
:
"GVN: Global value numbering - Global value numbering (GVN) is a compiler optimization based on the SSA intermediate representation. It sometimes helps eliminate redundant code that common subexpression evaluation (CSE) does not. At the same time, however, CSE may eliminate code that GVN does not, so both are often found in modern compilers. Global value numbering is distinct from local value numbering in that the value-number mappings hold across basic block boundaries as well, and different algorithms are used to compute the mappings."
562
:
"GW Basic - GW-BASIC was a dialect of BASIC developed by Microsoft from BASICA, originally for Compaq. It is compatible with Microsoft/IBM BASICA, but was disk based and did not require the resources of the ROM included on IBM's machines. It was bundled with MS-DOS operating systems on IBM PC compatibles by Microsoft. Like other early microcomputer versions of BASIC, GW-BASIC lacked many of the structures needed for structured programming such as local variables, and GW-BASIC programs executed relatively slowly, due to the fact that it was an interpreted programming language. It did have a large number of graphics commands."
563
:
"Gzip: GNU zip - GNU zip (gzip) is a GNU free software file compression program. It was created by Jean-loup Gailly and Mark Adler. gzip is based on the DEFLATE algorithm, which is a combination of LZ77 and Huffman coding. DEFLATE was intended as a replacement for LZW and other patent-encumbered data compression algorithms which, at the time, limited the usability of compress and other popular archivers. "gzip" is often also used to refer to the gzip file format."
564
:
"Handwriting Recognition - Handwriting recognition refers to a computer receiving handwritten input and intelligently recognize it to some characters. The image of the written text may be sensed "off line" from a piece of paper by optical scanning (optical character recognition). Alternatively, the movements of the pen tip may be sensed "on line", for example, by a pen-based computer screen surface."
565
:
"Haskell Programming Language - Haskell Programming Language, simply called Haskell in most cases, is a standardized pure functional programming language with non-strict semantics, named after the logician Haskell Curry. Haskell was designed by a committee from the functional programming community in April 1990. It features static polymorphic typing, higher-order functions, user-defined algebraic data types, and pattern-matching list comprehensions. Innovations include a class system, systematic operator overloading, a functional I/O system, functional arrays, and separate compilation."
566
:
"Helper Applications - Helper application is an external viewer program launched to display content retrieved using a web browser. These applications commonly let you see and hear video and audio files, as well as view specialized text files or virtual reality models. Windows Media Player, QuickTime, Shockwave, CosmoPlayer, and RealAudio are examples of helper applications. Another common term for these programs is "plug ins," because they supplement the capabilities of your browser, and only run when they are needed to display files."
567
:
"Heterogeneous System - Heterogeneous systems, in software context, refer to systems that have different aspects such as the interface, the implementation, the data, etc. Two systems in a family are heterogeneous to the extent that they are incompatible in some way. One may represent information differently or not include certain functionality or adopt different security policies. If everything between two systems are the same and interoperate, they are homogeneous. Federating or integrating homogeneous systems is presumably simpler than federating heterogeneous systems."
568
:
"Hex editor - Hex editor is a tool used to create and modify binary files."
569
:
"High-Level Language - High-level language, also known as high-level programming language, is a programming language that, in comparison to low-level programming languages, may be more abstract, easier to use, or more portable across platforms. Examples include languages such as C, FORTRAN, or Pascal that enables a programmer to write programs that are more or less independent of a particular type of computer."
570
:
"HLA: High Level Architecture - The High Level Architecture (HLA) is a general purpose architecture for distributed computer simulation systems. Using HLA, computer simulations can communicate to other computer simulations regardless of the computing platforms. Communication between simulations is managed by a runtime infrastructure (RTI)."
571
:
"HLA: High Level Assembly - High Level Assembly (HLA) is an assembly language developed by Randall Hyde which can use high level language constructs to aid x86 assembly programmer beginners and advanced assembly developers alike. It fully supports advanced data types and object-oriented assembly language programming. It uses a syntax loosely based on several high-level languages, such as C/C++, Ada, Modula-2, and Pascal, to allow the creation of readable assembly language programs, and to allow High-level language (HLL) programmers to learn HLA as rapidly as possible."
572
:
"HMP: Hybrid Multiprocessing - Hybrid multiprocessing(HMP) refers to a kind of multitasking which provides some elements of symmetric multiprocessing, using add-on IBM software called MP/2. IBM OS/2 supports HMP."
573
:
"Hoard Memory Allocator - The Hoard memory allocator, or Hoard, is a memory allocator for Linux, Solaris, Microsoft Windows and other operating systems. Hoard can improve the performance of multithreaded applications by providing fast, scalable memory management functions (malloc and free). In particular, it reduces contention for the heap (the central data structure used in dynamic memory allocation) caused when multiple threads allocate or free memory, and avoids the false sharing that can be introduced by memory allocators. At the same time, Hoard has low fragmentation."
574
:
"Homogeneous System - Homogeneous systems, in software context, refer to the systems if they have the same aspects like the same interface, the same implementation, that can interoperate, can share data, etc. Otherwise, they are heterogeneous, which may represent information differently or not include certain functionality or adopt different security policies. Federating or integrating homogeneous systems is presumably simpler than federating heterogeneous systems."
575
:
"Horizontal Software - Horizontal software, also known as horizontal application, refers to the kind of software used by many different kinds of organizations, such as word processing or bookkeeping software."
576
:
"HotHTML - HotHTML is a HTML editor and text editor rolled into one with a strong focus on web development, originally released as a freeware web coding tool (WYSIWYN)."
577
:
"HSQLDB - HSQLDB is a relational database management system written in Java. It is based on Thomas Mueller's discontinued Hypersonic SQL Project. The software is available under a BSD license. HSQLDB has a JDBC driver and supports a rich subset of SQL-92, SQL-99, and SQL:2003 standards. It offers a fast, small database engine which offers both in-memory and disk-based tables."
578
:
"HTML Editor - A HTML editor is an software application for creating web pages. Although the HTML markup of a web page can be written with any text editor, specialised HTML editors can offer convenience and added functionality. For example, many HTML editors can work not only with HTML, but also with related technologies such as CSS, XML and JavaScript or ECMAScript."
579
:
"HTML-Kit - HTML-Kit is an HTML editor for Microsoft Windows made by chami.com. It falls into the class of HTML editors that emphasize editing HTML code directly, although it does have built-in functionality for previewing code."
580
:
"Hydrogen Software - Hydrogen software is an advanced drum machine application originally developed for GNU/Linux but later ported to Windows and Mac OS X. Its main goal is to bring professional yet simple and intuitive pattern-based drum programming."
581
:
"HyperCard - HyperCard was an application program from Apple Computer in 1987. It most closely resembles a database application in concept, in that it stores information, and is graphical, flexible and creates files that are easy to modify. It also includes HyperTalk to manipulate data and the user interface. HyperCard users often used it as a programming system for Rapid Application Development as opposed to a database. The HyperCard model consists of cards, and collections of cards, called stacks. You can connect the cards in various ways, and leaf through them the way you would with a set of Rolodex cards. In addition to data, each card can contain graphics and buttons that trigger other events, such as sound or video."
582
:
"Hypermedia - Hypermedia, a logical extension of the term hypertext, allows graphics, audio, video, plain text and hyperlinks intertwine to create a generally non-linear medium of information. This contrasts with multimedia, which, although often capable of random access in terms of the physical medium, is essentially linear in nature. The World Wide Web is a classic example of hypermedia, whereas a movie on a DVD is an example of standard multimedia. The lines between the two can (and often do) blur depending on how a particular technological medium is implemented."
583
:
"HyperTalk - HyperTalk is a high-level programming language created in 1987 by Dan Winkler and used in conjunction with Apple Computer's HyperCard hypermedia program. The main target audience of HyperTalk was beginning programmers, hence HyperTalk programmers were usually called authors, and the process of writing programs was called "scripting". HyperTalk scripts are fairly similar to written English, and use a logic structure similar to the Pascal programming language."
584
:
"IBALANCE - iBALANCE is the specialized software that recieves the data from the various sensors and gyroscopes on the IBOT powered wheelchair mobility system, allowing the iBOT to maintain balance during certain maneuvers. for example during curb climbing the seat remains level while parts of the chassis tilt to climb the curb."
585
:
"IDE: Integrated Development Environment - Integrated development environment (IDE), also known as integrated design environment and integrated debugging environment, is a type of computer software that assists computer programmers to develop software. IDEs normally consist of a source code editor, a compiler and/or interpreter, build-automation tools, and (usually) a debugger. Sometimes a version control system and various tools to simplify the construction of a GUI are integrated as well. Many IDEs also integrate a class browser, an object inspector and a class hierarchy diagram, for use with object oriented software development. Although some multiple-language IDEs are in use, such as the Eclipse IDE, NetBeans or Microsoft Visual Studio, typically an IDE is devoted to a specific programming language, as in the Visual Basic IDE."
586
:
"I-DEAS: Integrated-Design Engineering Analysis Software - Integrated-Design Engineering Analysis Software (I-DEAS) was a CAD/CAM software package of SDRC which was bought in 2002 by EDS and now merged into UGS's product NX (Unigraphics). I-DEAS also incorporates Finite Element Method solver for mechanical stress/strain, thermal analysis, and other FEM analysis techniques."
587
:
"IDMS: Integrated Database Management System - Integrated Database Management System(IDMS) is a (network) CODASYL database management system first developed at B.F. Goodrich and later marketed by Cullinane Database Systems (renamed Cullinet in 1983). Since 1989 the product has been owned by Computer Associates, who renamed it CA-IDMS."
588
:
"IEEE 829-1998 - IEEE 829-1998, also known as the 829 Standard for Software Test Documentation, is an IEEE standard that specifies the form of a set of documents for use in eight defined stages of software testing, each stage potentially producing its own separate type of document. The standard specifies the format of these documents but does not stipulate whether they all must be produced, nor does it include any criteria regarding adequate content for these documents."
589
:
"IGS: Interactive Geometry Software - Interactive geometry software (IGS) are computer programs which allow one to create and then manipulate geometric constructions, primary in plane geometry. One starts construction by putting a few points and using them to define new objects (lines, circles, other points, etc). After some construction is done, one can move the points one starts with and see how the construction changes."
590
:
"IIS: Internet Information Server - Internet Information Server (IIS), also known as Internet Information Service, is a Microsoft developed system that provides a set of Internet-based services for servers using Microsoft Windows. It is the world's second most popular web server in terms of overall websites behind the Apache HTTP Server although the gap is decreasing. IIS currently supports FTP, SMTP, NNTP and HTTP/HTTPS."
591
:
"IM: Identity Management - Identity Management (IM) is an integrated system of business processes, policies and technologies that enable organizations to facilitate and control their users' access to critical online applications and resources â€” while protecting confidential personal and business information from unauthorized users."
592
:
"ING: International Network of Crackers - International Network of Crackers (INC) was one of the premier cracking/releasing warez for the IBM PC during the very late 1980s and early 90s.The formation of INC was the result of the merger of several cracking groups, including Union, based out of Texas, and the Miami Cracking Machine (MCM), based out of Florida."
593
:
"Ingres - Ingres is a commercially supported, open-source relational database management system. Ingres was first created as a research project at the University of California, Berkeley starting in the early 1970s and ending in the early 1980s. The original code, like that from other projects at Berkeley, was available at minimal cost under a version of the BSD license. Since the mid-1980s, Ingres had spawned a number of commercial database applications, including Sybase, Microsoft SQL Server, NonStop SQL and a number of others. Ingres Corporation owns and provides support and services for Ingres, OpenROAD and the connectivity products. In February 2006, Ingres Corporation released Ingres 2006 under the GNU General Public Licence."
594
:
"INI File: Initialization File - An initialization file (INI file) is a configuration file that contains configuration data for Microsoft Windows based applications. Starting with Windows 95, the INI file format was superseded but not entirely replaced by a registry database in Microsoft operating systems. Although made popular by Windows, INI files can be used on any system thanks to their flexibility. They allow a program to store configuration data, which can then be easily parsed and changed."
595
:
"Inline Expansion - Inline expansion or inlining for short is a compiler optimization which "expands" a function call site into the actual implementation of the function which is called, rather than each call transferring control to a common piece of code. This reduces overhead associated with the function call, which is especially important for small and frequently called functions, and it helps call-site-specific compiler optimizations, especially constant propagation. The main drawback is that the expansion usually results in a larger binary code, which can actually hurt performance if it damages locality of reference or exceeds resource constraints."
596
:
"Instruction - In computer technologies, instruction, also known as computer instruction, refers to a basic command at the level of computer's machine language.Â  It is typically a single operation of a processor within a computer architecture."
597
:
"Instruction Scheduling - Instruction scheduling, in computer technologies, is a compiler optimization phase used to improve instruction-level parallelism, which improves performance on machines with instruction pipelines. Without changing the meaning of the instructions, instruction scheduling tries to: 1) avoid pipeline stalls by rearranging the order of instructions; 2) order the instructions to avoid duplicated memory access."
598
:
"Instruction Selection - Instruction selection is a compiler optimization that transforms an intermediate representation of a program into the final compiled code, either in binary or assembly format. It works by "covering" the intermediate representation with as few tiles as possible."
599
:
"Instruction Set - An instruction set, also known as instruction set architecture (ISA), is the part of the computer architecture related to programming, including the native data types, instructions, registers, addressing modes, memory architecture, interrupt and exception handling, and external I/O. An ISA includes a specification of the set of opcodes (machine language), the native commands implemented by a particular CPU design."
600
:
"Insure++ - Insure++ is a memory debugger computer program, used by software developers to detect various errors in programs written in C and C++. It is made by Parasoft, and is functionally similar to other memory debuggers, such as Purify and Valgrind."
601
:
"Integrated Software Package - Integrated software package refers to a suite of software with several applications integrated into one package. For example, a software package such as Microsoft Office that contains word processing, spreadsheet, database, graphics and communications. They are designed so that the user can move easily from one application to another, and transfer data easily from one application to another within the software package."
602
:
"Integration Testing - Integration testing, also known as system integration testing (SIT), is the phase of software testing in which individual software modules are combined and tested as a group. It follows unit testing and precedes system testing. Integration testing takes as its input modules that have been checked out by unit testing, groups them in larger aggregates, applies tests defined in an Integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing. The purpose of Integration testing is to verify functional, performance and reliability requirements placed on major design items."
603
:
"Intelligent Device Management - Intelligent Device Management is a term used for enterprise software applications that allow various equipment manufacturers to proactively monitor and manage remote equipment, systems and products via the Internet and provide instant and cost-effective service & support to their customers."
604
:
"IntelliJ IDEA - IntelliJ IDEA is a commercial Java IDE by JetBrains company. It includes a set of integrated refactoring tools that allow programmers to quickly redesign their code. A number of its features accelerate development and allow programmers to concentrate on functionality while IntelliJ IDEA handles more mundane coding tasks. Among other features, IntelliJ IDEA provides close integration with popular open source development tools such as CVS, Subversion, Apache Ant and JUnit."
605
:
"Interchangeability - In computer science, interchangeability is an ability that an object can be replaced by another object without affecting code using the object. That chance usually requires two objects share an interface that is either same strictly or compatible in particular case.Â "
606
:
"Interface - An interface, in computer programming, is a defined means for a system to communicate with other systems. It is a boundary between a system and its environment providing ways of providing the system inputs and receiving outputs. In Object Oriented programming, class definitions and method signatures provide interfaces. Application program interfaces (APIs) form the interface of a system to applications and often consist of collections of functions or commands in a scripting language. Interfaces may be hidden (available only to the system developer) or exposed (available to others)."
607
:
"Interface Encapsulation - An interface encapsulates refers to an implementation in a system in which the system implementation can be changed without changing the interface. With the interface encapsulation property, the changes in the system will not effect its way to communicate with other systems."
608
:
"Interface Standard - Interface standard refers to a standard in communications that defines one or more functional and/or physical characteristics necessary to allow the exchange of information between two or more systems or equipments. An interface standard may include operational specifications and acceptable levels of performance."
609
:
"Internal Command - Internal commands are executed by the command processor programs COMMAND.COM in DOS and CMD.EXE in OS/2. The command processor is always loaded when the operating system is loaded. In DOS and OS/2, a command, such as Copy, Dir and Rename, are internal commands which may be used at all times."
610
:
"Interpreter Program - An interpreter program is a computer program that executes an input program, while a compiler does not execute its input program (the source code) but only translates it into another language, usually executable machine code (also called object code) which is output to a file for later execution. People can execute the same source code either directly by an interpreter or by compiling it and then executing the machine code produced later. It takes longer to run a program under an interpreter than to run the compiled code but it can take less time to interpret it than the total time required to compile and run it. This is especially important when prototyping and testing code when an edit-interpret-debug cycle can often be much shorter than an edit-compile-run-debug cycle."
611
:
"Interprocedural Optimization - Interprocedural optimization is an integral component in a compilation systemÂ  to improve computing performance. The importance of interprocedural optimization stems from two sources: it increases the context available to the optimizing compiler, and it enables programmers to use procedure calls without the concern of hurting execution time."
612
:
"Inverse mapping - Inverse mapping is a procedure used to create associations between real or virtual objects that involves some type of reversal of another process or concept. Various types of inverse mapping are used in a wide range of mathematical applications."
613
:
"Iprism - IPrism is an Internet filter distributed by St. Bernard Software. It can monitor, block, and report on inappropriate Internet access."
614
:
"IR: Information Retrieval - Information retrieval (IR) is the science of searching for information in documents, searching for documents themselves, searching for metadata which describes documents, or searching within databases, whether relational stand-alone databases or hypertext networked databases such as the Internet or intranets, for text, sound, images or data. There is a common confusion, however, between data retrieval, document retrieval, information retrieval, and text retrieval, and each of these has their own bodies of literature, theory, praxis and technologies."
615
:
"IRC Bot: Internet Relay Chat Bot - Internet Relay Chat (IRC) bot is a set of scripts or an independent program that connects to Internet Relay Chat as a client, and so appears to other IRC users as another user. It differs from a regular client in that instead of providing interactive access to IRC for a human user, it performs automated functions. Often, an IRC bot is deployed as a detached program running from a stable host. It sits on an IRC channel to keep it open and prevents malicious users from taking over the channel. It can be configured to give channel operator status to privileged users when they join the channel, and can provide a unified channel operator list. An IRC bot can also perform many other useful functions, such as logging what happens in an IRC channel, giving out information on demand (very popular in IRC channels dealing with user support), creating statistics, hosting trivia games, and so on."
616
:
"ISA: Instruction Set Architecture - Instruction set architecture, also known as instruction set, is the part of the computer architecture related to programming, including the native data types, instructions, registers, addressing modes, memory architecture, interrupt and exception handling, and external I/O. An ISA includes a specification of the set of opcodes (machine language), the native commands implemented by a particular CPU design."
617
:
"IT Management: Information Technology Management - Information technology management (IT management), also called Management of Information Systems (MIS), is a combination of two branches: information technology and management. One implies the management of a collection of systems, infrastructure, and information that resides in them. Another implies the management of information technologies as a business function. This aims at achieving the goals and objectives of an organisation through computers."
618
:
"IT: Information Technology - Information Technology (IT) is a broad subject concerned with technology and other aspects of managing and processing information, especially in large organizations. In particular, IT deals with the use of electronic computers and computer software to convert, store, protect, process, transmit, and retrieve information. For that reason, computer professionals are often called IT specialists or Business Process Consultants, and the division of a company or university that deals with software technology is often called the IT department. Other names for the latter are information services (IS) or management information services (MIS), managed service providers (MSP)."
619
:
"ITS: Incompatible Time-Sharing System - Incompatible time-sharing System(ITS) is operating system written for the DEC PDP-6 and PDP-10 at MIT and long used at the MIT AI Lab. ITS pioneered many important innovations, including transparent file sharing between machines and terminal-independent I/O. After about 1982, most actual work was shifted to newer machines, with the remaining ITS boxes run essentially as a hobby and service to the hacker community."
620
:
"IZArc - IZArc is a freeware file archiver for Microsoft Windows. It handles a great variety of archive formats, including some of the commonly used ones like zip, rar, gzip, bzip2, and 7z.One distinguishing feature of IZArc is the ability to convert an archive from one format to another format."
621
:
"J2EE: Java 2 Platform, Enterprise Edition - Java 2 Platform, Enterprise Edition (J2EE), now called Java Platform, Enterprise Editor(Java EE), is a programming platformâ€”part of the Java Platformâ€”for developing and running distributed multitier architecture Java applications, based largely on modular software components running on an application server. The Java EE platform is defined by a specification. Similar to other Java Community Process specifications, Java EE is also considered informally to be a standard because providers must agree to certain conformance requirements in order to declare their products as Java EE compliant; albeit with no ISO or ECMA standard."
622
:
"JACK Audio Connection Kit - The JACK Audio Connection Kit (JACK) is a soundserver or daemon that provides low latency connections between so-called jackified applications. It is created by Paul Davis and others and licensed under the GPL. JACK is free audio software. It can use ALSA, PortAudio and (still experimental) OSS as its back-end. As of 2003 it runs on GNU / Linux and Mac OS X."
623
:
"JADE Programming Language - JADE is an object-oriented programming language that exhibits a seamlessly integrated object-oriented database management system. It is designed to be an end-to-end development environment, which allows systems to be coded in one language from the database server at one end down to the clients at the other."
624
:
"Jakarta Project - The Jakarta Project creates and maintains open source software for the Java platform. It operates as an umbrella project under the auspices of the Apache Software Foundation, and all of Jakarta products are released under the Apache License."
625
:
"Java - Java, in computer programming, is an object-oriented programming language developed by Sun Microsystems. It resembles C++, but was designed to avoid some of C++'s most notorious flaws. The Java language is used extensively on the World Wide Web, particularly because of its cross-platform nature, and its sandbox security concept."
626
:
"Java Beans - Java bean, in computer programming, is a portable, platform-independent means of creating reusable components. Created by Sun Microsystems, Java Beans is intended to be similar in functionality to OpenDOC, ActiveX, OLE, and COM."
627
:
"Java Bytecode - Java bytecode is the form of instructions that the Java virtual machine executes. Each bytecode instruction is one byte in length (hence the name), thus the number of bytecodes is limited to no more than 256. Not all 256 possible bytecode values are used, in fact Sun Microsystems, the original creators of the Java programming language, the Java virtual machine and other components of the Java Runtime Environment, have set aside a number of values to be permanently unimplemented. A Java programmer does not need to be aware of or understand Java bytecode at all. However, Understanding bytecode and what bytecode is likely to be generated by a Java compiler helps the Java programmer in the same way that knowledge of assembler helps the C or C++ programmer."
628
:
"Java EE: Java Platform, Enterprise Edition - Java Platform, Enterprise Editor(Java EE), formerly known as Java 2 Platform, Enterprise Edition (J2EE), is a programming platform part of the Java Platform for developing and running distributed multitier architecture Java applications, based largely on modular software components running on an application server. The Java EE platform is defined by a specification. Similar to other Java Community Process specifications, Java EE is also considered informally to be a standard because providers must agree to certain conformance requirements in order to declare their products as Java EE compliant; albeit with no ISO or ECMA standard."
629
:
"Java Programming Language - Java programming language, simply called Java in most cases, is an object-oriented programming language developed by James Gosling at Sun Microsystems 1995. Java borrows much syntax from C and C++ but has a simpler object model and fewer low-level facilities. Unlike conventional languages which are generally designed to be compiled to native code, Java is compiled to a bytecode which is then run (generally using JIT compilation) by a Java virtual machine. Java has been adopted as a multipurpose, cross-platform lingua franca for network computing, including the World Wide Web."
630
:
"JavaCC: Java Compiler Compiler - Java Compiler Compiler(JavaCC) is a parser generator for the Java programming language. JavaCC generates a parser for a grammar provided in extended Backusâ€“Naur form (EBNF) notation with the output as the Java source code."
631
:
"Javadoc - Javadoc is a computer software tool from Sun Microsystems for generating API documentation into HTML format from Java source code. Javadoc is the industry standard for documenting Java classes. Most integrated development environments (IDEs) will automatically generate Javadoc HTML."
632
:
"JavaScript - JavaScript is a scripting language developed by Netscape to enable Web authors to design interactive sites. Although it shares many of the features and structures of the full Java language, it was developed independently. Javascript can interact with HTML source code, enabling Web authors to spice up their sites with dynamic content. JavaScript is endorsed by a number of software companies and is an open language that anyone can use without purchasing a license."
633
:
"Jbuilder - JBuilder is a Java integrated development environment(IDE) from Borland. It has won several consecutive awards as the most powerful IDE for professional Java Programmming. Borland sells a variety of versions of JBuilder. There is even a free limited version for beginners of the Java language."
634
:
"JCP: Java Community Process - The Java Community Process (JCP), established in 1998, is a formalized process which allows interested parties to be involved in the definition of future versions and features of the Java platform. The JCP process involves the use of Java Specification Request (JSR), which are formal documents that describe proposed specifications and technologies to be added to the Java platform."
635
:
"JDBC: Java Database Connectivity - Java Database Connectivity(JDBC) is an API for the Java programming language that defines how a client may access a database. It provides methods for querying and updating data in a database. JDBC is oriented towards relational databases. The Java Platform, Standard Edition includes the JDBC API together with an ODBC implementation of the API enabling connections to any relational database that supports ODBC. This driver is native code and not Java, and is closed source."
636
:
"JHTML: Java HTML - Java HTML(JHTML) is a page authoring system developed at Art Technology Group (ATG). JHTML files have ".jhtml" filename extensions that contain standard HTML tags in addition to proprietary tags that reference Java objects running on a special server setup to handle requests for pages of this sort."
637
:
"JMS: Java Message Service - The Java Message Service (JMS) API is a Java Message Oriented Middleware (MOM) API for sending messages between two or more clients. JMS is a specification developed under the Java Community Process(JCP) as JSR 914. As of 2006, the current version is JMS 1.1."
638
:
"JMX: Java Management Extensions - Java Management Extensions (JMX) is a Java technology that supplies tools for managing and monitoring applications, system objects, devices (e.g. printers) and service oriented networks. An interesting detail of the API is that classes can be dynamically constructed and changed. JMX was defined by JSR 3 of the Java Community Process."
639
:
"JOGL:Â  Java OpenGL - Java OpenGL(JOGL) is an implementation of OpenGL in Java. A thin wrapper around native system calls, JOGL allows access to most features available to C programmers, with the notable exception of Window system related calls in GLUT. Where function pointers were used in the C version of OpenGL, JOGL provides this functionality by allowing classes to be exposed via Java interfaces."
640
:
"JOLIX - JOLIX, also known as 386BSD, is a free operating system produced from the BSD derived UNIX operating systems for the Intel 80386. 386BSD was originally derived from the generally available parts of the "Berkeley Net Release/2". All rights with respect to 386BSD and JOLIX are now held exclusively by William Jolitz and Lynne Jolitz. 386BSD public releases ended in 1997 since code is now available from the many 386BSD-derived operating systems today such as such as Apple's Darwin, OpenBSD, OpenSolaris, etc. 386BSD innovations include role-based security, ring buffers, self-ordered configuration, intuitive setup and installation, peer-to-peer download, and modular kernel design. 386BSD is often confused with BSD/386 which was developed by BSDi, a Berkeley spinout, starting in 1991."
641
:
"Joomla! - Joomla! is a free, open source content management system written with PHP for publishing content on the world wide web and intranets using a MySQL database. Joomla! includes features such as page caching to improve performance, web indexing, RSS feeds, printable versions of pages, news flashes, blogs, forums, polls, calendars, website searching, and language internationalization."
642
:
"JRT - JRT is an implementation of the computer programming language Pascal. It was available in the early 1980s on the CP/M operating system. JRT was a Pascal interpreter, that compiled down to its own pseudo-code totally separate from UCSD Pascal p-code."
643
:
"JSR: Java Specification Request - Java Specification Request (JSR) is the formal documents generated by the Java Community Process (JCP) that describe proposed specifications and technologies to be added to the Java platform. Formal public reviews of JSRs are conducted before the JSR becomes final and is voted on by the JCP Executive Committee. A final JSR provides a reference implementation which provides a free implementation of the technology in source code form and a Technology Compatibility Kit to verify the API specification. The Java Community Process (JCP), established in 1998, is a formalized process which allows interested parties to be involved in the definition of future versions and features of the Java platform."
644
:
"JSwat - JSwat is a standalone, graphical Java debugger front-end, written to use the Java Platform Debugger Architecture. JSwat is licensed under the GNU General Public License and it is freely available in both binary and source code form."
645
:
"JuK - JuK is an audio player for K Desktop Environment (KDE), part of the kdemultimedia package. JuK supports collections of MP3, Ogg Vorbis, and FLAC audio files. In addition to do music play, JuK is primarily an audio jukebox application, with a strong focus on management of music."
646
:
"Jump Command - Jump command is the term for a goto instruction, usually in a context of machine languages. "Branch" may be synonymous with "jump", or may refer to jumps that depend on a condition."
647
:
"Jump Threading - In computing, jump threading is a compiler optimization. In this pass, conditional jumps in the code that branch to identical or inverse tests are detected, and can be "threaded" through a second conditional test. This is easily done in a single pass through the program, following acyclic chained jumps until you arrive at a fixed point."
648
:
"JVM: Java Virtual Machine - A Java Virtual Machine (JVM), a crucial component of the Java Platform originally developed by Sun Microsystems, is a virtual machine that executes Java bytecode. This code is most often generated by Java language compilers, although the JVM has also been targeted by compilers of other languages. The availability of JVMs on many types of hardware and software platforms enables Java to function both as middleware and a platform in its own right. Different computers require different JVMs but they should run the same Java code. This means that servers only need to provide one version of each applet, instead of different 'native code' versions for PCs, Apple Macintoshes, and UNIX workstations, as is the case with other plug-ins."
649
:
"Kazaa Lite K++ - Kazaa Lite K++ is a later versions of Kazaa Lite included K++, which added a memory patcher that removed search limit restrictions, multi-source limits, and set one's "participation level" to the maximum of 1000. KaZaA Lite K++ has the ability to resume downloads, play files, block your IP address from the RIAA. Kazaa Lite K++ is obsolete and replaced by Kazaa Lite Resurrection (or simply Kaza Lite)."
650
:
"Kazaa Lite Resurrection - Kazaa Lite Resurrection, also known as Kazaa Lite, is a P2P file sharing client that supports the FastTrack P2P network. Kazaa Lite Resurrection is to continue the development forward on the now obsolete Kazaa Lite K++ application. Kazaa Lite Resurrection technology utilizes the core of Kazaa Media Desktop (KMD) and runs on Windows. Kazaa Lite Resurrection does not contain any adware or spyware. It also offers numerous improvements over KMD such as no bit-rate limits, expanded support for multi-source downloads, and additional P2P tools."
651
:
"Kazaa Lite Revolution - Kazaa Lite Revolution is an alternative, unauthorized FastTrack P2P network client. Kazaa Lite Revolution, instead of Kazaa Media Desktop, may be used to connect to FastTrack. Revolution is sometimes advertised as an improved version of KMD. Their appearance is similar, but Revolution removes all advertising and adds several new features and tools. Kazaa Lite Revolution is a different application from Kazaa Lite Resurrection."
652
:
"Kazaa or Kazzaa - Kazaa, also spelled as Kazzaa, is a free, peer-to-peer file sharing service over the Internet. To use Kazaa, a person downloads and installs a software client of Kazaa. Kazaa clients communicate with various registration servers, using Internet protocols, to identify files for sharing or download. The Kazaa P2P network holds peer registration information and then brokers connections between any two peer clients for file sharing."
653
:
"K-Lite: Kazaa Lite - Kazaa Lite, also known as K-Lite, is a peer-to-peer file-sharing computer program. Kazaa Lite is an unauthorized modification of the Kazaa Media Desktop application which excludes adware and spyware and provides slightly extended functionality. It became available in April, 2002. It can be downloaded free of charge, and, as of mid-2005, is almost as widely used as the official Kazaa client itself. It connects to the same FastTrack network and thus allows to exchange files with all Kazaa users"
654
:
"Karma - In the computer software context, Karma is the name of a software package to aid signal processing and image processing for scientific applications."
655
:
"KDbg - KDbg is an open-source graphical front-end for the GNU Debugger. KDbg is implemented using the K Desktop Environment (KDE) component architecture."
656
:
"KDE: K Desktop Environment - K Desktop Environment(KDE) is a free desktop environment and development platform built with Trolltech's Qt toolkit. It runs on most Unix and Unix-like systems, such as Linux, BSD, AIX and Solaris. There are also ports to Mac OS X using its X11 layer and to Microsoft Windows using Cygwin."
657
:
"KDEAP: KDE Accessibility Project - KDE Accessibility Project(KDEAP) is a small on-line community of developers and other volunteers dedicated to ensure that the K Desktop Environment is accessible to all users, including those with physical handicaps. KDE accessibility software is bundled in the kdeaccessibility package."
658
:
"KDM: KDE Display Manager - The KDE Display Manager(KDM) is a graphical login interface for computers using Unix-like operating systems. It is the K Desktop Environment replacement for X Window Display Manager (XDM). KDM allows users to pick their session type on a per-login basis. It uses Qt, like KDE and can be configured from the KDE control center. It also allows theming and user photos."
659
:
"Kernel - Kernel, in computer technologies, is the central part in most computer operating systems for the management of the system's resources and the communication between hardware and software components. As a basic component of an operating system, a kernel provides abstraction layers for hardware, especially for memory, processors and I/O that allows hardware and software to communicate. It also provides software facilities to userland software such as process abstractions, inter-process communication and system calls. Kernel may also mean an essential subset of a programming language or core language, in terms of which other constructs are (or could be) defined."
660
:
"Kernel Mode - Kernel mode, also known as supervisor mode, is a privileged CPU mode. In kernel mode, the CPU may perform any operations provided for by its architecture, including any instructions,Â  I/O operations, accessing any area of memory, and so on. In the other CPU modes, certain restrictions on CPU operations are enforced by the hardware."
661
:
"Keyboard Macro - Keyboard macro is a type of macros or group of definitions that allows short sequences of keystrokes to substitute long sequences of commands, and can automate repetitive tasks. They can be created either by using an application's built-in macro features, or by means of a separate macro program."
662
:
"Keyboard Mapping - Keyboard Mapping, also known as keyboard Layout or character mapping, is a table mapping which character is activated when a specific key on the keyboard is pressed. Different operating systems and/or languages have different keyboard maps."
663
:
"Keychan: Key Changer - Key changer (keychan) is a small program/software, that can change a software license key to another key. A key changer is not illegal, since it only changes a key, which is not the same as a Keygen. A key changer can also be misunderstood, with the term Warez, but it's still not Warez."
664
:
"Keygen: Key Generator - Key generator(Keygen) is a small program that will generate a key or serial or registration number for a piece of software or cryptographic algorithms. Keygens are made available by software cracking groups for free download on various websites dedicated to software piracy."
665
:
"KHTML - KHTML is the HTML layout engine developed by the K Desktop Environment (KDE) project.Built on the then new KPart framework, it was introduced with KDE2 in 2000, for use in the new Konqueror file and web browser which replaced the monolithic KDE File Manager. Written in C++ and licensed under the LGPL, it supports HTML 4, CSS 1 and 2, DOM and JavaScript."
666
:
"Killer App: Killer Application - Killer application, also known as killer app, is a computer program that is so useful or desirable that it proves the value of some underlying technology, such as a gaming console, operating system, or piece of computer hardware or deploying an entire network. Killer applications are very rare. One of examples was VisiCalc, the first spreadsheet to run on a personal computer because it provided an unique tool for people to manipulate numbers easily without the need for programming skills. Another example of the killer app is Voice over IP (VOIP), which brough telephony service opportunities using packet network."
667
:
"KIS: Knowbot Information Service - The Knowbot Information Service (KIS), also known as netaddress, is a knowbot that provides a uniform user interface to a variety of remote directory services such as whois, finger, X.500, MCIMail. By submitting a single query to KIS, a user can search a set of remote white pages services and then see the results of the search in a uniform format."
668
:
"K-Meleon - K-Meleon is a web browser by the Mozilla Foundation to provide a light-weight browser running under Microsoft Windows by using the operating system's native interface for the application's toolbars and menus."
669
:
"Knowbot: Knowleage Robot - Knowbot, or knowleage robot, is a program that will search a system or a network, such as the Internet, seeking and retrieving information on behalf of a user and reporting back when it has found it. An example is the Knowbot Information Service, which can process users' queries by e-mail."
670
:
"KOMPAS-3D - KOMPAS-3D is a commercial system by Ascon Group with the main task of modeling products for design cycle reduction and their fastest way into the mass production. The main components of KOMPAS-3D are the proprietary three-dimensional solid modeling system, a graphic drafting editor and a Part List (BOM) design module."
671
:
"Kpackage - Kpackage is a package manager front-end for K Desktop Environment (KDE). It supports RPM and KISS, as well as Debian, Slackware, BSD and Gentoo packages. It provides a GUI for the management and upgrade of existing packages and the installation and acquirement of new packages. Additionally, it provides functionality to help manage package caches."
672
:
"Kparts - KParts are individual components of the framework for the K desktop environment(KDE). KParts are based on the concepts of Microsoft's Object Linking and Embedding. Konsole is available as a KPart and is used in applications like Konqueror and Kate. Good examples about how KParts can be used are Konqueror, which (among other things) uses the KWord part to display documents, KMPlayer part to play multimedia, and Kontact, which embeds kdepim applications under one roof."
673
:
"Ktorrent - KTorrent is a BitTorrent client written in C++ for K desktop environment (KDE), thus using the Qt toolkit.Â "
674
:
"KVCD - KVCD is a non-standard modification of the MPEG-1 and MPEG-2 video standards for encoding digital video. It is compatible with a number of stand-alone DVD players, though this is by no means universal."
675
:
"Kylix - Kylix is a Linux version of the Borland Corporation's Delphi and C++ Builder development environments for Microsoft Windows. Kylix allows programmers to develop software applications for Linux using Object Pascal, C++, or C."
676
:
"LADSPA: Linux Audio Developers Simple Plugin API - Linux Audio Developers Simple Plugin API(LADSPA) is a standard interface under Lesser General Public License for handling filters, effects and the like in Linux-based operating systems. It is used in many free audio software projects."
677
:
"LAMIP: Linux Audio Multiple Interface Player - Linux Audio Multiple Interface Player(LAMIP) is a free audio player. Its goal is to provide an interface which is completely driven by plugins. LAMIP was designed from the ground up to be completely modular, that one can easily create input plugins for their favorite filetypes or streams, and output plugins for their favorite sound engine or for netcasting. LAMIP is also modular when it comes to front-ends, that LAMIP control plugins can be made available under GTK, Qt, or any other toolkit."
678
:
"LAMP: Linux, Apache, MySQL and Perl/PHP/Python - The LAMP (or L.A.M.P.), an acronym of Linux, Apache, MySQL and Perl (or PHP or Python), refers to a set of free software programs commonly used together to run dynamic Web sites or servers. LAMP software collection defines the open source Web platform, including web server infrastructure, a programming paradigm of developing software, database system and a software distribution package. "
679
:
"LAN Server - LAN Server is an IBM Network Operating System (NOS). The IBM LAN Server started as a close cousin of Microsoft LAN Manager and first shipped in early 1988. It was originally designed to run on top of Operating System/2 Extended Edition. The network client was called IBM LAN Requester and was included with OS/2 EE 1.1 by default. LAN Server basically refers to the IBM OS/2 LAN Server product. There were also LAN Server products for other operating systems, notably AIX (now called Fast Connect) and OS/400."
680
:
"Lattice C - Lattice C, also called Lattice Corporation, was the first C compiler for the IBM PC, in 1982. It was ported to many other platforms, such as mainframes (MVS), minicomputers (VMS), workstations (UNIX), OS/2, the Commodore Amiga and the Sinclair QL."
681
:
"Lava Programming Language - Lava is an experimental, object-oriented, interpreter-based programming language with an associated programming environment (LavaPE = Lava Programming Environment), which gets along without a text editor, but is totally based on structure editors. Only comments, constants and new identifiers have to be entered as text."
682
:
"Lazy Evaluation - Lazy evaluation is a computation optimization technique that attempts to delay computation of expressions until the results of the computation are known to be needed. It has two related, yet different, meanings that could be described as delayed evaluation and minimal evaluation. The benefits of lazy evaluation include: performance increases due to avoiding unnecessary calculations, avoiding error conditions in the evaluation of compound expressions, the ability to construct infinite data structures, and the ability to define control structures as regular functions rather than built-in primitives."
683
:
"LCC: Local C Compiler - Local C Compiler(LCC) is a small retargetable ANSI C compiler developed by Chris Fraser and David Hanson. LCC is simple to be understood and well-documented. LCC can generate code for several processor architectures, including Alpha, SPARC, MIPS, and x86; there is also an LCC back-end that generates MSIL. Jacob Navia has also ported LCC to Windows."
684
:
"Legacy System - A legacy system is an "antiquated" existing computer system or application program which continues to be used because the user does not want to replace or redesign it. Legacy systems are considered to be potentially problematic for several reasons. Legacy systems often run on obsolete (and usually slow) hardware, and sometimes spare parts for such computers become increasingly difficult to obtain. These systems are often hard to maintain, improve, and expand because there is a general lack of understanding of the system. The designers of the system may have left the organization, leaving no one left to explain how it works. Such a lack of understanding can be exacerbated by inadequate documentation or manuals getting lost over the years. Integration with newer systems may also be difficult because new software may use completely different technologies."
685
:
"LGPL: Lesser General Public License - The GNU Lesser General Public License(GLGPL or LGPL), formerly the GNU Library General Public License, is a free software license published by the Free Software Foundation. It was designed as a compromise between the strong-copyleft GNU General Public License and simple permissive licenses such as the BSD licenses and the MIT License. The GNU Lesser General Public License was written in 1991 (and updated in 1999) by Richard Stallman, with legal advice from Eben Moglen. The main difference between the GPL and the LGPL is that the latter can be linked to (in the case of a library, 'used by') a non-(L)GPLed program, which may be free software or proprietary software. This non-(L)GPLed program can then be distributed under any chosen terms, provided that the terms allow "modification for the customer's own use and reverse engineering for debugging such modifications.""
686
:
"LHA - LHA, originally named LHarc, is a freeware compression utility and associated file format, created by Haruyasu Yoshizaki. Although no longer much used in the West, LHA remains popular in Japan. It was used by id Software to compress installation files for their earlier games, such as Doom. LHA has been ported to many operating systems and is the main archiving format on Amiga computers. Microsoft has released a Windows XP add-on, Microsoft Compression Folder for LHA archives, for the Japanese market only."
687
:
"Libmp3splt - Libmp3splt is a free digital audio splitter library that runs on GNU/Linux, and Microsoft Windows operating systems. The source code for libmp3splt is released under the GNU General Public License. Libmp3splt is a library based on mp3splt. Mp3splt-gtk is a graphical user interface that uses libmp3splt."
688
:
"Libre Software - Libre software refers to the kind of software that you may distribute with legal "freedom", which may or may not cost anything to get it. The European Commission coined the term in 2000 to avoid the confusing ambiguity of the English adjective "free", which means zero cost."
689
:
"LightWave - LightWave, or LightWave 3D, is a computer graphics program for 3D modeling, rendering, and animation. Although the program originated on the Commodore Amiga, it has since been ported to support Mac OS X, Windows, and the render engine has also been ported to Linux platforms. It was once licensed by and is now entirely developed by NewTek."
690
:
"Linker - Linker is a type of software development tool that accepts one or more object files as inputs and outputs. The linker is thus run after all of the source files have been compiled and assembled into object files."
691
:
"Linoleum Programming Language - The L.In.O.L.E.U.M. (also called Linoleum or Lino) programming language, means Low-level INterfaced OverLanguage for Extremely Universal Machine-coding, developed by Alessandro Ghignola. It is unstructured, untyped, procedural, cross platform assembler, easier than native Assembly language, and twice as fast as C/C++. Uniquely, it is designed to be recompilable across different CPU's."
692
:
"Lint Programming Tool - Lint Programming Tool refers to a type of tools that flag suspicious usage in software written in any computer language. The term lint-like behavior is sometimes applied to the process of flagging suspicious language usage. Lint-like tools generally perform static analysis of source code. Lint tool can be used to check C and C++ programs for error-prone syntactical constructs. The C and C++ language standards are loosely written. Plenty of run-time details, such as the actual size of an int, are left up to compiler implementers. Lint can help programmer find dangerous and nonportable constructs in the code before a compiler turns them into run-time bugs."
693
:
"Linux - Linux, also known as GNU/Linux, is a free and open source Unix-like computer operating system. Unlike proprietary operating systems such as Windows or Mac OS, all of Linux underlying source code is available to the general public for anyone to use, modify, and redistribute freely. Linux has gained the support of major corporations such as IBM, Sun Microsystems, Hewlett-Packard, and Novell for use in servers and is gaining popularity in the desktop market. It is used in systems ranging from supercomputers to mobile phones."
694
:
"Linux kernel - The Linux kernel is a free Unix-like operating system kernel that was created by Linus Torvalds in 1991 and subsequently improved with the assistance of developers around the world."
695
:
"Linux PC - A Linux PC (personal computer) is usually a microcomputer that uses Linux distribution software as its operating system and application software."
696
:
"LIS: Laboratory Information System - Laboratory information system (LIS) is a class of software which handles storing information generated by laboratory processes. These systems often must interface with instruments and other information systems such as hospital information systems (HIS). An LIS is a highly configurable application which is customized to facilitate a wide variety of laboratory workflow models. Deciding on an LIS vendor is a major undertaking for all but the smallest labs. "
697
:
"LISP Programming Language - Lisp programming language (LISP), originally specified in 1958, is the second-oldest (only Fortran is older) high-level programming language in widespread use. LISP has changed a great deal since its early days, and a number of dialects have existed over its history. Today, the most widely-known general-purpose Lisp dialects are Common Lisp and Scheme. Lisp was originally created as a practical mathematical notation for computer programs, based on Alonzo Church's lambda calculus. It quickly became the favored programming language for artificial intelligence research. As one of the earliest programming languages, Lisp pioneered many ideas in computer science, including tree data structures, automatic storage management, dynamic typing, object-oriented programming, and the self-hosting compiler."
698
:
"Live Variable Analysis - Live variable analysis is performed by computer program compilers to calculate for each program point the variables that may be potentially read afterwards before their next written update."
699
:
"LiveCD - LiveCD is an operating system distribution that is executed upon boot using a CD-ROM, without installation on a hard drive. It is one type of LiveDistro using CD-ROM as the media."
700
:
"LiveDistro - LiveDistro is a generic term for an operating system distribution that is executed upon boot, without installation on a hard drive. Typically, it is stored on bootable media such as a CD-ROM (Live CD), DVD (Live DVD), USB Flash Drive, among others."
701
:
"LMS: Learning Management System - Learning Management System (LMS) is a software package, that enables the management and delivery of learning content and resources to students. Most LMS systems are web-based to facilitate "anytime, anywhere" access to learning content and administration. At a minimum, the LMS usually allows for student registration, the delivery and tracking of e-learning courses and content, and testing, and may also allow for the management of instructor-led training classes. In the most comprehensive of LMSs, one may find tools such as competency management, skills-gap analysis, succession planning, certifications, virtual live classes, and resource allocation (venues, rooms, textbooks, instructors, etc.). Most systems allow for learners self-service, facilitating self-enrollment, and access to courses."
702
:
"LNO: Loop Nest Optimization - Loop nest optimization (LNO) is a special case of loop transformation which deals with nested loops that makes possible large reductions in the cache bandwidth necessary for some pervasive algorithms."
703
:
"Loader Program - Loader program is an operating system utility that performs the functions of a linker program and then immediately schedules the resulting executable program for action in the form of a memory image, without necessarily saving the program as an executable file. Loader programs are useful for prototyping, testing, and one-off applications. "
704
:
"Locator Program - Locator program is a type of a software development tool that assigns physical addresses to a relocatable program. This is the last step in preparing software for execution by an embedded system. The resulting file is called an executable. In some cases, the locator's functionality is built into the linker or loader, which performs the location step."
705
:
"Logic Programming - Logic programming (sometimes called logical programming) is programming that makes use of pattern-directed invocation of procedures from assertions and goals. The first logic programming language was Planner which featured pattern-directed invocation of procedural plans from both assertions and goals. In order to cope with the very limited memory systems that were available when it was developed, Planner used backtracking control structure so that only one possible computation path had to be stored at a time. Subsequently, Prolog was developed as a simplification of Planner that had pattern-directed invocation only from goals (also based on backtracking). From Planner there developed the programming languages QA-4, Popler, Conniver, and QLISP. The programming languages Mercury, Visual Prolog, Oz and Fril developed from Prolog. There are also concurrent logic programming languages (not based on backtracking) derived from Planner (e.g., Ether) and derived from Prolog."
706
:
"Loop Fission - Loop fission is a compiler optimization technique attempting to break a loop into multiple loops over the same index range but each taking only a part of the loop's body. The goal is to break down large loop body into smaller ones to achieve better data locality. It is the reverse action to loop fusion."
707
:
"Loop Fusion - Loop fusion is a technique for compiler optimization and loop transformation, which replaces multiple loops with a single one. It is the reverse action to loop fission."
708
:
"Loop Interchange - Loop interchange, a compiler optimization technique, is the process of exchanging the order of two iteration variables. One major purpose of loop interchange is to improve the cache performance for accessing array elements. Cache misses occur if the contiguously accessed array elements within the loop come from a different cache line. Loop interchange can help prevent this. The effectiveness of loop interchange depends on and must be considered in light of the cache model used by the underlying hardware and the array model used by the compiler."
709
:
"Loop Inversion - Loop inversion is a technique in compiler optimization, particularly in loop transformation. This technique changes a standard while loop into a do/while (a.k.a. repeat/until) loop wrapped in an if conditional, reducing the number of jumps by two, for cases when the loop is executed. Doing so duplicates the condition check (increasing the size of the code) but is more efficient because jumps usually cause a pipeline stall. Additionally, if the initial condition is known at compile-time and is known to be side-effect-free, the "if" guard can be skipped."
710
:
"Loop Optimization - Loop optimization refers to the process in computer compiling to optimize loops in the programs. Most execution time of a scientific program is spent on loops. Thus a lot of compiler analysis and optimization techniques have been developed to make the execution of loops faster. "
711
:
"Loop Splitting - Loop splitting, also known as loop peeling, is a compiler optimization technique. It attempts to simplify a loop or eliminate dependencies by breaking it into multiple loops which have the same bodies but iterate over different contiguous portions of the index range."
712
:
"Loop Tiling - Loop tiling, also known as loop blocking, is a loop optimization used by compilers to make the execution of certain types of loops more efficient. Loop tiling partitions a loop’s iteration space into smaller chunks or blocks, so as to help ensure that data used in a loop stays in the cache until it is reused. The partitioning of loop iteration space leads to partitioning of large array into smaller blocks, thus fitting accessed array elements into cache size, enhancing cache reuse and eliminating cache size requirements."
713
:
"Loop Transformation - Loop transformation refers to a group of loop optimization techniques in computer programming and compiling, which plays an important role in improving cache performance and effective use of parallel processing capabilities. Common loop transformations include: - loop interchange - loop splitting/Loop peeling - loop fusion - loop fission - loop unrolling - loop tiling/loop blocking - loop skewing - loop inversion - loop-invariant code motion - vectorization - parallelization"
714
:
"Loop Unswitching - Loop unswitching is a compiler optimization technique. It moves a conditional inside a loop outside of it by duplicating the loop's body, and placing a version of it inside each of the "if and else" clauses of the conditional. This can improve the parallization of the loop. Since modern processors can operate fast on vectors this increases the speed."
715
:
"Loop Unwinding - Loop unwinding, also known as loop unrolling, is a technique for optimizing parts of computer programs. The idea is to save time by reducing the number of overhead instructions that the computer has to execute in a loop, and thus improving the cache hit rate and reducing branching. To achieve this, the instructions that are called in multiple iterations of the loop are combined into a single iteration. This will speed up the program if the overhead instructions of the loop impair performance significantly."
716
:
"Loop-Invariant Code Motion - Loop-invariant code motion is a compiler optimization technique which performs loop-invariant code movement automatically to improve execution speed. Loop-invariant code in an imperative programming language consists of statements which could be moved to before the loop (if the loop always terminates), or after the loop, without affecting the semantics of the program. As a result, it is executed less often."
717
:
"Low-Level Language - Low-level programming language is a type of computer language that provides little or no abstraction from a computer's microprocessor. The word "low" refers to the small or nonexistent amount of abstraction between the language and machine language, it is therefore often described as machine-oriented languages. They cannot easily be converted to run on a computer with a different central processing unit, and they are relatively difficult to learn because a detailed knowledge of the internal working of the computer is required. Since they must be translated into machine code by an assembler program, low-level languages are also called assembly languages. "High-level" and "low-level" are also used relatively, so a Java programmer might consider C to be a comparatively low-level language.  "
718
:
"LSM: Linux Software Map - Linux Software Map (LSM) is a standard text format for describing Linux software. LSM for a program is a single text document, named software_package_name.lsm. An LSM begins with Begin4 and ends with End. It has one field on each line. Field name is separated from value by a ": ". Mandatory fields are Title, Version, Entered-date, Description, Author and Primary-site."
719
:
"LURCH - LURCH is a software design debugging tool that uses a nondeterministic algorithm to quickly explore the reachable states of a software model. By performing a partial and random search, LURCH looks for faults in the model and reports the pathways leading to the faults."
720
:
"LWP: Light-Weight Process - In computer operating systems, a light-weight process (LWP), confusingly known as a kernel thread, is a means of achieving multitasking. In contrast to a user thread, which is handled at the application level, a light-weight process is scheduled by the kernel. For this reason, they are generally preferred over a userland thread implementation whenever possible, as there is usually much less overhead. LWP is a single-threaded sub-process which, unlike a thread, has its own process identifier and may also differ in its inheritance and controlling features. "
721
:
"LZO: Lempel-Ziv-Oberhumer - Lempel-Ziv-Oberhumer (LZO) is a data compression algorithm that is focused on decompression speed. The algorithm is lossless and the source is thread safe. A free software tool which implements the LZO algorithm is lzop. The original library was written in ANSI C, and it has been made available under the GNU General Public License. Versions of LZO are available for the Perl, Python and Java languages."
722
:
"Mac OS X - Mac OS X is the tenth and the latest version of the Macintosh operating system, and is designed and developed by Apple Computer to run on their Macintosh line of personal computers. Mac OS X is built on Darwin, an open source Unix-like environment which is based on the BSD source tree, and the Mach microkernel."
723
:
"Mac OS: Macintosh Operating System - Macintosh operating system (Mac OS). is a series of graphical user interface-based operating systems developed by Apple Computer for their Macintosh line of computer systems. It was first introduced in 1984 with the original Macintosh 128K. Earlier versions of the Mac OS were compatible only with Motorola 68000-based Macintoshes, while later versions were also compatible with the PowerPC (PPC) architecture. Most recently, Mac OS X has become compatible with Intel's PC CPU architecture."
724
:
"Machine Code - Machine code, also known as machine language, is a system of instructions and data directly understandable by computer central processing unit. Every CPU model has its own machine code, or instruction set, although there is considerable overlap between some. If CPU A understands the full language of CPU B it is said that CPU A is compatible with B. CPU B may not be compatible with CPU A, as A may know a few codes that B does not."
725
:
"Machine Code Instruction - Machine code instruction are the "words" of a machine or a computer. Instructions are patterns of bits with different patterns corresponding to different commands to the machine. Every CPU model has its own machine code, or instruction set, although there is considerable overlap between some."
726
:
"Machine Language - Machine language, also known as machine code, is the lowest-level language (except for computers that utilize programmable microcode) directly understandable by a computer central processing unit (CPU). While easily understood by computers, machine languages are very hard to understand for humans because they consist entirely of numbers. Programmers, therefore, use either a high-level programming language or an assembly language. An assembly language contains the same instructions as a machine language, but the instructions and variables have names instead of being just numbers."
727
:
"Macro - A macro in computer science is an abstraction, that defines how a certain input pattern is replaced by an output pattern according to a defined set of rules. There are three broad categories of macros, and each takes a different kind of input pattern to produce a different kind of output pattern: Programming macros, Application Macros and Keyboard macros."
728
:
"Macro Language - A macro language is a programming language in which all or most computation is done by expanding macros. Macro languages are not widely used for general-purpose programming, but are common in text processing applications, for example, C preprocessor and Internet Macros (iOpus)."
729
:
"Macro-instruction - Macro-instruction is an instruction that defines a macro. In assembly language, MACRO and ENDM are examples that define the beginning and end of a macro. In C, the #DEFINE statement is used."
730
:
"Macromedia Flash - Macromedia Flash, or simply Flash, refers to both a multimedia authoring program and the Flash Player, written and distributed by Macromedia (now part of Adobe Systems). Flash utilizes vector and raster graphics, a native scripting language called ActionScript and bidirectional streaming of video and audio."
731
:
"MacsBug: Motorola Advanced Computer Systems Debugger - Motorola Advanced Computer Systems Debugger (MacsBug) is a low-level debugger for the Motorola 68000 family of processors specifically designed for the Apple Macintosh."
732
:
"Magnolia CMS - Magnolia CMS is a free, open source, J2EE deployable content management system (CMS), that is developed by obinary and a growing community of international contributors. It uses the standard API for java content repositories (JCR) to access its content. It is currently available in many languages including Russian, Chinese, English, French, German and Spanish. Magnolia CMS uses the JSR-170 standard API to access its content. It has an easy to use web-browser interface, a clear API and a useful custom tag library for easy templating in JSP and Servlets."
733
:
"MakeRefMovie - MakeRefMovie is a free, downloadable software from Apple Computers that creates RefMovies (files that point to the location of a video file) for QuickTime streaming video. Versions of the application are also available for Windows systems. Reference Movies can also be created from the command-line with the free tool XMLtoRefMovie."
734
:
"Mambo CMS - Mambo CMS, formerly named Mambo Open Source(MOS), is an open source content management system (CMS) for creating and managing websites through a simple web interface. Mambo also includes more advanced features such as page-caching to improve performance on busy sites, advanced templating techniques, and a fairly robust API. It can also automate many tasks such as web indexing for static pages. Mambo can provide RSS feeds, printable versions of pages, news flashes, blogs, forums, polls, calendars, website searching, language internationalization, and other possibilities."
735
:
"MASM: Microsoft Macro Assembler - The Microsoft Macro Assembler (MASM) is an assembler for the x86 family of microprocessors, originally produced Microsoft MS-DOS operating system. It supported a wide variety of macro facilities and structured programming idioms, including high-level constructions for looping, procedure calls and alternation (therefore, MASM is an example of a high-level assembler). Later versions added the capability of producing programs for the Windows operating systems that were released to follow on from MS-DOS. MASM is one of the few Microsoft development tools for which there was no separate 16-bit and 32-bit versions."
736
:
"MCAD: Microsoft Certified Application Developer - The Microsoft Certified Application Developer (MCAD) certification is the entry-level programming certification. The curriculum covers many topics related to the Microsoft .NET development platform. MCAD certification is for professionals who use Microsoft technologies to develop and maintain department-level applications, components, Web or desktop clients, or back-end data services."
737
:
"MCDBA:Â  Microsoft Certified Database Administrator - The Microsoft Certified Database Administrator (MCDBA) credential is for database administrators, who implement and administer Microsoft SQL Server databases. The certification is appropriate for individuals who derive physical database designs, develop logical data models, create physical databases, create data services by using Transact-SQL, manage and maintain databases, configure and manage security, monitor and optimize databases, and install and configure SQL Server. This certification requires passing three core exams, and one elective exam."
738
:
"MCDST: Microsoft Certified Desktop Support Technician - Microsoft Certified Desktop Support Technician (MCDST) is a lower-level credential that demonstrates a technician can competently support end users and troubleshoot desktop environments running on Microsoft Windows. MCDST candidates are required to pass two core exams. Elective exams are not required. Complete course lasts 50 hours."
739
:
"MCP: Microsoft Certified Professional - Microsoft Certified Professional (MCP) refers to both an individual Microsoft certification and a broader professional certification program. To be an MCP, candidates must complete any one exam within the program. The MCP program offers multiple certifications, based on different areas of technical expertise. To attain these certifications, a candidate must pass a series of exams within the program. Popular certifications are MCP, Microsoft Certified System Engineer (MCSE) and Microsoft Certified Database Administrator (MCDBA)."
740
:
"MCSA: Microsoft Certified Systems Administrator - Microsoft Certified Systems Administrator (MCSA) certification certifies a user's knowledge in system administration of Microsoft Windows operating systems and is generally simpler than, but not a subset of, the MCSE. The Windows Server 2003 MCSA is achieved upon passing 2 networking system exams, a client operating system exam (generally Microsoft Windows XP), and an elective exam. The Windows Server 2000 MCSA title is granted after taking 3 core exams and one elective. Although the MCSA isn't a subset of the MCSE, it is possible to gain an MCSA on the way to an MCSE without doing any exams that are extraneous to the MCSE on Windows 2000."
741
:
"MCSD: Microsoft Certified Solution Developer - Microsoft Certified Solution Developer (MCSD) certification is the highest level programming certification offered by Microsoft. To fulfill the requirements of the certification, a total of five exams (four core exams, one elective exam) must be passed. Some of the core exams are also requirements for the MCAD. Microsoft has declared that this certification will be focused towards the needs of developers using .NET Framework 1.0 and 1.1 versions. Developers using .NET Framework 2.0 and Microsoft Visual Studio 2005 are expected to consider obtaining Microsoft Certified Technology Specialist (MCTS) and Microsoft Certified Professional Developer (MCPD) certifications."
742
:
"MCSE: Microsoft Certified Systems Engineer - Microsoft Certified Systems Engineer (MCSE) qualifies an individual of being able to analyze the business requirements for business solutions and design and implement the infrastructure required. As of 2006, the MCSE is available for two different products, Windows 2000 and Windows Server 2003, each requiring a different set of exams. For the MCSE 2003, candidates must pass six Core exams design exams (Four networking exams, one client operating system and one design exam) and one elective exam, for a total of seven exams. For the MCSE 2000, a candidate needs to pass five Core Exams (Four operating system exams, one design exam) and two electives."
743
:
"MCT: Microsoft Certified Trainer - Microsoft Certified Trainer (MCT) certification is for individuals who intend to train users wanting to obtain any of the other certifications."
744
:
"MDX: Multidimensional Expressions - Multi-dimensional Expressions (MDX) is a query language for OLAP databases, which much like SQL is a query language for relational databases. It is also a calculation language, with syntax similar to spreadsheet formulas. MDX was first introduced as part of the OLEDB for OLAP specification in 1997 from Microsoft. The specification was quickly followed by the commercial release of Microsoft OLAP Services 7.0 in 1998, and later by Microsoft Analysis Services. While it was not an open standard, but rather a Microsoft-owned specification, it was adopted by a wide range of OLAP vendors."
745
:
"Media Cleaner Pro - Media Cleaner Pro is a piece of software used to convert and optimize video and audio files for the Internet, DVD, CD-ROM, PowerPoint presentations, and other digital imagery."
746
:
"Memory Management - Memory management is a technique used by the Mac OS to optimize the use of memory. The original problem for the designers of the Macintosh was how to make optimum use of the 128 kB of RAM that the machine was equipped with. Since at that time the machine could only run one application program at a time, and there was no permanent secondary storage, the designers implemented a simple scheme which worked well with those particular constraints. However, that design choice did not scale well with the development of the machine, creating various difficulties for both programmers and users. This technique is one of the key areas addressed by the change to Mac OS X."
747
:
"Memwatch - Memwatch is a free programming tool for memory leak detection in C. It is highly portable ANSI C code which will run on just about any hardware that has a C compiler. While it is primarily intended to detect and diagnose memory leaks, it can also be used to analyze a programs memory usage and provides logging facilities."
748
:
"Metadata - Metadata is data that describe other data. Metadata refers to information about data itself -- perhaps the origin, size, formatting or other characteristics of a data item. Metadata is of special interest in various fields of computer science, e. g. information retrieval and the semantic web. In the database field, metadata is essential to understanding and interpreting the contents of a data warehouse. Meta tags, a type of metadata, are optional elements defined in the header portion of an HTML or PHP file for web pages."
749
:
"MicroBSD - MicroBSD is a fork of the UNIX-like BSD operating system descendant OpenBSD 3.0, begun in July 2002. The project's objective to produce a fully secure, complete system, but with a small footprint. The first phase of its development was aborted, but it has been resumed by a new group of developers."
750
:
"Microcode - Microcode, also known as microprogram, refers to the instruction set of a CPU as a sequence of microcode instructions (microinstructions), each of which typically consists of a number of bit fields and the address of the next microinstruction to execute. Microcode is the translation layer between machine instructions and the elementary operations of a computer. Microcode is stored in ROM and allows the addition of new machine instructions without requiring that they be designed into electronic circuits when new instructions are needed. Several microinstructions will usually be required to fetch, decode and execute each machine code instruction. The elements composing the microprogram/microcode exist on a lower conceptual level than the more familiar assembler instructions. Each element is differentiated by the "micro" prefix to avoid confusion: microprogram, microcode, microinstruction, microassembler, etc."
751
:
"Microinstruction: Micro code Instruction - Microcode Instructions (microinstructions) are very basic low-level instructions in a computer CPU, which are used to manipulate bit streams and byte ordering. Microinstructions can control data flow and instruction-execution sequencing in a processor at a more fundamental level than machine instructions. Typically, a series of microinstructions is necessary to perform an individual machine instruction."
752
:
"Microkernel - A microkernel is a minimal computer operating system kernel providing only basic operating system services (system calls), while other services are provided by user-space programs called servers. Commonly, microkernels provide services such as address space management, thread management, and inter-process communication, but not networking or display for example."
753
:
"Micro-programming - Micro-programming, also known as micro-coding, refers to the development of micro-programs or micro-codes, which are the instruction set of a CPU as a sequence of micro-code instructions (micro-instructions). Micro-programming allows CPU design engineers to write a micro-program to implement a machine instruction set. Even in the late stage of design process, micro-code could easily be changed. This greatly facilitated CPU design and led to more complex instruction sets. Architectures using micro-programming included the IBM System/360 and DEC VAX, the instruction sets of which were implemented by complex microprograms. The approach of using increasingly complex micro-code-implemented instruction sets was later called CISC."
754
:
"Microsoft .Net - Microsoft .Net is an umbrella term that applies to a collection of products and technologies from Microsoft. All have in common a dependence on the Microsoft .NET Framework, a component of the Windows operating system."
755
:
"Microsoft .Net Framework - The Microsoft .NET Framework is a software component which can be added to the Microsoft Windows operating system. It provides a large body of pre-coded solutions to common program requirements, and manages the execution of programs written specifically for the framework. The .NET Framework is a key Microsoft offering, and is intended to be used by most new applications created for the Windows platform."
756
:
"Microsoft Access - Microsoft Access is a relational database management system from Microsoft, packaged with Microsoft Office Professional which combines the Jet relational database engine with a graphical interface. The development environment provides productivity-enhancing features for both advanced developers and beginning users. It can use data stored in Access/Jet, SQL Server, Oracle, or any ODBC-compliant data container."
757
:
"Microsoft SQL Server - Microsoft SQL Server is a relational database management system produced by Microsoft. It supports a super-set of Structured Query Language SQL, the most common database language. It is commonly used by businesses for small to medium sized databases, and in the past 5 years large enterprise databases, and competes with other relational database products for this market segment."
758
:
"Microsoft Systems Management Server - Microsoft Systems Management Server (SMS) is a Microsoft systems management software product for managing large groups of Windows-based computer systems. It provides remote control, patch management, software distribution, and hardware/software inventory."
759
:
"Microsoft Visual Studio Debugger - The Microsoft Visual Studio Debugger is a debugger tool that ships along with all versions of Visual Studio .NET. This debugger owes much of its feel and functionality to CodeView, a standalone, text-based debugger that shipped with Microsoft Visual C++ version 5.0 and earlier."
760
:
"Microsoft Windows - Microsoft Windows is a family of operating systems for personal computers, developed and distributed by Microsoft. Windows provides a graphical user interface (GUI), virtual memory management, multitasking, and support for many peripheral devices. Windows can run on several type of platforms such as servers, embedded devices and, most typically, on personal computers."
761
:
"MicroStation - MicroStation is the platform architectural and engineering software package developed by Bentley Systems, to generate 2D/3D vector graphic objects and elements. Its native format is the DGN (DesiGN file) format, though it can also read and write a variety of standard CAD formats including AutoCAD's DWG and DXF as well as produce media output in such forms as rendered images (JPEG and BMP), animations (AVI), 3D web pages in Virtual Reality Modeling Language, and Adobe PDF."
762
:
"Middleware - Middleware is a type of computer software that connects software components or applications. It is used most often to support complex, distributed applications. It includes web servers, application servers, content management systems, and similar tools that support application development and delivery. Middleware is especially integral to modern information based on XML, SOAP, Web services, and service-oriented architecture."
763
:
"MinGW Developer Studio - MinGW Developer Studio is a freeware IDE (integrated development environment) for programming with C and its derivative, C++. MinGW Developer Studio is bundled with the open source GCC compiler, MinGW and the wxWidgets GUI library, offering a complete solution for both console and GUI programming with C/C++. The interfaces and functionalities are almost identical to Visual C++ 6.0, with added features such as code folding."
764
:
"MinGW: Minimalist GNU for Windows - Minimalist GNU for Windows (MinGW or Mingw32) is a software port of the GNU toolchain to the Win32 platform. It was originally a fork of Cygwin. Unlike Cygwin it does not require a compatibility layer DLL nor does its license require that applications developed with it are released under the GPL."
765
:
"Minix - MINIX is an open source, Unix-like operating system based on a microkernel architecture. Andrew S. Tanenbaum wrote the operating system to be used for educational purposes. Early Linux kernel development was done on a MINIX host system, which led to Linux inheriting various features from MINIX, such as the MINIX disk filesystem format."
766
:
"MIS: Management Information systems - Management Information systems(MIS), also known as information technology management, generally refers to the application of information technology to business problems. In academic field, the study of information systems is usually a commerce and business administration discipline, and frequently involves software engineering, but also distinguishes itself by concentrating on the integration of computer systems with the aims of the organization. The area of study should not be confused with computer science which is more theoretical in nature and deals mainly with software creation, and not with computer engineering, which focuses more on the design of computer hardware. Very often, companies have a MIS department to take care of daily management and administration of the company's information infrastructure."
767
:
"MISRA C - MISRA C is a set of coding guidelines for the programming language C and later for C++ with extensions. The C guidelines are intended to be applied during the development of software used in safety-critical applications. Although written for use by the automotive industry, the problems addressed by the guidelines also occur in software produced for other industries and some development groups in these industries (e.g., medical device manufacturers) have adopted the MISRA C guidelines."
768
:
"MISRA: Motor Industry Software Reliability Association - Motor Industry Software Reliability Association (MISRA), is a collaboration between vehicle manufacturers, component suppliers and engineering consultants which seek to promote best practice in developing safety-related electronic systems in road vehicles. MISRA has developed a set of coding guidelines, called MISRA C, for the programming language C and then for C++."
769
:
"MIT License: Massachusetts Institute of Technology License - Massachusetts Institute of Technology (MIT) License, originated at the MIT, is a type of licence for the use of certain types of computer software. It allows reuse for open source and proprietary software. Many groups use the MIT license for their own software, such as expat, MetaKit, and the X Window System."
770
:
"Module - In computer software programming, a module is a software entity that groups a set of (typically cohesive) subprograms/routines and data structures. Modules are units that can be compiled separately, which makes them reusable and allows multiple programmers to work on different modules simultaneously. Modules also promote modularity and encapsulation (i.e. information hiding), both of which can make complex programs easier to understand. Programs are composed of one or more independently developed modules that are not combined until the program is linked."
771
:
"Monad - Monad, Latin for unit, is a technique from category theory which has been adopted as a way of dealing with state in functional programming languages, which make use of monads to structure programs which include operations that must be executed in a specific order. The primary uses of monads in functional programming are to express input/output operations and changes in state without using language features that introduce side effects. A monad has three components: a means of augmenting an existing type, a means of creating a default value of this new type from a value of the original type, and a replacement for the basic application operator for the old type that works with the new type."
772
:
"Monotone - Monotone is an open source software tool for revision control. Monotone tracks revisions to files, groups sets of revisions into changesets, and tracks history across renames. The design principle is distributed operation making heavy use of cryptographic primitives to track file revisions (via the SHA1 secure hash) and to authenticate user actions (via RSA cryptographic signatures). Each participant maintains their own revision history store in a local SQLite database. Monotone is especially strong in its support of a diverge/merge workflow, which it achieves in part by always allowing "commit" before merge."
773
:
"Moodle - Moodle is an open source e-learning platform with a course management system (CMS). Such e-learning systems are sometimes also called Learning Management Systems (LMS), Virtual Learning Environments (VLE), education via computer-mediated communication (CMC) or Online Education."
774
:
"MOS: Microsoft Office Specialist - Microsoft Office Specialist (MOS), previously named Microsoft Office User Specialist (MOUS) is a certification for using the Microsoft Office suite of business applications. While listed under the MCP Certification Programs, it is not officially an MCP Certification. The MOS exams are managed by a third party company, Certiport."
775
:
"Mosaic - Mosaic is a World Wide Web browser and Gopher client developed at the National Center for Supercomputing Applications (NCSA) beginning in 1992, and officially ending on January 7, 1997. NCSA Mosaic was originally designed and programmed for Unix's X Window System. Marc Andreessen, the leader of the team that developed Mosaic, left NCSA and, with four other former students and staff of the University of Illinois, started Mosaic Communications Corporation. Mosaic Communications eventually became Netscape Communications Corporation, producing Netscape Navigator. Spyglass licensed the technology and trademarks from NCSA for producing their own web browser but never used any of the NCSA Mosaic source code. Spyglass Mosaic was later licensed by Microsoft, and it was modified and renamed to Internet Explorer."
776
:
"Moto Programming Language - Moto Programming Language(Moto) is an Open Source server-side language much like PHP or JSP, developed by David Hakim. The primary difference between Moto and server-side scripting languages is that Moto pages can run interpreted (like PHP) or be natively compiled into dynamically loadable Apache modules. Moto has a type checking phase so programmers see more errors up front. Programmers can define classes and functions in Moto and make use of powerful exception handling. Moto comes with a full suite of objects and functions for state and session management, MySQL and PostgreSQL database connectivity, and a slew of utility classes. There is also an included interface definition language for exposing C functions to Moto. All object allocation occurs in a shared memory segment, so maintaining objects in memory between page views is a snap."
777
:
"MOV: Merchant of Venice - Merchant of Venice (MOV), in computer programming, is a stock market trading and technic analysis program to manage graphs and portfolios. It has an internal language which supports all the most important econometric functions (RSI, Bollinger Bands, Momentum, Moving Averages, ecc.). It supports artificial intelligence techniques (Genetic Programming, Genetic Algorithm, ...)."
778
:
"Mozbot - Mozbot is an IRC bot written in the Perl programming language under the MPL license, originally authored by Ian Hickson. Mozbot has a modular design, allowing for extension modules to be incorporated at runtime."
779
:
"Mozilla - Historically, Mozilla had been used internally as a codename for the Netscape Navigator web browser from its beginning. It was a contraction of Mosaic killer. Mozilla is sometimes used to refer to the Mozilla Organization, a free software / open source software project that was founded in order to create the next-generation Internet suite for Netscape. On August 3, 2005, Mozilla Foundation announced the creation of Mozilla Corporation, a wholly-owned for-profit taxable subsidiary of Mozilla Foundation, that will focus on delivering Firefox and Thunderbird to end users."
780
:
"Mozilla Application Object Model (AOM) - The Mozilla Application Object Model (AOM) is an application programming interface for manipulating the application using JavaScript. It is similar to Document Object Model, but instead of being document-centric, it is application-centric. For example, opening web services, saving files, etc."
781
:
"Mozilla Firefox - Mozilla Firefox, or simply known as Firefox, is a free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers. Firefox includes an integrated pop-up blocker, tabbed browsing, live bookmarks, support for open standards, and an extension mechanism for adding functionality. Although other browsers have some of these features, Firefox became the first such browser to include them all and achieve wide adoption."
782
:
"Mozilla Public License - The Mozilla Public License is an open source and free software license. Version 1.0 was developed by Mitchell Baker when she worked as a lawyer at Netscape Communications Corporation and version 1.1 at the Mozilla Foundation."
783
:
"Mp3splt - Mp3splt is a free(GNU GPL) digital audio splitter that runs on GNU/Linux, Mac OS X, and Microsoft Windows operating systems. The graphical user interface for the splitter is called mp3splt-gtk and is made with gtk2. The mp3splt project has also a library created from mp3splt, called libmp3splt and a graphical user interface called mp3splt-gtk that uses that library."
784
:
"Mp3splt-gtk - Mp3splt-gtk is the GUI of Mp3splt, a free(GNU GPL) digital audio splitter that runs on GNU/Linux, and Microsoft Windows operating systems. The graphical user interface uses libmp3splt (based on mp3splt) and is made with GTK+ 2."
785
:
"MPS: Memory Pool System - The Memory Pool System (MPS) is a flexible and modular memory management system that was developed by Harlequin Inc. and now an open source software to support both their ScriptWorks PostScript RIP, and their Harlequin Dylan compiler and IDE for the Dylan programming language. As such it was designed to support a wide range of requirements from high-speed manual memory management, to complex garbage collection with many different types of reference."
786
:
"MS-DOS: MicroSoft Disk Operating System - MicroSoft Disk Operating System (MS-DOS) is an operating system by Microsoft. It was the most widely used DOS for the PC compatible platform during the 1980s. It has gradually been replaced by the Windows operating system. MS-DOS is a single user operating system that runs one program at a time and is limited to working with one megabyte of memory, 640 kilobytes of which is usable for the application program. Special add-on EMS memory boards allow EMS-compliant software to exceed the 1Mbyte limit. Add-ons to DOS, such as Microsoft Windows and DESQview, take advantage of EMS and allow the user to have multiple applications loaded at once and switch between them."
787
:
"mSQL: Mini SQL - Mini SQL (mSQL) is a lightweight client/server database developed by Hughes Technologies in 1994. mSQL filled a gap that existed between the embedded desktop databases like Microsoft Access and the enterprise-level commercial databases such as Oracle and DB2. It was popular database of choice for open source developers in the middle of 90'. By 1996, development on mSQL began to stagnate and MySQL arose to fill that void. By 1999, MySQL had gone well beyond mSQL in popularity and today mSQL has less visibility."
788
:
"mSQL-JDBC - mSQL-JDBC is an Open Source Type IV Java Database Connectivity (JDBC) driver for the mSQL database engine created by George Reese. It is written in the Java programming language and uses the native mSQL network protocols to talk to mSQL. The driver supports as much of the JDBC specification as the mSQL database will support, but development on the driver basically ceased in 1997. The driver therefore does not support the most recent releases (3.0 and above) of mSQL."
789
:
"MSYS: Minimal SYStem - Minimal SYStem(MSYS), a part of MinGW, was created out of a long-lived desire to provide the MinGW community a Minimal SYStem, with which a configure script could be executed. MSYS provides POSIX/Bourne configure scripts the ability to execute and create a Makefile used by make. MSYS versions 1.0.8 and later include only the i386 binary distribution, which will run on any 32-bit Intel-compatible processor."
790
:
"MUI: Magic User Interface - The Magic User Interface(MUI) is an object oriented system by Stefan Stuntz to generate and maintain graphical user interfaces. The MUI was written for AmigaOS and gained popularity amongst both programmers and users. It has been ported to PowerPC processors and adopted as the default GUI toolkit of the MorphOS operating system. The MUI application programmer interface has been cloned by the Zune toolkit used in the Amiga Research Operating System."
791
:
"Multiple Perspective Software Development - Multiple perspective software development refers to an approach to software development which requires communication and collaboration between experts in a number of different fields."
792
:
"Multiprocessing - Multiprocessing typically refers to the use of more than one processor (CPU) in a single computer system. So-called multiprocessor systems usually have a common memory space through which all of the processors can communicate and share data. Multiprocessing sometimes refers to the execution of multiple concurrent software processes in a system as opposed to a single process at any one instant."
793
:
"Multitasking - In computing, multitasking is technique used in an operating system for sharing a single processor between several independent jobs. In the case of a computer with a single CPU, only one task is said to be running at any point in time, meaning that the CPU is actively executing instructions for that task. Multitasking solves the problem by scheduling which task may be the one running at any given time, and when another waiting task gets a turn. The act of reassigning a CPU from one task to another one is called a context switch. When context switches occur frequently enough the illusion of parallelism is achieved. Even on computers with more than one CPU, multitasking allows many more tasks to be run than there are CPUs."
794
:
"Multithreading - Multithreading typically refers to sharing a single CPU between multiple tasks (or "threads") in a way designed to minimise the time required to switch threads. This is accomplished by sharing as much as possible of the program execution environment between the different threads so that very little state needs to be saved and restored when changing thread. Multiple threads can be executed in parallel on many computer systems. This multithreading generally occurs by time slicing, wherein a single processor switches between different threads--in which case the processing is not literally "simultaneous", for the single processor is only really doing one thing at a time. On a multiprocessor system, threading can be achieved via multiprocessing, wherein different threads can run simultaneously on different processors."
795
:
"MusE - MusE is a MIDI/Audio sequencer program with recording and editing capabilities written by Werner Schweer. MusE aims to be a complete multitrack virtual studio for Linux (it currently has no support under other platforms, due to its reliance on JACK and ALSA). It is published under the GNU General Public License."
796
:
"MySQL - MySQL is a multithreaded, multi-user, SQL (Structured Query Language) Database Management System (DBMS). MySQL is open source software available either under the GNU General Public License (GPL) or under other licenses when the GPL is inapplicable to the intended use."
797
:
"Mystic BBS - Mystic BBS is a free (as in beer) bulletin board system software program written by the programmer James Coyle, better known by the pseudonym "g00r00". Started in 1994, Mystic is the first DOS-based BBS softare programs to support a native telnet server. It has since been ported to Microsoft Windows, OS/2 and Linux."
798
:
"Nagware - Nagware, also known as annoyware, is a type of shareware software. Other types of shareware include demoware, crippleware, freeware, adware, and even spyware. Nagware reminds or nags the user to register it by paying a fee. It usually does this by popping up a message when the user starts the program or, worse, intermittently while the user is using the application. These messages can appear as windows obscuring part of the screen or message boxes that can quickly be closed."
799
:
"Name Binding - In programming languages, name binding refers to the association of values with identifiers. An identifier bound to a value is said to reference that value. Since computers themselves have no notion of identifiers, there is no binding at the machine language level name binding is an abstraction provided by programming languages. Binding is intimately connected with scoping, as scope determines when binding occurs."
800
:
"Nanika - Nanika is a desktop accessory application developed by Sagawa Toyoaki. Nanika is composed of three parts: 'materia', which is the basic foundation of Nanika system; 'shell', which can be described as a skin; 'ghost', which is a pseudo-AI engine. Nanika is heavily influenced by Japanese anime, such as Kanon and Ghost in the Shell."
801
:
"NanoCAD - NanoCAD is a Java applet that was intended to eventually evolve into a useful computer-aided design system for nanotechnology. While that goal has yet to come to fruition, NanoCAD has at least influenced the direction of more advanced projects such as OpenChem and Fungimol."
802
:
"NASM: Netwide Assembler - Netwide Assembler(NASM) is a free software Intel x86 assembler. It can be used to write both 16-bit and 32-bit (IA-32) programs. 32-bit programs can be written for NASM in such a way that they are portable between any 32-bit x86 OSes, if the right libraries are used."
803
:
"Natural Docs - Natural Docs is a multi-language documentation generator written in Perl and licensed under the GPL. It attempts to keep the comments written in source code just as readable as the generated documentation. It is written and maintained by Greg Valure."
804
:
"Natural Language - Natural language refers to a language spoken or written by humans, as opposed to a language used to program or communicate with computers. Natural language understanding is one of the hardest problems of artificial intelligence due to the complexity, irregularity and diversity of human language and the philosophical problems of meaning."
805
:
"NetBSD - NetBSD is a freely redistributable, open source version of the Unix-like BSD computer operating system. It was the second open source BSD variant to be formally released, after 386BSD, and continues to be actively developed. Noted for its portability and quality of design and implementation, it is often used in embedded systems and as a starting point for the porting of other operating systems to new architectures."
806
:
"News Aggregator - A news aggregator refers to a system including software application, webpage or service that collects syndicated content using RSS and other XML feeds from weblogs and mainstream media sites. Aggregators improve upon the time and effort needed to regularly check websites of interest for updates, creating a unique information space or "personal newspaper." An aggregator is able to subscribe to a feed, check for new content at user-determined intervals, and retrieve the content. The content is sometimes described as being "pulled" to the subscriber, as opposed to "pushed" with email or other channels. Unlike recipients of some "pushed" information, the aggregator user can easily unsubscribe from a feed."
807
:
"NF: Normal Form - Normal Forms (NFs) are the structures and algorithms to normalize a relational database. One can only describe a database as having a normal form if the relationships between quantities have been rigorously defined. It is possible to use set theory to express this knowledge once a problem domain has been fully understood, but most database designers model the relationships in terms of an "idealized schema"."
808
:
"NLP: Natural Language Processing - Natural language processing(NLP) refers to the computer understanding, analysis, manipulation, and/or generation of natural language. NLP is a subfield of artificial intelligence and linguistics. It studies the problems of automated generation and understanding of natural human languages. Natural language generation systems convert information from computer databases into normal-sounding human language, and natural language understanding systems convert samples of human language into more formal representations that are easier for computer programs to manipulate."
809
:
"No-CD Crack - A No-CD crack is a special computer program used to play computer games without having to insert the CD-ROM.This act is a form of software cracking. No-CD cracks can be found on the Internet from many websites or other various filesharing networks."
810
:
"Nodezilla - Nodezilla is a peer-to-peer network software written in C++ and Java, released under the GNU General Public License. Technically, Nodezilla is a secured, distributed and fault-tolerant routing system (aka Grid network). Its main purpose is to serve as a link for distributed services built on top of it (like chat, efficient video multicasting streaming, File Sharing, secured file store."
811
:
"Non-code resource - Non-code resource is a resource containing the data structures on which the program operates, for example, 'WIND', 'DLOG', 'DITL', or 'SIZE' resources. The resource compiler Rez or a resource editor may be used to create non-code resources."
812
:
"Non-compressed sound data - Non-compressed sound data is the sampled-sound data that has not been subjected to audio compression or that has been decompressed."
813
:
"Nonlinear Programming - In mathematics, nonlinear programming (NLP) is the process of solving a system of equalities and inequalities over a set of unknown real variables, along with an objective function to be maximized or minimized."
814
:
"Non-Printable Character - Non-Printable Character is a character that doesn't have a corresponding character letter to its corresponding ASCII code. Examples would be the Linefeed, which is ASCII character code 10 decimal, the Carriage Return, which is 13 decimal, or the bell sound, which is decimal 7. On a PC, you can often add non-printable characters by holding down the Alt key, and typing in the decimal value. There are other character encoding schemes, but ASCII is the most prevalent."
815
:
"Non-Proprietary Software - Non-proprietary software, the opposite of proprietary software, refers to the software that has no proprietary restrictions attached to it, particularly the restriction about the access to the source code. Proprietary software is software where the source code has not been made available, or it is protected by restrictive licensing clauses. Non-proprietary software is not a widely used term and has no generally accepted definition. It is sometimes used as an umbrella term for the many alternative terms for free software.Â "
816
:
"Nonrelocatable Block - Nonrelocatable block is a block whose location in the heap is fixed. This block can't be moved during heap compaction or other memory operations."
817
:
"NonStop SQL - NonStop SQL is a relational database product originally produced at Tandem Computers using the pioneering Ingres source code from University of California, Berkeley. NonStop is the "brand name" for Tandem's suite of high-availabiliy products, a brand that survived Tandem's takeover by Compaq, and today after Compaq's takeover by HP."
818
:
"Nonvolatile Register - Nonvolatile register is a register whose contents must be preserved across subroutine calls. If a routine changes the value of a nonvolatile register, it must save the old value on the stack before changing the register and restore that value before returning."
819
:
"Normalization in Database - IIn relational databases, normalization is a process that eliminates redundancy, organizes data efficiently, reduces the potential for anomalies during data operations and improves data consistency. The formal classifications used for quantifying "how normalized" a relational database is are called normal forms."
820
:
"Novell ZENworks - Novell ZENworks, a suite of software products developed and maintained by Novell, Inc. for computer systems management, aims to manage the entire lifecycle of servers, of desktop PCs (both Windows-based and Linux-based), of laptops, and of handheld devices (such as PDAs)."
821
:
"NPL: Netscape Public License - The Netscape Public License (NPL) is an open-source license, one of the licenses under which Mozilla is distributed. Its most notable feature is that it gives the original developer of Mozilla (Netscape, now a subsidiary of Time Warner), the right to distribute modifications made by other contributors under whatever terms it desires, including commercial terms, without granting similar rights to those other contributors in respect of the contribution of the original developer."
822
:
"NuCalc - NuCalc, also known as Graphing Calculator, is the name of a computer software tool, made by the company Pacific Tech, capable of performing many graphing calculator functions. It can graph inequalities and vector fields, as well as functions in two, three, or four dimensions. It supports several different coordinate systems, and can solve equations. It is available for Mac OS (under the name Graphing Calculator) and Microsoft Windows."
823
:
"Numerical Analysis - Numerical analysis is the study of algorithms for the problems of continuous mathematics (as distinguished from discrete mathematics). Some of the problems it deals with arise directly from the study of calculus; other areas of interest are real variable or complex variable questions, numerical linear algebra over the real or complex fields, the solution of differential equations, and other related problems arising in the physical sciences and engineering."
824
:
"OATH: Object-Oriented Abstract Type Hierarchy - Object-oriented Abstract Type Hierarchy (OATH) is a class library for C++ from Texas Instruments."
825
:
"Object - Generally, Object refers to any item that can be individually selected and manipulated. In computer programming such as object-oriented programming, an object is an individual unit of run-time data storage that is used as the basic building block of programs. These objects act on each other, as opposed to a traditional view in which a program may be seen as a collection of functions, or simply as a list of instructions to the computer. Each object is capable of receiving messages, processing data, and sending messages to other objects. Each object can be viewed as an independent little machine or actor with a distinct role or responsibility."
826
:
"Object code - Object code, also known as object file, is an intermediate representation of code generated by a compiler after it processes a source code file. Object files contain compact, pre-parsed code, often called binaries, that can be linked with other object files to generate a final executable or code library. An object file is mostly machine code that can be directly executed by a computer's CPU. An object file contains not only the object code, but also relocation information that the linker uses to assemble multiple object files into an executable or library, program symbols (names of variables and functions), and debugging information."
827
:
"Object Model - An object model is a subkind of data model with primitive concepts identity, state, encapsulation, operations/methods, messages, inheritance, polymorphism/overloading. An object model deals to the properties of objects in general, in a specific computer programming language, technology, notation or methodology that uses them. For example, the Java object model, the COM object model, or the object model of OMT. Such object models are usually defined using concepts such as class, message, inheritance, polymorphism, and encapsulation. There is an extensive literature on formalized object models as a subset of the formal semantics of programming languages."
828
:
"Object Database - Object database refers to a type of database in which information is represented in the form of objects. The database management system for an object database is referred to variously as a ODBMS or OODBMS. Object database technologies becomes useful when: 1) a relational database becomes cumbersome to be used with complex data; 2) data is generally manipulated by application software written using object-oriented programming languages and tools such as C++, Java, Borland Delphi and C#, and the code needed to translate between this representation of the data, and the tuples of a relational database can be tedious to write and time-consuming to execute."
829
:
"Object Pool - An object pool is a set of initialised objects that are kept ready to use, rather than allocated and destroyed on demand. A client of the pool will request an object from the pool and perform operations on the returned object. When the client has finished with an object, it returns it to the pool, rather than destroying it. It is a specific type of factory object. Object pooling can offer a significant performance boost; it is most effective in situations where the cost of initializing a class instance is high, the rate of instantiation of a class is high, and the number of instantiations in use at any one time is low."
830
:
"Object-SQL Mapping - Object-SQL mapping, also known as object-relational mapping(O/RM), is a programming technique that links SQL databases to object-oriented language concepts, creating (in effect) a "virtual object database." There are both free and commercial packages available that perform object-SQL mapping, although some programmers opt to code their own object-SQL mapping for their systems."
831
:
"Objectworks - Objectworks is an object-oriented development environment developed by ParcPlace, available under Smalltalk and C++."
832
:
"OD390 - OD390 is a Customer Information Control System (CICS) Web interperter from IBM used for application development involving web interfaces to DB2 tables."
833
:
"ODA: Open Document Architecture - Open Document Architecture (ODA), formerly called Office Document Architecture, is an ISO standard that specifies how documents are represented and transmitted electronically."
834
:
"ODBC: Open Database Connectivity - Open Database Connectivity (ODBC) is a common framework for accessing and altering the contents of databases. It allows developers to use the same coding conventions regardless of the actual database platform implemented on the backend. When a new database type is installed, administrators merely need to install an ODBC driver that supports that platform and existing ODBC software should function normally. ODBC provides a standard software API method for using database management systems (DBMS). The designer of ODBC aimed to make it independent of programming language, database system and operating system."
835
:
"ODBMS: Object Database Management System - Object Database Management System (ODBMS), also known as Object Oriented Database Management System (OODBMS), refers to the database management system for an object database. Benchmarks between ODBMSs and relational DBMSs have shown that ODBMS can be clearly superior for certain kinds of tasks. The main reason for this is that many operations are performed using navigational rather than declarative interfaces, and navigational access to data is usually implemented very efficiently by following pointers. Critics of ODBMS, suggest that pointer-based techniques are optimized for very specific "search routes" or viewpoints. However, for general-purpose queries on the same information, pointer-based techniques will tend to be slower and more difficult to formulate than relational."
836
:
"ODNT: Object Desktop Network - The Object Desktop Network (OD or ODNT) is a software subscription service created by Stardock. Launched in 1995 on OS/2, it transitioned in 1997/98 to the Windows platform. Subscribers typically download Object Desktop components across the Internet using Stardock Central, although CD snapshots are available on request. Once downloaded, users may use released versions of components forever."
837
:
"O.K.I.: Open Knowledge Initiative - The Open Knowledge Initiative (O.K.I.) is an organization responsible for the specification of software interfaces comprising a Service Oriented Architecture (SOA) based on high level service definitions. The Open Knowledge Initiate was initially sponsored by the Andrew W. Mellon Foundation, Massachusetts Institute of Technology and the IMS Global Learning Consortium. O.K.I. has designed and published a suite of software interfaces known as Open Service Interface Definitions (OSIDs), each of which describes a logical computing service."
838
:
"OLAP: Online Analytical Processing - Online Analytical Processing is a type of software that allows for the real-time analysis of data stored in a database. It is an approach to quickly provide the answer to analytical queries that are dimensional in nature. The OLAP server is normally a separate component that contains specialized algorithms and indexing tools to efficiently process data mining tasks with minimal impact on database performance. The typical applications of OLAP are in business reporting for sales, marketing, management reporting, business performance management (BPM), budgeting and forecasting, financial reporting and similar areas."
839
:
"OLE: Object Linking and Embedding - Object Linking and Embedding(OLE), a technology developed by Microsoft, enables the creation of documents by incorporating elements created using different kinds of software. Object Linking and Embedding system allow objects from one application to be embedded within another (eg, taking an Excel spreadsheet and putting it into a Word document)."
840
:
"OLTP: Online Transaction Processing (OLTP) - Online Transaction Processing (or OLTP) is a class of program that facilitates and manages transaction-oriented applications, typically for data entry and retrieval transaction processing. OLTP also refers to computer processing in which the computer responds immediately to users' requests. An automatic teller machine for a bank is an example of transaction processing. Probably the most widely installed OLTP product is IBM's CICS (Customer Information Control System)."
841
:
"OMG: Object Management Group - Object Management Group (OMG) is a consortium, originally aimed at setting standards for distributed object-oriented systems, and now focused on modeling (programs, systems and business processes) as well as model-based standards in some 20 vertical markets. Founded in 1989 by eleven companies (including Hewlett-Packard Company, Apple Computer, American Airlines and Data General), OMG mobilized to create a cross-compatible distributed object standard. The goal was a common portable and interoperable object model with methods and data that work using all types of development environments on all types of platforms. At its founding, OMG set out to create the initial Common Object Request Broker Architecture (CORBA) standard which appeared in 1991."
842
:
"OmniPage Professional - OmniPage Professional is a software used in conjunction with a scanner, to scan pictures or documents into the computer."
843
:
"OO Language: Object-Oriented Language - Object-oriented language (OO language) is a type of computer programming language that allows or encourages, to some degree, object-oriented programming methods. OO languages can be grouped into several broad classes, determined by the extent to which they support all features and functionality of object-orientation and objects: classes, methods, polymorphism, inheritance, and reusability."
844
:
"OODBMS: Object Oriented Database Management System - Object Oriented Database Management System (OODBMS), also known as Object Database Management System (ODBMS), refers to the database management system for an object database. Benchmarks between ODBMSs and relational DBMSs have shown that ODBMS can be clearly superior for certain kinds of tasks. The main reason for this is that many operations are performed using navigational rather than declarative interfaces, and navigational access to data is usually implemented very efficiently by following pointers. Critics of ODBMS, suggest that pointer-based techniques are optimized for very specific "search routes" or viewpoints. However, for general-purpose queries on the same information, pointer-based techniques will tend to be slower and more difficult to formulate than relational ones."
845
:
"OOP: Object-Oriented Programming - Object-oriented programming(OOP) is a computer programming paradigm, in which writing programs in one of a class of programming languages and techniques based on the concept of an "object" which is a data structure (abstract data type) encapsulated with a set of routines, called "methods" which operate on the data. Operations on the data can only be performed via these methods, which are common to all objects which are instances of a particular "class". Thus the interface to objects is well defined, and allows the code implementing the methods to be changed so long as the interface remains the same. The programming languages support object-oriented programming, including the Java platform and the .NET Framework."
846
:
"Open Group - The Open Group is an industry consortium that sets vendor- and technology-neutral open standards for computing infrastructure. It was formed when X/Open merged with the Open Software Foundation in 1996. The Open Group is known for its experience in facilitating consensus to develop and evolve standards and best practices. It operates a number of certification programs, including certification for Common Operating Environment (COE) Platform, CORBA, Directory, IT Architects, Linux Standard Base, POSIX, Schools Interoperability Framework (SIF), TOGAF, UNIX, and Wireless Application Protocol (WAP). The Open Group is also the owner of the UNIX trademark."
847
:
"OPEN LOOK - OPEN LOOK or OpenLook was an early graphical user interface (GUI) specification developed by Sun Microsystems and AT&T in the early 1990s for UNIX workstations. It had its origins in SunOS 2.1, SunView, and Sun's Motorola 68000â€“based UNIX workstations."
848
:
"Open Outsourcing - Open outsourcing, a socio-economic movement resulting from the open source movement and the international outsourcing of programming, refers to a practice of making open source technologies more accessible to businesses and individuals by employing an inexpensive international labor force of programmers, often on a contractual piecework basis. Small businesses may not be technical enough to efficiently utilize open source resources in-house or large enough to hire a full time technician. Larger businesses with IT staff may lack technicians with specific skills or knowledge."
849
:
"Open Source - Open source refers to practices in production and development of software by a public development community(typically volunteers from many organizations) rather than a single vendor. The source code of open source software is free and available to anyone who would like to use it or modify it for their own purposes. This allows an organization to add a feature itself rather than hope that the vendor of a proprietary product will implement its suggestion in a subsequent release. Some consider open source as a philosophy, and others consider it as a pragmatic methodology of software development."
850
:
"Open Source Movement - The open source movement is an offshoot of the free software movement that advocates open-source software as an alternative label for free software, primarily on pragmatic rather than philosophical grounds."
851
:
"Open64 - Open64 is an open source optimizing compiler for Intel Itanium platform. It was released by SGI company and now mostly serves as a research platform for compiler and computer architecture research groups."
852
:
"OpenBSD - OpenBSD is a secure, freely available, multi-platform BSD-based Unix-like operating system. OpenBSD specialises in security and correctness. Its developers carefully and proactively audit the system's code, which in turn contributes to the stability and security of OpenBSD. The project is led by Theo de Raadt from Calgary, Alberta, Canada."
853
:
"OpenBSM - OpenBSM is an open source implementation of Sun's Basic Security Module (BSM) Audit API and file format. BSM, which is a system used for auditing, describes a set of system call and library interfaces for managing audit records as well as a token stream file format that permits extensible and generalized audit trail processing."
854
:
"OpenC++ - OpenC++ is a software tool to parse and analyze C++ source code. It uses a metaobject protocol (MOP) to provide services for language extensions."
855
:
"OpenDoc - OpenDoc is a multi-platform software componentry framework standard for compound documents, inspired by the Xerox Star system and intended as an alternative to Microsoft's Object Linking and Embedding (OLE). OpenDoc makes it possible to design independent programs (components) that can work together on a single document. OpenDoc is being developed by a loose alliance of companies, including Apple Computer and IBM."
856
:
"OpenGL: Open Graphics Library - Open Graphics Library(OpenGL) is a standard specification defining a cross-language cross-platform API for writing applications that produce 3D computer graphics (and 2D computer graphics as well). The interface consists of over 250 different function calls which can be used to draw complex three-dimensional scenes from simple primitives. OpenGL was developed by Silicon Graphics and is popular in the video games industry where it competes with Direct3D on Microsoft Windows platforms. OpenGL is widely used in CAD, virtual reality, scientific visualization, information visualization, flight simulation and video game development."
857
:
"OpenKore - OpenKore is a roBOTic computer controlled entity (bot) designed for use with the Ragnarok MMORPG with the intention of automated playing and/or leveling. OpenKore is an advanced bot created by VCL as a variation of one of the most popular Ragnarok Online bots, Kore. Its code is written in Perl, and possesses a command line interface. OpenKore is a fully free and open-source project."
858
:
"OpenNTPD - OpenNTPD is a Unix system daemon that uses the Network Time Protocol to synchronise clocks of computer systems with a reliable and accurate time source. OpenNTPD was developed as part of the OpenBSD project. Its design goals include creating a daemon that is secure (non-exploitable), easy to configure and to have source code that can be distributed under a BSD license."
859
:
"OpenROAD: Open Rapid Object Application Development - Open Rapid Object Application Development(OpenROAD) is a 4GL development language which includes a suite of development tools, with built-in IDE, Code Repository, allowing applications to be developed and deployed on various platforms. The syntax of OpenROAD is very closely linked to that of the Ingres database, with direct support for embedded SQL. In a similar way to other event based programming languages, code can be placed in groups for related windows/system events. Ingres Corporation owns and provides support and services for Ingres, OpenROAD and the connectivity products."
860
:
"OpenSolaris - OpenSolaris is an open source project created by Sun Microsystems to build a developer community around the Solaris Operating System technology. The project is aimed at developers, system administrators, and users who want to develop and improve operating systems."
861
:
"Open-Source License - An open-source license is a copyright license for computer software that makes the source code available under terms that allow for modification and redistribution without having to pay the original author. Such licenses may have additional restrictions such as a requirement to preserve the name of the authors and the copyright statement within the code. One popular (and sometimes considered normative) set of open source licenses are those approved by the Open Source Initiative (OSI) based on their Open Source Definition (OSD)."
862
:
"OpenTracker - OpenTracker refers to the open source versions of the Tracker and Deskbar desktop management tools for BeOS. The original Tracker and Deskbar were created by Be, Incorporated, as part of BeOS, but were opensourced in late 2000. It is under the OpenTracker Licence, which is a barely modified BSD licence that allows the use of the Be trademark Tracker to be used."
863
:
"Operating Environment - Operating environment is the environment in which users run programs, whether in a command line interface, such as in MS-DOS, or in a graphical user interface, such as in the Macintosh operating system or Windows. There is a thin line between operating environments and shells (such as Unix shell). Historically, shells are the interfaces to operating systems. They do not actually add any new capabilities; they simply provide a better user interface. So-called intelligent shells, however, actually extend an operating system's capabilities, so there is little difference between intelligent shells and operating environments."
864
:
"OPS5: Official Production System - Official Production System (OPS5) is a rule-based or production system computer language, notable as the first such language to be used in a successful expert system, the R1/XCON system used to configure VAX computers. The first implementation of OPS5 was written in Lisp, and later rewritten in BLISS for speed."
865
:
"Oracle Database - Oracle database is a relational database management system (DBMS) from Oracle, which runs on more than 80 platforms. The Oracle database, the current version of which is Oracle11i, is Oracle's flagship product. It was introduced in the late 1970s and was the first database product to run on a variety of platforms from micro to mainframe computers."
866
:
"ORB: Object Request Broker - An object request broker (ORB), a term in distributed computing, is a piece of middleware software that allows programmers to make program calls from one computer to another, via a network. ORBs handle the transformation of in-process data structures to the byte sequence which is transmitted over the network (of course, also the reverse transformation). This is called marshalling or serialization. ORBs often expose many more features, such as distributed transactions, directory services or real-time scheduling. In the object oriented languages, the ORB is an object, having methods to connect the objects being served. After such an object is connected to the ORB, the methods of that object become accessible for remote invocations. ORB must also have some means to obtain the network address of the object that has now become remote. The typical ORB also has many other methods."
867
:
"ORD: Object-Relational Database - An object-relational database (ORD) is a relational database that allows developers to integrate the database with their own custom data types and methods. The term object-relational database is sometimes used to describe external software products running over traditional DBMSs to provide similar features; these systems are more correctly referred to as object-relational mapping systems."
868
:
"ORDBMS: Object-Relational Database Management System - Object-relational database management system (ORDBMS) is a relational database management system that allows developers to integrate the database with their own custom data types and methods. Whereas RDBMS or SQL-DBMS products focused on the efficient management of data drawn from a limited set of data types (defined by the relevant language standards), an object-relational DBMS allows software developers to integrate their own types and the methods that apply to them into the DBMS. The goal of ORDBMS technology is to allow developers to raise the level of abstraction at which they view the problem domain."
869
:
"OS/2: Operating System/2 - Operating System/2 (OS/2) is an operating system created by Microsoft and IBM, later developed by IBM exclusively. OS/2 is no longer marketed by IBM, and support for OS/2 is to be discontinued on December 31, 2006."
870
:
"OS: Operating System - Operating system (OS) is a software program that manages the hardware and software resources of a computer. The OS performs basic tasks, such as controlling and allocating memory, prioritizing the processing of instructions, controlling input and output devices, facilitating networking, and managing files. The OS may be split into a kernel which is always present and various system programs which use facilities provided by the kernel to perform higher-level house-keeping tasks, often acting as servers in a client-server relationship."
871
:
"OSD: Open Source Definition - The Open Source Definition(OSD) is used by the Open Source Initiative(OSI) to determine whether or not a software license can be considered open source. The definition was based on the Debian Free Software Guidelines, written and adapted primarily by Bruce Perens. Under the Open Source Definition, licenses must meet ten conditions in order to be considered open source licenses."
872
:
"OSF: Open Software Foundation - Open Software Foundation (OSF) is an organization to create an open standard for an implementation of the Unix operating system. OSF's standard Unix implementation was known as OSF/1 and was first released in 1990, which is not widely deployed. Other well-known standards developed by OSF include Motif and the Common Desktop Environment, respectively a widget toolkit and desktop environment for the X Window System. In 1996, OSF merged with the X/Open Company to become The Open Group."
873
:
"OSI: Open Source Initiative - The Open Source Initiative (OSI) is an organization dedicated to promoting open-source software. Open Source Initiative was founded in February 1998 by Bruce Perens and Eric S. Raymond when Netscape Communications Corporation, published the source code for its flagship Netscape Communicator product as free software, due to lowering profit margins and competition with Microsoft's Internet Explorer software."
874
:
"OSID: Open Service Interface Definition - Open Service Interface Definitions (OSIDs) are programmatic interface specifications describing services. These interfaces are specified by the Open Knowledge Initiative (O.K.I.) to implement a Service-Oriented Architecture (SOA) to achieve interoperability among applications across a varied base of underlying and changing technologies."
875
:
"OSS/J: OSS Through Java - Operations Support System(OSS) through Java (OSS/J) is a kind of middleware to connect different OSS information systems by using Java technologies. The OSS/J initiative has been founded in 2000 by several members. Their primary goal is to develop an open standard for the integration of Operations Support Systems."
876
:
"OSS: Open Sound System - The Open Sound System (OSS) is a portable sound interface available in 11 different Unix systems. In the case of the Linux kernel, OSS was the only supported sound system used up to the 2.4.x series. Starting with version 2.5, the Advanced Linux Sound Architecture (ALSA) was introduced, and the OSS interface became deprecated by Linux' authors. ALSA contains an optional OSS emulation mode that transparently appears to programs as if it were OSS."
877
:
"OSS: Open-Source Software - Open-source software(OSS) is a type of computer software whose source code is available under a copyright license that permits users to study, change, and improve the software, and to redistribute it in modified or unmodified form. Benefits of OSS are that developers can customize programs, and these innovations, in turn, are shared within the programming community so that everyone learns from each other. Linux is one popular example of OSS."
878
:
"Outliner - An outliner is a special text editor that allows the grouping of text in sections that are organized in a tree (hierarchy) of concepts, an outline. Outline tools can be used for computer programming, collecting or organizing ideas, or project management."
879
:
"p7zip - p7zip is a port of the command line version of the 7-Zip file archiverfamous for its introduction of the high-compression 7z formatto POSIX-conforming operating systems, such as Unix, Linux, Windows NT (or greater version) and Mac OS X. It is free software, available under the LGPL free software license."
880
:
"Packaged Software - Packaged software refers to a commercial application program or collection of programs developed to meet the needs of a variety of users, rather than custom designed for a specific user or company. Packaged software is normally put on a CD (or disks), packaged in a box and sold to the general public."
881
:
"Page Recognition - Page recognition is a feature of software to recognize different kinds of items on a scanned page. Page recognition software can distinguish text from pictures, and converts text on the page into computer characters by means of optical character recognition (OCR)."
882
:
"Paint Program - Paint program is a type of application that allows a user to "paint" on the computer screen. Using a mouse or other pointer, the user can select from various drawing and painting tools such as brushes, spray cans, etc. and a full palette of colors. The paint program allows the user to control the color of each pixel. Sophisticated graphics editing capabilities such as screens, filters, etc., can be used. Example ofpaint program include Adobe Illustrate and Coral Draw."
883
:
"Parallel Algorithm - In computer science, a parallel algorithm, as opposed to a traditional serial algorithm, is one which can be executed a piece at a time on many different processing devices, and then put back together again at the end to get the correct result."
884
:
"Parallel Compiler - Parallel compiler is a type of computer compiling technique that is used to speed up the process of compilation on multiprocessor machines. Parallel compilers are developed for supercomputers and other large scale multiprocessor machines."
885
:
"Parallel Computing - Parallel computing is the simultaneous execution of the same task (split up and specially adapted) on multiple processors or multiple computers in order to obtain results faster. The idea is based on the fact that the process of solving a problem usually can be divided into smaller tasks, which may be carried out simultaneously with some coordination. A subtype of parallel algorithms, distributed algorithms are algorithms designed to work in cluster computing and distributed computing environments, where additional concerns beyond the scope of "classical" parallel algorithms need to be addressed."
886
:
"Parallel Port - Parallel port, also called a female connector, is a socket on a computer for transmitting data in parallel, or more than one bit at a time. There may be eight, 16, or 36 channels; each channel carries one bit of information, so eight channels would be used to transmit one eight-bit byte at a time. Not all the channels are used for data; some maybe used for control signals. A parallel port has 25 holes, and the cable that plugs into it has 25 pins."
887
:
"Parallel Processing - Parallel processing is a computing architecture within a single computer that performs more than one operation at the same time. Parallel processing can also be achieved by using multiple computers clustered together to procss one part of a large function simultaneously to obtain results faster."
888
:
"Parallel Terraced Scan - The parallel terraced scan is a multi-agent based search technique that is basic to cognitive architectures, such as copycat, letter-string, the examiner, tabletop, and others. It was developed by John Rehling and Douglas Hofstadter at the Center for Research on Concepts and Cognition at the Indiana University, Bloomington."
889
:
"Parser Program - Parser is a computer program to conduct parsing process to determine the syntactic structure of a sentence or string of symbols in some languages. A parser normally takes as input a sequence of tokens output by a lexical analyser. It may produce some kind of abstract syntax tree as output. One of the best known parser generators is yacc."
890
:
"Parsing Process - Parsing process, also known as syntax analysis, refers to the analyzing an input sequence (read from a file or a keyboard, for example) in order to determine its grammatical structure with respect to a given formal grammar. Parsing process transforms input text into a data structure, usually a tree, which is suitable for later processing and which captures the implied hierarchy of the input. Generally, parsers operate in two stages, first identifying the meaningful tokens in the input, and then building a parse tree from those tokens."
891
:
"Partial Evaluation - Partial evaluation is a technique for program compiling optimization. During compiling, partial evaluation transforms and pre-computes the static data, part of the input data known at compile time, into dynamic data, which in general runs more efficiently."
892
:
"Pascal programming Language - Pascal pogramming language is a high-level programming language developed by Niklaus Wirth in the late 1960s based on ALGOL, and named after Blaise Pascal, a seventeenth-century French mathematician who constructed one of the first mechanical adding machines. Pascal is best known for its affinity to structured programming techniques. The nature of the language forces programmers to design programs methodically and carefully. For this reason, it is a popular teaching language."
893
:
"Patch - A patch, so called a service patch or software pacth, refers to a fix to a program bug. A patch is an actual piece of object code that is inserted into (patched into) an executable program. Patches typically are available as downloads over the Internet."
894
:
"Pattern Matching - Pattern matching is the act of checking for the presence of the constituents of a given pattern. In contrast to pattern recognition, the pattern is rigidly specified. Such a pattern concerns conventionally either sequences or tree structures. Pattern matching is used to check that things have the desired structure, to find relevant structure, to retrieve the aligning parts, and to substitute the matching part with something else."
895
:
"Payware - Payware is a type of Internet downloadable software that has a price and is on sale. It is a commercial software not freeware or shareware."
896
:
"PC Weenies - The PC Weenies is a popular webcomic with a special focus on technology humor and geek culture, as experienced through the lives of the fictitious Weiner family. The PC Weenies was created and launched on the web in October 1998 by Krishna M. Sadasivam, a former electrical engineer. The series has enjoyed success in web and print media. Most notably, The PC Weenies was the first webcomic to appear regularly on CNET. Currently, The PC Weenies appear in both Tau Beta Pi's The BENT publication, as well as EE Times."
897
:
"PCBoard - PCBoard was an MS-DOS / OS/2 bulletin board system (BBS) software package first created by the Clark Development Corporation, first introduced in 1983. Clark Development pioneered the FILE_ID.DIZ format as well as a powerful scripting language (PPL) which supported modifications called PPEs (PCBoard Programming Executable)."
898
:
"PC-BSD - PC-BSD is a Unix-like, desktop-oriented operating system based on FreeBSD. It aims to be easy to install by using a graphical installation program, and easy- and ready-to-use immediately by providing KDE as the default, pre-installed graphical user interface. The PC-BSD project is currently developing a graphical software installation program which will install pre-built software packages"
899
:
"PC-DOS: Personal Computer-Disk Operating System - Personal Computer-Disk Operating System(PC-DOS) is an operating system developed by Microsoft and supplied with IBM PCs. Microsoft also developed MS-DOS, a very similar operating system, to be used with non-IBM PCs. Starting with DOS 6, MS-DOS and PC-DOS have different sets of auxiliary utility programs. MS-DOS and PC-DOS are both called DOS for short."
900
:
"PCL: Printer Control Language - Printer Control Language (PCL) is the page description language (PDL) developed by HP that has become a de facto industry standard. Originally developed for early inkjet printers in 1984, PCL has been released in varying levels for thermal, dot matrix printer, and laser printers. PCL 5 and later versions support a scalable font technology called Intellifont."
901
:
"PCMS: Platform Content Management System - Platform Content Management System (PCMS), a type of content management system, provides the ability to manage all objects (files, folders, programs, etc) on a given set of systems."
902
:
"PDF: Portable Document Format - Portable Document Format(PDF) is the native file format for Adobe Systems' Acrobat. The PDF file format is independent of the original application software, hardware, and operating system used to create those documents. A PDF file can describe documents containing any combination of text, graphics, and images in a device-independent and resolution independent format."
903
:
"PDL: Page Description Language - Page Description Language(PDL) is a type of printer language that allows the appearance of a printed page to be described in a high-level, device-independent way. Using PDL, printing then becomes a two-stage process: an application program produces a description in the language, which is then interpreted by a specific output device. Page Description Language can therefore serve as an interchange standard for transmission and storage of printable documents. Examples of PDL are Adobe Systems, Inc.'s PostScript or Xerox's Interpress."
904
:
"PEEK and POKE - In computing, PEEK is a BASIC programming language function used for reading the contents of a memory cell at a specified address. The corresponding command to set the contents of a memory cell is POKE."
905
:
"Peephole Optimization - Peephole optimization is a kind of optimization performed over a very small set of instructions in a segment of generated code. The set is called a "peephole" or a "window". This kind of optimization makes certain assumptions about the efficiency of instructions. Modern computer architectures typically allow for many hundreds of different kinds of peephole optimizations, and it is therefore often appropriate for compiler programmers to implement them using a pattern matching algorithm."
906
:
"People Aggregator - A people aggregator is a social networking system derived from FOAF that uses open standards, network interconnectivity, and massive flexibility to decentralise social networking on the internet."
907
:
"Per Seat - Per seat is a way of licensing software based on the number of workstations on which it will be installed and used."
908
:
"Perl: Practical Extraction and Reporting Language - Perl (Practical Extraction and Reporting Language) is a script programming language that is similar in syntax to the C language and that includes a number of popular Unix facilities such as sed, awk, and tr."
909
:
"PHP Hypertext Preprocessor - PHP Hypertext Preprocessor(PHP) is an open-source, reflective programming language. Originally designed as a high level scripting language for producing dynamic Web pages, PHP is used mainly in server-side application software. PHP allows web developers to create dynamic content that interacts with databases. PHP applications are normally found on Linux servers and in conjunction with MySQL databases. It provides those servers with functionality similar to that provided to the Windows platform by Active Server Pages technology."
910
:
"PHPEdit - PHPEdit is a commercial Integrated Development Environment (IDE) developed by the PHPEdit Group. It runs on the Microsoft Windows operating system, and is designed mainly for the PHP language."
911
:
"Physalis - Physalis is a project to build software that allows users to run a service framework (OSGi-like) on top of Microsoft .NET capable devices and computers. It is also supposed to work with the .NET Compact Framework and thus support diverse embedded devices like Pocket PCs, Smart Phones and custom solutions based on the Windows CE embedded operating system."
912
:
"PID: Process Identifier - Process identifier(PID) is an integer used by the Unix kernel to uniquely identify a process. PIDs are returned by the fork system call and can be passed to wait() or kill() to perform actions on the given process."
913
:
"Piracy - Software piracy refers to the illegal copying, distribution, or use of software."
914
:
"PKZIP: Phil Katz's ZIP - Phil Katz's ZIP (PKZIP) program is an archiving tool originally written by the late Phil Katz, and marketed by his company PKWARE, Inc. The first version of PKZIP appeared in 1989. It was a DOS command-line tool and was distributed as shareware."
915
:
"Planner Programming Language - Planner programming language designed by Carl Hewitt at MIT in 1969. First subsets such as Micro-Planner and Pico-Planner were implemented and then essentially the whole language was implemented in Popler and derivations such as QA-4, Conniver, QLISP and Ether were important tools in Artificial Intelligence research in the 1970's, which influenced the commercial developments of KEE and ART."
916
:
"Plugin or Plug-In - A plugin (or plug-in) is a type of computer programs that interacts with a main application (a web browser or an email program, for example) to provide a certain, usually very specific, function. Typical examples are plugins that read or edit specific types of files (for instance, multimedia files); encrypt or decrypt email (for instance, PGP); filter images in graphic programs."
917
:
"Podcatcher - A podcatcher is a computer program used to automatically download podcasts. It is a form of aggregator, and can also transfer received audio files to a portable media player. For example, the iTunes by Apple Computers, is a Podcatcher."
918
:
"Polyfont Recognition - Polyfont recognition, a term often used with OCR software, refers to the capability of computer software to read (or recognize) more than one type of font on a document."
919
:
"Portable Software - Portable software refers to a type of software that can be used on more than one hardware platform, and easily switched from one to another."
920
:
"POSIX: Portable Operating System Interface - Portable Operating System Interface(POSIX) is a set of IEEE standards (1003) designed to provide application portability between Unix variants. IEEE 1003.1 defines a Unix-like operating system interface, IEEE 1003.2 defines the shell and utilities and IEEE 1003.4 defines real-time extensions."
921
:
"Postgres - Postgres is an object-oriented relational database management system (OORDBMS). It began as a research project at the University of California, Berkely and is available in several free and commercial versions today."
922
:
"PostScript - PostScript, a Page Description Language(PDL), is an interpreted, stack-based language (like FORTH). It was used as a page description language by the Apple LaserWriter, and now many laser printers and on-screen graphics systems. Its primary application is to describe the appearance of text, graphical shapes and sampled images on printed or displayed pages."
923
:
"POV-Ray: Persistence of Vision Raytracer - Persistence of Vision Raytracer (POV-Ray) is a free ray tracing program available for a variety of computer platforms. It was originally based on DKBTrace, written by David K. Buck and Aaron A. Collins."
924
:
"PowerAnimator - PowerAnimator, the precursor to what is now Maya and StudioTools, was an expensive, complex, highly-integrated industrial 3D modeling, animation, and visual effects suite. It was the most widely used non-proprietary software in the visual effects and animation industries, and as such, it has had a long track record, starting with Terminator 2 in 1990 and ending in Star Wars Episode I: The Phantom Menace in 1999. PowerAnimator ran natively on MIPS based SGI Irix systems up until the late 1990s, when it was ported to the NT platform."
925
:
"PowerArchiver - PowerArchiver is a commercial file archiver designed for Microsoft Windows users, developed by ConexWare Inc. It uses eg. 7-Zip format, and can also handle a number of other archive formats. It is a commercial product with a free evaluation version."
926
:
"PowerBASIC - PowerBASIC is a dialect of the BASIC programming language, based on the Turbo Basic. Its syntax is similar to that of FreeBasic, GW Basic, QBasic and Turbo Basic. PowerBASIC compilers compile to a pure binary form (native code), without an interpreter at all involved. PowerBASIC programs also don't require any external DLLs to run (unless the programmer deliberately designs them to do so). The executable files they create are almost as compact as those written directly in Assembly Language, run fast, and require no runtime files. Unlike Visual Basic (for example) with its large runtime overhead, it is common for a sophisticated application written in PowerBASIC to be so small that it fits on a diskette."
927
:
"PPM: Project Portfolio Management - Project portfolio management (PPM) refers to a software package that enables corporate and business users to organize a series of projects into a single portfolio that will provide reports based on the various project objectives, costs, resources, risks and other pertinent associations. Project portfolio management software allows the user, usually management or executives within the company, to review the portfolio which will assist in making key business decisions for the projects."
928
:
"PRE: Partial Redundancy Elimination - Partial redundancy elimination (PRE) is a compiler optimization that eliminates expressions that are redundant on some but not necessarily all paths through a program. PRE is a form of common subexpression elimination (CSE)."
929
:
"Preemptive - Preemptive is a practice of an operating system if it allows the running task to be suspended when a task of higher priority becomes ready (or a task of equal priority is granted a turn). Non-preemptive schedulers are easier to be implemented but less appropriate for embedded systems, which must be responsive to external events"
930
:
"Pre-Emptive Multitasking - Pre-emptive multitasking, also known as preemptive multithreading, is a form of multitasking where the scheduler can interrupt and suspend ("swap out") the currently running task in order to start or continue running ("swap in") another task. The tasks under pre-emptive multitasking can be written as though they were the only task and the scheduler decides when to swap them. The scheduler must ensure that when swapping tasks, sufficient state is saved and restored that tasks do not interfere. Preemptive multitasking allows the computer system to more reliably guarantee each process a regular "slice" of operating time. It also allows the system to rapidly deal with important external events like incoming data, which might require the immediate attention of oneor another process."
931
:
"Preprocessor - A preprocessor is a program that takes text and performs lexical conversions on it. The conversions may include macro substitution, conditional inclusion, and inclusion of other files."
932
:
"Priority Inversion - Priority inversion is the scenario in which a high-priority task is delayed while waiting for access to a shared resource that is not even being used at the time. This causes the execution of the high priority task to be blocked until the low priority task has released the resource, effectively "inverting" the relative priorities of the two tasks. If some other medium priority task attempts to run in the interim, it will take precedence over both the low priority task and the high priority task."
933
:
"Pro Tools - Pro Tools is a Digital Audio Workstation (DAW) by Digidesign for music production and digital audio editing. It is widely used by music and Post professionals in television, and music and serves as the de facto standard in those industries. Pro Tool is one of the first programs to provide CD-quality (16-bit and 44.1 kHz) multitrack editing on a personal computer."
934
:
"Procedural Language - Procedural language, a term used in contrast to declarative language, describes a language where the programmer specifies an explicit sequences of steps to follow to produce a result. Common procedural languages include Basic, Pascal, C and Modula-2."
935
:
"Procedure - Procedure, in Computer Programming, also called routine, subroutine, and function, is a section of a program that performs a specific task."
936
:
"Procedure Programing - Procedural programming refers to a programming paradigm based upon the concept of the procedure call. Procedures, also known as routines, subroutines, methods, or functions simply contain a series of computational steps to be carried out. Any given procedure might be called at any point during a program's execution, including by other procedures or itself. Procedural programming is often a better choice than simple sequential or unstructured programming in many situations which involve moderate complexity or which require significant ease of maintainability."
937
:
"Processor-Independent Software - Processor-independent software refers to a type of software that is independent of the processor (or CPU) on which it will be run. Most programs that can be written in a high-level language are processor independent."
938
:
"Processor-Specific Software - Processor-specific software is a type of software that is dependent on the processor(or CPU) on which it will be run. Such code must usually be written in assembly language. Poor design can make a high-level language program processor specific; careless assumptions about the size of longs and ints in C, for example, or explicit accesses to memory that create a particular endianness limit portability."
939
:
"Profiler - In computer programming, a profiler is a performance analysis tool that measures the behavior of a program as it runs, particularly the frequency and duration of function calls. The output is a stream of recorded events (a trace) or a statistical summary of the events observed (a profile). These statistics include the number of calls to each subroutine and the total amount of time spent within each. This data can be used to learn which subroutines are the most critical and, therefore, demand the greatest code efficiency. Profilers use a wide variety of techniques to collect data, including hardware interrupts, code instrumentation, operating system hooks, and performance counters."
940
:
"Program - In computer science, a program, also known as computer program, software, applications program, system software, or software progam, is an organized list of instructions that, when executed, causes the computer to behave in a predetermined manner."
941
:
"Programming Language - A programming language is an artificial language that can be used to control the behavior of a machine (often a computer). Programming languages have syntactic and semantic rules used to define meaning. Programming languages are used to facilitate communication about the task of organizing and manipulating information, and to express algorithms precisely. Programming language usually refers to high-level languages, such as BASIC, C, C++, COBOL, FORTRAN, Ada, and Pascal. Each language has a unique set of keywords (words that it understands) and a special syntax for organizing program instructions. Each different type of CPU has its own unique lower level language, also known as machine language."
942
:
"Programming Macro - Programming macro is a type of macro that takes a computer program as input and output a new, expanded program. Hence, this process is called macro-expansion and the tool that does this is called a macro-expander. For many programming languages, a macro expander is included in the interpreter or compiler. These macros are typically used to enable a higher level of abstraction in programming languages."
943
:
"Programming Tool - Programming tool, also known as Software tool, is a program or application that software developers use to create, debug, or maintain other programs and applications. The term usually refers to relatively simple programs that can be combined together to accomplish a task, much as one might use multiple hand tools to fix a physical object."
944
:
"Prolog - Prolog is a logic programming language. It was created by Alain Colmerauer and Robert Kowalski around 1972 as an alternative to the American-dominated Lisp programming languages. It is an attempt to make a programming language that enables the expression of logic instead of carefully specified instructions on the computer."
945
:
"Proprietary Software - Proprietary software refers to a type of software in which the user does not control what it does or cannot study or edit the code and can not distribute the software without permission of the software copyright owner, in contrast to free software, which can be used, copied, studied, modified and redistributed."
946
:
"PSE: Problem Solving Environment - A Problem Solving Environment (PSE) is specialized software for solving one class of problems. Many PSEs were introduced in the 1990s. They use the language of the respective field and often employ modern graphical user interfaces €“ the goal is to make the software easy to use for specialists in fields other than computer science."
947
:
"Pseudonymous Remailer - Pseudonymous remailer, also known as nym server, as opposed to an anonymous remailer, is an Internet software program designed to allow people to write anonymous messages on Usenet newsgroups and send anonymous email under a pseudonym. Unlike a purely anonymous remailers, it assigns its users a user name, and it keeps a database of instructions on how to return messages to the real user. These instructions usually involve the anonymous remailer network itself, thus protecting the true identity of the user."
948
:
"Public-Domain Software - Public-domain software refers to any program that is not copyrighted. Public-domain software is free and can be used without restrictions. The term public-domain software is often used incorrectly to include freeware, free software that is nevertheless copyrighted."
949
:
"PUP: Potentially Unwanted Program - Potentially unwanted program(PUP) is a term used to describe unwanted programs such as Trojans, spyware and adware, along with other malware which may compromise your privacy. Some antivirus and PC security software packages will scan for and protect your system against PUPs. The term PUP was first used by persons at McAfee's Avert research labto avoid any legal issues that may arise from calling these types of applications "spyware"."
950
:
"Purify Memory Debugger - Purify memory debugger program is used by software developers to detect memory access errors in programs, especially those written in C or C++. It was originally written by Reed Hastings of Pure Software, now part of IBM. Purify allows dynamic verification, a process by which a program discovers errors that occur when the program runs, much like a debugger. Static verification or static code analysis, by contrast, involves detecting errors in the source code without ever compiling or running it, just by discovering logical inconsistencies. The type checking by a C compiler is an example of static verification."
951
:
"PWB Shell - The PWB shell, also known as the Mashey shell, was an early Unix shell distributed with some versions of Programmer's Workbench UNIX circa 1975-1977. It was a modified version of the Thompson shell with additional features to increase usability for programming, and was maintained by John Mashey and various others. Although it was soon superseded by the Bourne shell, several features introduced in the PWB shell remain in many later shells."
952
:
"PyGTK - PyGTK is a set of Python wrappers for the GTK+ GUI library. PyGTK is free software and licensed under the LGPL. Its original author is famous GNOME hacker James Henstridge, but today there are six people in the team that maintains the bindings as well as a countless number of other helpers that have submitted patches and bug reports."
953
:
"PyQt - PyQt is the Python binding of the GUI toolkit Qt. PyQt is developed by the British firm Riverbank Computing. It is available under similar terms as Qt: for free (GPL'ed) under Linux, commercially under Mac/OS and Windows."
954
:
"Python - Python is an interpreted programming language created by Guido van Rossum in 1990. Python is fully dynamically typed and uses automatic memory management; it is thus similar to Perl, Ruby, Scheme, Smalltalk, and Tcl. Python is developed as an open source project, managed by the non-profit Python Software Foundation, and is available for free from the project website."
955
:
"QB: QuickBASIC - Microsoft QuickBASIC (QB) is a descendant of the BASIC programming language that was developed by the Microsoft Corporation for use with the MS-DOS operating system. It is loosely based on GW-BASIC but adds user-defined types, improved programming structures, better graphics and disk support and a compiler in addition to the interpreter. Microsoft sold QuickBASIC as a commercial development suite."
956
:
"Qbasic - QBasic is a variant of the BASIC programming language, which is similar but different from the QuickBasic programming language. The source code is compiled to an intermediate form within the integrated development environment (IDE), and this intermediate form is immediately interpreted on demand within the IDE. Like QuickBASIC, but unlike earlier versions of Microsoft BASIC, QBasic was a structured programming language, supporting constructs such as named subroutines and while loops. Line numbers, a concept often associated with BASIC, were supported for compatibility, but were not necessary and not considered good form, having been replaced by descriptive line labels. QBasic has limited support for user-defined data types (structures), and several primitive types used to contain strings of text or numeric data."
957
:
"Qcad - QCad is a computer-aided design (CAD) software package for 2D design and drafting. It is available for Linux, Mac OS X, Unix and Microsoft Windows. QCad is developed by RibbonSoft and released under the GPL. QCad 2, designed to "make QCad more productive, more user friendly, more flexible and increase its compatibility with other products" began development in May 2002. Much of the interface and concepts behind use are the same of those of AutoCAD, though perhaps easier to understand in QCad. QCad is one of very few OpenSource CAD packages available for Linux, and certainly the most fully functional. QCad uses the AutoCAD DXF file format internally and to save and import files. Files can be exported in a number of formats, but noticeably missing are both VRML and SVG."
958
:
"QTW: QuickTime for Windows - QuickTime for Windows(QTW) is a multimedia software from Apple Computer that integrates full-motion video and sound into application programs."
959
:
"Query Language - Query languages are computer languages used to make queries into databases and information systems. Broadly, query languages can be classified according to whether they are database query languages or information retrieval query languages. Examples of query language includes: SQL is a well known query language for relational databases; MDX is a query language for OLAP databases; DMX is a query language for Data Mining models; Datalog is a query language for deductive databases; XQuery is a query language for XML data sources."
960
:
"Query Optimizer - The query optimizer is the component of a database management system that is used to analyze queries submitted to database server for execution, and then determine the optimal way to execute the query (Query plan).The query optimizer cannot be accessed directly by users. Instead, once queries are submitted to database server, and parsed by the parser, they are then passed to the query optimizer where optimization occurs."
961
:
"Query Plan - A query plan, also known as query execution plan, is an ordered set of steps used to access information in a SQL relational database management system. This is a specific case of the relational model concept of access plans. Since SQL is declarative, there are typically a large number of alternative ways to execute a given query, with widely varying performance. When a query is submitted to the database, the query optimizer evaluates all of the different possible plans for executing the query and returns what it considers the best alternative."
962
:
"QuickTime - QuickTime is a multimedia framework developed by Apple Computer, capable of handling various formats of digital video, media clips, sound, text, animation, music, and several types of interactive panoramic images. The QuickTime technology has three major components: 1) a media player, known as QuickTime Player, which Apple makes available for free download on its website and bundles with each of its computers; 2) the QuickTime file format â€” openly documented and available for anyone to use royalty-free; 3) software development kits available for the Macintosh and Windows platforms. These kits allow people to develop their own software to manipulate QuickTime and other media files. These are not free."
963
:
"QVCS - QVCS is a family of version control system products published by Quma Software, Inc. The QVCS product family supplies version control system with features similar to many other version control products on the market. QVCS and QVCS-Pro target smaller Windows only development teams. QVCS-Enterprise is a client-server application, is cross-platform, and is designed for use by distributed development teams."
964
:
"R Programming Language - The R programming language, sometimes described as "GNU S", is a programming language and software environment for statistical computing and graphics. It was originally created by Ross Ihaka and Robert Gentleman (hence the name R) at the University of Auckland, New Zealand, and is now developed by the R core team. R is considered by its developers to be an implementation of the S programming language, with semantics derived from Scheme."
965
:
"Racter: Raconteur - Racter, short from raconteur, was an artificial intelligence computer program that generated English language prose at random. Its existence was revealed to the world in 1984. The great sophistication claimed for the program was, however, a hoax, as could be seen by investigation of the template system of text generation."
966
:
"Rainlender - Rainlendar is an open-source computer application that displays a calendar on the desktop. It also can maintain events and a to-do list. It is popular because it uses few system resources when running, and supports "skins" or GUI changes. Because of the ability to be skinned, it has become a mainstay on many shell replacement themes (such as Litestep and Aston). The name Rainlendar is a combination of 'Rainy' and calendar."
967
:
"RAR: Roshal Archive - In computing, RAR, short of Roshal ARchive, is a proprietary file format for data compression and archiving, which was developed by Eugene Roshal (hence the name RAR: Roshal ARchive). He also developed programs for packing and unpacking RAR files, originally for DOS, and later ported to other platforms. The encoder (the main Windows version known as WinRAR) is distributed as shareware, but Roshal has released the decoder's source code under a license that allows free distribution and modification, on condition that it is not used to build a compatible encoder. The encoding method is held to be proprietary, but compatible programs for decompression are available for several platforms, such as the open-source 7-Zip."
968
:
"RDBMS: Relational Database Management System - A relational database management system (RDBMS) is a database management system (DBMS) that is based on the relational model as introduced by Edgar F. Codd. However commercial RDBMSs also tend to diverge from the relational model in significant ways. The qualify as a RDBMS, the system must satisfy the following minimum criteria: 1) presented the data to the user as relations (a presentation in tabular form, i.e. as a collection of tables with each table consisting of a set of rows and columns, can satisfy this property); 2) provided relational operators to manipulate the data in tabular form."
969
:
"RealSky - RealSky is a digital photographic sky atlas, which is a subset of the Digitized Sky Survey (DSS) published in 1996 by the Astronomical Society of the Pacific. RealSky is composed of the "RealSky" product, covering the northern sky, and "RealSky South," published slightly later and covering the southern sky."
970
:
"Recursive - Recursive in computer programming refers to software that calls itself. Recursion should generally be avoided in an embedded system, since it frequently requires a large stack."
971
:
"Redundant Code - Redundant code, also known as duplicate code, refers to the code in a computer program that is executed but has no effect on the output of a program, because this piece of code is the second and subsequent copies of functionaly the same code executed somewhere else."
972
:
"Reentrant - Reentrant refers to software that can be executed multiple times simultaneously. A reentrant function can be safely called recursively or from multiple tasks. The key to making code reentrant is to ensure mutual exclusion whenever accessing global variables or shared registers."
973
:
"Refactoring - Refactoring is the process of rewriting a computer program or other material to improve its structure or readability, while explicitly preserving its meaning or behavior. For example, if a programmer wants to add new functionality to a program, he may decide to refactor the program first to simplify the addition of new functionality in order to prevent software entropy."
974
:
"Register Allocation - In compiler optimization, register allocation is the process of multiplexing a large number of target program variables onto a small number of CPU registers.Most computer programs need to process large amounts of different data items. However, most CPUs can only perform operations on a small fixed number of "slots" called registers. Even on machines that support memory operands, register access is considerably faster than memory access."
975
:
"Register Spilling - Register spilling occurs during a program compilation where there are more live variables than the register can hold. When a compiler is generating machine code and there are more live variables than the machine has registers, it has to transfer or "spill" some variables from registers to memory. This incurrs at certain cost, as access from memory is typically slower than access from a register."
976
:
"Regression Testing - Regression testing is any type of software testing which seeks to uncover regression bugs. Regression bugs occur whenever software functionality that previously worked as desired stops working or no longer works in the same way that was previously planned. Typically regression bugs occur as an unintended consequence of program changes. Common methods of regression testing include re-running previously run tests and checking whether previously fixed faults have reemerged."
977
:
"Relational Database - A relational database is a database structured in accordance with the relational model. Strictly speaking the term refers to a specific collection of data but it is invariably employed together with the software used to manage that collection of data. That software is more correctly called a relational database management system (RDBMS). Relational database management systems incorporate many features from the relational model, but commercial RDBMSs also tend to diverge from the relational model in significant ways."
978
:
"Relational Model - The relational model, a mathematical model invented by Edgar Codd, is a data model for database management based on predicate logic and set theory. The fundamental assumption of the relational model is that all data is represented as mathematical n-ary relations, an n-ary relation being a subset of the Cartesian product of n domains. In the mathematical model, reasoning about such data is done in two-valued predicate logic, meaning there are two possible evaluations for each proposition: either true or false (and in particular, no third value such as unknown, or not applicable, either of which is often associated with the concept of NULL). Some think that logic (which is inherently two-valued) is an important part of the relational model, where others think that a system that uses a form of three-valued logic can still be considered relational."
979
:
"Rematerialization - Rematerialization is a compiler optimization method which saves time by recomputing a value instead of loading it from memory. It is typically tightly integrated with register allocation, where it is used as an alternative to spilling registers to memory."
980
:
"Remote Control Software - Remote control software is a type of software used in remote administration to allow use of computers or other hardware at a separate location. A typical use is to control a server or desktop computer from another desktop computer. The remote control software consists of two separate computer programs, a "host version" that is installed on the computer to be controlled, and a "remote version" that is installed on the controlling computer. Remote control operation is used to take control of an unattended desktop personal computer from a remote locationas well as to provide instruction and technical support to remote users."
981
:
"Renegade BBS - Renegade is a bulletin board system (BBS) written for IBM PC-compatible computers running MS-DOS. It was written in Pascal by Cott Lang and gained popularity in the early 1990s. Renegade is based on the source code to Telegard, and was available free of charge. This was one of the reasons it became the most popular BBS software in use at the time."
982
:
"Report Writer - Report writer , also called a report generator, is a program, usually part of a database management system, that extracts information from one or more files and presents the information in a specified format. Most report writers allow user to select records that meet certain conditions and to display selected fields in rows and columns, pie charts, bar charts, and other diagrams."
983
:
"Repository Open Service Interface Definition - The Repository Open Service Interface Definition (OSID) is an O.K.I. specification which defines the storing and retrieving of digital content, referred to as Assets. OSIDs are programmtic interfaces which comprise a Service Oriented Architecture for designing and building reusable and interoperable software. Assets may contain metadata and reside in Repositories which support one or more Asset Types. Multiple repositories can be managed or searched through the use of OSID adapter patterns where underneath a single Repository OSID can exist multiple Repository OSIDs forming a federation of repositories, where each implementation may be using a distinct incompatible technology and the OSID integrates them."
984
:
"Revision Control - Revision control, also known as version control or source control, is the management of multiple revisions of the same unit of information and information systems. It is most commonly used in engineering and software development to manage ongoing development of digital documents like application source code, art resources such as blueprints or electronic models and other critical information that may be worked on by a team of people. Changes to these documents are identified by incrementing an associated number or letter code, termed the "revision number", "revision level", or simply "revision" and associated historically with the person making the change. A simple form of revision control, for example, has the initial issue of a drawing assigned the revision number "1". When the first change is made, the revision number is incremented to "2" and so on."
985
:
"Revision Control System - Revision control system manages multiple revisions to a single unit of information, typically a digital document containing source code. It is most commonly used in engineering and software development to manage ongoing development of digital documents like application source code, art resources such as blueprints or electronic models and other critical information that may be worked on by a team of people. Changes to these documents are identified by incrementing an associated number or letter code, termed the "revision number", "revision level", or simply "revision" and associated historically with the person making the change."
986
:
"Rewind - Rewind is an open source project to implement a compatibility layer for the Microsoft Windows API on UNIX with X11. It supports FreeBSD, Solaris and Linux. It grew out of the original MIT Licensed WINE project after WINE changed its license to the GNU LGPL in March 2002."
987
:
"RISC iX - RISC iX was a Unix-like operating system designed to run on the Acorn Archimedes R140, R225 and R260 models. These are fundamentally similar to the A440 (later A440/1) and A540 models. It was based on 4.3 BSD and had a number of innovative features, including a transparent file compression mechanism and a console text copying mechanism more familiar to microcomputer owners than to Unix people."
988
:
"RISC OS: Reduced Instruction Set Computer Operating System - Reduced Instruction Set Computer Operating System(RISC OS) is a Graphical user interface-based operating system for ARM-processor based computers or similar devices. RISC OS replaced the Arthur operating system used on the first Archimedeses. It is written in ARM assembly code and distributed on ROM so it takes up no disk space and takes no time to load. It supports cooperative multitasking with memory management and includes a graphical user interface or "WIMP"."
989
:
"RKWard - RKWard is an easy to use, transparent frontend to the R programming language, a very powerful, yet hard-to-get-into scripting-language with a strong focus on statistic functions. RKWard tries to combine the power of the R-language with the ease of use of commercial statistical packages."
990
:
"ROBODoc - ROBODoc is a documentation tool similar to javadoc. It is used to extract API documentation from source code. It can be used with any language that supports remarks and works by extracting specially formated headers. These are then reformatted into HTML, DocBook, TROFF, ASCII, LaTeX, PDF, or RTF."
991
:
"Robustness - In the context of computer software, robustness is the resilience of the system, especially when under stress or when confronted with invalid input. For example, an operating system is considered robust if it operates correctly when it is starved of memory or storage space, or when confronted with an application that has bugs or is behaving in an illegal fashion - such as trying to access memory or storage belonging to other tasks in a multitasking system."
992
:
"ROFUG: Romanian FreeBSD Users Group - Romanian FreeBSD Users Group(ROFUG), also known as Romanian Free Unix Group, is a FreeBSD user group with the main objective to form a Romanian user community centered around FreeBSD and the open source concept."
993
:
"RosAsm - RosAsm is a 32-bit Win32 x86 assembler released under the GNU General Public License. The name stands for ReactOS ASseMbler, however is unrelated to that project. RosAsm is an IDE with full integration of assembler, linker, resource editor, debugger and disassembler. RosAsm packages the source code from which an executable was compiled directly within the portable executable files. Note: although RosAsm contains a linker for internal operation, it does not allow linking in external object modules other than DLLs, nor does it support the ability to produce object modules that can be linked with other programs."
994
:
"Rosegarden - Rosegarden is an open source digital audio workstation program developed for Linux with ALSA and KDE. It acts as an audio and MIDI sequencer, scorewriter and musical composition and editing tool. It is intended to be a free replacement for such applications as Cubase. Rosegarden does not include a software synthesizer, but works with soft synthesizers such as IIWU Synth and Timidity."
995
:
"Routine - In computer programming, a routine, also called subroutine or function or procedure, is a section of a program that performs a particular task. Programs consist of modules, each of which contains one or more routines."
996
:
"Rpcdump - Rpcdump is a Windows 2000 Resource Kit tool for displaying services registered with the remote procedure call (RPC) endpoint mapper."
997
:
"rsh: Remote Shell Protocol - Remote Shell Protocol (rsh) is a protocol that allows a user to execute commands on a remote system without having to log in to the system. For example, rsh can be used to remotely examine the status of a number of access servers without connecting to each communication server, executing the command, and then disconnecting from the communication server. rsh originated as part of the BSD Unix operating system as part of the rlogin package on 4.2BSD in 1983. rsh has since been ported to other operating systems. rsh is mostly replaced by a more secured protocol called Secure Shell protocol(SSH) in today's environment."
998
:
"RTM: Release to Manufacturing - Release to manufacturing (RTM), in software industry, refers to the process of providing the version of a software product to manufacturers to bundle into future versions of their hardware products. RTM versions are typically released to manufacturers before they are released to the general public so that the manufacturers can conduct integration and work out any bugs the software may encounter with hardware devices. The release of an RTM version does not necessarily mean that the creators have worked out all the problems with the software; there still may be more versions of the product before it is released to the general public."
999
:
"Rtorrent - rTorrent is a command line ncurses BitTorrent client written in C++, based on the libTorrent libraries. for Unices, with a focus on high performance and good code. The library differentiates itself from other implementations by transfering directly from file pages to the network stack. On high-bandwidth connections it is able to seed at 3 times the speed of the official client. rTorrent packages are available for Arch Linux, Debian, FreeBSD, Gentoo Linux and Mandriva Linux; of course, rTorrent will compile on nearly every POSIX-compliant OS."
1000
:
"RTOS: Real-Time Operating System - Real-time operating system (RTOS) is an operating system designed specifically for use in real-time systems and applications. Examples include embedded applications (programmable thermostats, household appliance controllers, mobile telephones), industrial robots, industrial control, and scientific research equipment. A real-time operating system does not necessarily have high throughput the specialized scheduling algorithm and a high clock-interrupt rate can both interfere with throughput. That is to say, RTOS are valued more for how quickly they can respond to input than for the total amount of work they can do."
1001
:
"RTSC: Read the Source Code - Read the Source Code (RTSC) is an acronym often used when a software developer asks a question about undocumented code."
1002
:
"Ruby Programming Language - Ruby Programming Language is a reflective, object-oriented programming language. It combines syntax inspired by Perl with Smalltalk-like object-oriented features, and also shares some features with Python, Lisp, Dylan and CLU. Ruby is a single-pass interpreted language. Its main implementation is free software distributed under an open-source license."
1003
:
"Runtime - In computer science, runtime or run time describes the operation of a computer program, the duration of its execution, from beginning to termination (compare compile time)."
1004
:
"Runtime Environment - A runtime environment, in computer science, is a virtual machine state which provides software services for processes or programs while a computer is running. It may pertain to the operating system itself, or the software that runs beneath it."
1005
:
"Runtime Error - Runtime error is a type of program errors that exposed when the program is running. Logical errors and array bounds checking are examples. For this reason, some programming bugs are not discovered until the program is tested in a "live" environment with real data, despite sophisticated compile-time checking and pre-release testing. In this case, the end user may encounter a runtime error message."
1006
:
"Runtime Library - A runtime library, in computer science, refers to a collection of utility functions which support a program while it is running, working with the operating system to provide facilities such as mathematical functions, input and output. These make it unnecessary for programmers to continually rewrite basic capabilities specified in a programming language or provided by an operating system."
1007
:
"RUP: Rational Unified Process - Rational Unified Process(RUP) is a software development methodology from Rational. Based on UML, RUP organizes the development of software into four phases, each consisting of one or more executable iterations of the software at that stage of development."
1008
:
"Rzip - rzip is a data compression program based on bzip2. rzip operates in two stages. The first stage finds and encodes large chunks of duplicated data over potentially very long distances (up to nearly a gigabyte) in the input file. The second stage is to use a standard compression algorithm (bzip2) to compress the output of the first stage."
1009
:
"S Programming Language - S programming language, developed primarily by John Chambers and (in earlier versions) Rick Becker and Allan Wilks of Bell Laboratories, is a programming language and software environment for statistical computing and graphics. There are two implementations of S programming language: the R programming language, and Insightful's S-PLUS."
1010
:
"S/W: Software - Software, sometimes abreviated s/w, is also called a computer program that enables a computer to perform a specific task, as opposed to the physical components of the system (hardware). This includes application software such as a word processor, which enables a user to perform a task, and system software such as an operating system, which enables other software to run properly, by interfacing with hardware and with other software. Programs stored on non-volatile storage built from integrated circuits (e.g. ROM or PROM) are usually called firmware."
1011
:
"SAA: Systems Application Architecture - Systems Application Architecture(SAA) is a set of interfaces, programming languages, and procedure libraries, guidelines, and protocols developed by IBM to encourage the development of software that is consistent regardless of hardware or operating system."
1012
:
"Sandbox - Sandbox is a testing environment used by many program systems with limited access and resources usage. It is a protective mechanism used by some programming environments to test additons of pre-launched codes or to-be published contents."
1013
:
"Sandwich Test - Sandwich Test refers to a type of software integration test that combines bottom-up testing and top-down testing."
1014
:
"SAPI: Scheduling Application Programming Interface - Scheduling Application Programming Interface(SAPI) is an application programming interface for business scheduling software such as Microsoft Schedule+."
1015
:
"SAPI: Speech Application Programming Interface - Speech Application Programming Interface(SAPI) is an application programming interface (API) from Microsoft that enables speech synthesis and speech recognition programs to communicate with the Windows operating systems. A number of versions of the SAPI have been released, which have shipped either as part of a Speech SDK, or as part of the Windows OS itself. Applications that use SAPI include Microsoft Office, Microsoft Agent and Microsoft Speech Server."
1016
:
"SCADA: Supervisory Control and Data Acquisition - SSupervisory Control and Data Acquisition (SCADA) is a system that collects data from sensors locally or in remote locations and sends them to a central computer for management and control. SCADA systems are used in industrial and civil engineering applications to control distributed systems from a master location. SCADA is a very broad umbrella that describes solutions across a large variety of industries, including but not limited to the following: * Electric power generation, transmission and distribution* Environmental control systems* Traffic signals* Water management systems* Mass transit systems* Manufacturing systems"
1017
:
"SCANDISK - SCANDISK or Scandisk is a command in DOS and Microsoft Windows systems which verifies hard disk or floppy disk for file system integrity. It is similar to fsck command in Unix. Under Windows 2000 and Windows XP, CHKDSK has replaced SCANDISK for checking disk surface for bad sectors and fixing errors."
1018
:
"SCCS: Source Code Control System - Source Code Control System (SCCS) was the first source code revision control system, originally developed at Bell Labs in 1972 for an IBM System/370 computer running OS/MVT, and was later ported to a PDP-11 running Unix. Today, SCCS is generally considered obsolete."
1019
:
"Scientific Computing - Scientific computing, also known as computational science, is the field of study concerned with constructing mathematical models and numerical solution techniques and using computers to analyze and solve scientific and engineering problems. In practical use, it is typically the application of computer simulation and other forms of computation to problems in various scientific disciplines such as Physics."
1020
:
"SCM: Software Configuration Management - Software Configuration Management (SCM), part of configuration management (CM), is a set of activities designed to control change by identifying the software work products that are likely to change, establishing relationships among them, defining mechanisms for managing different versions of these work products, controlling the changes imposed, and auditing and reporting on the changes made. In other words, SCM is a methodology to control and manage a software development project."
1021
:
"SCM: Source Configuration Management - Source configuration management (SCM) is often used to indicate that a variety of artifacts may be managed and versioned, including software code, documents, design models, and even the directory structure itself. It is part of the Software Configuration Management."
1022
:
"Screen Scraper - Screen scraper is a type of software that allows a PC to intercept character-based data from a mainframe and present it in an easier to understand graphical user interface (GUI ). Newer screen scrapers present the information in HTML, so it can be accessed with a browser. The key element that distinguishes screen scraping from regular parsing is that the output being scraped was nominally intended for human consumption, not machine interpretation. There are a number of synonyms for screen scraping, including: Data scraping, data extraction, web scraping, page scraping, web page wrapping and HTML scraping (the last four being specific to scraping web pages)."
1023
:
"ScreenCam - ScreenCam is an early Screencast program from Lotus that can be used to make movies demonstrating how software works by moving through actions on the screen.Voice can be added, and a ScreenCam player can be included with the movie file so that it runs by itself."
1024
:
"Screencast - A screencast is a digital recording of computer screen output, often containing audio narration. Early screencast products such as Lotus ScreenCam produced large files and had limited editing features. More recent products support more compact file formats such as Macromedia Flash and have more sophisticated editing features allowing changes in sequence, mouse movement, and audio."
1025
:
"Script - Script, in computer programming, is a type of macro or batch file which contains a list of commands that can be executed without user interaction. A script language is a simple programming language with which you can write scripts. Apple Computer uses the term script to refer to programs written in its HyperCard or AppleScript language."
1026
:
"Scripting Languages - Scripting languages, commonly called scripting programming languages or script languages, are computer programming languages created to shorten the traditional edit-compile-link-run process. Early script languages were often called batch languages or job control languages. Scripting languages can be interpreted or compiled, but because interpeters are simpler to write than compilers, they are interpreted at least as often as they are compiled."
1027
:
"SDD: Software Description Database - Software Description Database (SDD) is a database of software and documents available on the Internet, with short descriptions, which can be accessed via Archie."
1028
:
"SDK: Software Development Kit - Software Development Kit(SDK), also known as Software Developers Kit, is a set of tools to help programmers write new applications and interfaces, based on an existing system. The kit usually provides tools for creating menus, icons, dialog boxes, etc., and for interfacing the application with the operating system(s) it will be used with."
1029
:
"SDL: Simple DirectMedia Layer - Simple DirectMedia Layer (SDL) is a cross-platform multimedia library that creates an abstraction over various platforms' graphics, sound, and input APIs, allowing a developer to write a computer game or other multimedia application once and run it on GNU/Linux, Windows, Mac OS Classic, Mac OS X, BeOS and a few other unofficially ported platforms. It manages video, events, numeric audio, CD-ROM sound, threads, and timers."
1030
:
"SDLC: Systems Development Life Cycle - Systems Development Life Cycle(SDLC) is defined by the United States Department of Justice as a software development process, although it is also a distinct process independent of software or other Information Technology considerations. It is used by a system analyst to develop an information system, including requirements, validation, training, and user ownership through investigation, analysis, design, implementation, and maintenance. SDLC is a systems approach to problem solving and is made up of several phases, each comprised of multiple steps:"
1031
:
"The software concept - identifies and defines a need for the new system."
1032
:
"A requirements analysis - analyzes the information needs of the end users."
1033
:
"The architectural design - creates a blueprint for the design with the necessary specifications for the hardware, software, people and data resources."
1034
:
"Coding and debugging - creates and programs the final system."
1035
:
"System testing - evaluates the system's actual functionality in relation to expected or intended functionality."
1036
:
"SDML: Signed Document Markup Language - Signed Document Markup Language(SDML) is a specification of a generic method for digitally signing a document, a section of a document, or multiple documents together. SDML requires the use of public key cryptography and can be used with web pages, e-mail messages or any text based documents. SDML is a generalization of the Financial Services Markup Language (FSML). SDML may be used for electronic funds transfer, electronic commerce, or any other signed contract or agreement."
1037
:
"SDR: Software-Defined Radio - A software-defined radio (SDR) system is a radio communication system which uses software for the modulation and demodulation of radio signals. An SDR performs significant amounts of signal processing in a general purpose computer, or a reconfigurable piece of digital electronics. The goal of this design is to produce a radio that can receive and transmit a new form of radio protocol just by running new software."
1038
:
"SE: Software Engineer - Software engineer(SE) is a person who designs and programs system-level software, such as operating systems, database management systems (DBMSs) and embedded systems. An software engineer requires the discipline of designing, creating, and maintaining software by applying technologies and practices from computer science, project management, engineering, application domains and other fields."
1039
:
"Seahorse - Seahorse is a GNOME front-end application for managing PGP keys, written by Jacob Perkins. Seahorse integrates with Nautilus, gedit for encryption, decryption and other operations. It has HKP key server support. The program is based on GNU Privacy Guard (GPG) and is released under the GNU General Public License."
1040
:
"Search Engine - A search engine is a computer system designed to help find information over a computer network such as the World Wide Web, inside a corporate or proprietary network or a personal computer. The search engine allows one to ask for content meeting specific criteria (typically those containing a given word or phrase) and retrieves a list of references that match those criteria. Search engines use regularly updated indexes to operate quickly and efficiently. Without further qualification, search engine usually refers to a Web search engine, which searches for information on the public Web. Other kinds of search engine are enterprise search engines, which search on intranets, personal search engines, which search individual personal computers, and mobile search engines. However, while different selection and relevance criteria may apply in different environments, the user will probably perceive little difference between operations in these."
1041
:
"Search Service - Search service is an online service which can trawl through the contents of the Web (Websites, newsgroups, email addresses) looking for specific phrases or words. A search engine is required to provide the search services, which asks the user to input keywords and then provides a list of web sites that contain your chosen words."
1042
:
"Second Generation Language - Second generation language (2GL), also known as second-generation programming language, usually refer to some form of assembly language. Unlike first-generation programming languages, the code can be read and written fairly easily by a human, but it must be converted into a machine readable form in order to run on a computer. The conversion process is simply a mapping of the assembly language code into binary machine code (the first-generation language). The language is specific to and dependent on a particular processor family and environment. Since it is the native language of a processor it has significant speed advantages, but it requires more programming effort and is difficult to use effectively for large applications."
1043
:
"Second-System Effect - In computing, the second-system effect, also known as second-system syndrome, refers to the phenomenon when one is designing the successor to a relatively small, elegant, and successful system to become grandiose in one's success and design an elephantine feature-laden monstrosity, for example, the jump from a set of simple operating systems on the IBM 700/7000 series to OS/360 on the 360 series."
1044
:
"Security-Enhanced Linux - Security-Enhanced Linux (SELinux) is a version of the Linux kernel and utilities, which contains support for mandatory access controls based on the principle of least privilege. It is not a Linux distribution, but rather a set of modifications that can be applied to Linux operating systems and some non-Linux systems like BSD."
1045
:
"SEI: Software Engineering Institute - The Software Engineering Institute (SEI) is a federally funded research and development center sponsored by the U.S. Department of Defense and operated by Carnegie Mellon University, with offices in Pittsburgh, Pennsylvania; Frankfurt, Germany; Redstone Arsenal, Alabama, and Arlington, Virginia. The SEI publishes books on software engineering for industry, government and military applications and practices. They are most famous for the software Capability Maturity Model, (now CMMI), which ranks a software development environment according to its capability of producing quality software."
1046
:
"Self-Extracting File - Self-extracting file is a type of file that contains other files that have been compressed through a ZIP or other compression program for more efficient transfer of the data. The self-extracting file contains within it the program software needed to un-compress (unzip) the file and execute the intended application. The end user can simply executing the file without any special software to execute the file."
1047
:
"SEQUEL: Structured English Query Language - Structured English Query Language ("SEQUEL"), originally designed by an IBM research center in 1974 and 1975, was designed to manipulate and retrieve data stored in System R. The SEQUEL is the base for the standard database query language SQL, which is widely used today."
1048
:
"Server Application - Server applications are a type of software used by an application server in providing a service to a client. Server applications include web service applications, database applications, etc."
1049
:
"Service Oriented Analysis - Service Oriented Analysis is a process in the Service Oriented Architecture (SOA), which generally refers to a pre-design effort centered around the definition of conceptual services or a conceptual service-oriented architecture. Much like object-oriented analysis, the goal is often to achieve an ideal representation. IBM provides a variation of service-oriented analysis as part of its SOAD framework."
1050
:
"SP: Service pack - Service pack(SP), typically a cumulative set of hotfixes, resers to an update to a software version that fixes an existing problem, or provides enhancements to the product that will appear in the next version of the product. When the new product version is released, it usually contains the fixes and updates from the service pack. Service packs can either be downloaded or ordered directly from the software vendor."
1051
:
"SFA: Sales Force Automation - Sales force automation(SFA) is a process of using software to automate the sales functions and process in a business, including order processing, contact management, information sharing, inventory monitoring and control, order tracking, customer management, sales forecast analysis and employee performance evaluation."
1052
:
"SGML Application - SGML application refers to a markup language written in Standard Generalized Markup Language (SGML). SGML is a meta-language - a language for writing markup languages. HTML is an example of the SGML application."
1053
:
"SGML: Standard Generalized Markup Language - Standard Generalized Markup Language(SGML) is a metalanguage for how to specify a document markup language or tag set. Such a specification is itself a document type definition (DTD). SGML is a descendant of IBM's Generalized Markup Language (GML). SGML is based on the idea that documents have structural and other semantic elements that can be described without reference to how such elements should be displayed. The actual display of such a document may vary, depending on the output medium and style preferences. SGML provides a variety of markup syntaxes that can be used for many applications. By changing the SGML Declaration one does not even need to use "angle brackets" although they are the norm, the so-called concrete reference syntax. SGML was originally designed to enable the sharing of machine-readable documents in large projects in government, legal and the aerospace industry, which have to remain readable for several decadesa very long time in information technology. It has also been used extensively in the printing and publishing industries, but its complexity has preventedits widespread application for small-scale general-purpose use."
1054
:
"Shareaza - Shareaza is a Windows€“based peer-to-peer client which supports the Gnutella, Gnutella2, EDonkey Network, and BitTorrent network protocols and which can handle magnet links, ed2k links, Piolet links, and the now deprecated Gnutella links. It was originally developed as closed-sourcefreeware by Michael Stokes, and is now open-source under the GPL."
1055
:
"Shareware - Shareware is a type of software distributed on the basis of an honor system. Most shareware is delivered free of charge, but the author usually requests that you pay a small fee if you like the program and use it regularly. By sending the small fee, you become registered with the producer so that you can receive service assistance and updates. You may re-distribute shareware to others, but they too are expected to pay a fee if they use the product and like it. Sometmes, shareware is a light version of a commercial software, which has price. The author of the shareware expects a portion of users of the shareware to purchase the full commercial version if they like it."
1056
:
"Shelfware - Shelfware refers to the software that gets purchased by a company or individual that ends up sitting on a shelf somewhere and not being used."
1057
:
"Shell - A shell, in computer technologies, refers to the interface between the user and the computer's operating system. The shell interprets commands entered by the user, and passes them on to the operating system. A shell usually implies an interface with a command syntax (think of the DOS operating system and its "C:>" prompts and user commands such as "dir" and "edit"). DOS shells are COMMAND.COM and DOS shell; some UNIX shells are the Bourne shell (sh), the C shell (csh), and the Korn shell (ksh)."
1058
:
"Shockwave - Shockwave is an application that enables interactive and multimedia features, such as movies, sounds, and animations, to be embedded in Web pages. Shockwave allows developers to add items created with conventional authoring tools such as Director or Freehand."
1059
:
"Shoutcast - Shoutcast is a software application for streaming MP3s. The official Shoutcast website has addresses for many stations which are like radio stations. You enter the URL in your MP3 player for the station you selected, then the MP3s are downloaded while playing."
1060
:
"SIGGRAPH: Special Interest Group in Graphics - Special Interest Group in Graphics(SIGGRAPH) is the name of the annual conference on computer graphics convened by the ACM SIGGRAPH organization. The first SIGGRAPH conference was in 1974. The conference is attended by tens of thousands of computer professionals."
1061
:
"SIIA: Software & Information Industry Association - Software & Information Industry Association (SIIA) is a trade association for the software industry."
1062
:
"SIT: System Integration Testing - The System Integration Testing(SIT), also known as integration testing, is the phase of software testing in which individual software modules are combined and tested as a group. It follows unit testing and precedes system testing. Integration testing takes as its input modules that have been checked out by unit testing, groups them in larger aggregates, applies tests defined in an Integration test plan to those aggregates, and delivers as its output the integrated system ready for system testing. The purpose of Integration testing is to verify functional, performance and reliability requirements placed on major design items."
1063
:
"SLOC: Source Lines of Code - Source lines of code (SLOC) is a software metric used to measure the amount of code in a software program. SLOC is typically used to estimate the amount of effort that will be required to develop a program, as well as to estimate productivity or effort once the software is produced."
1064
:
"Smalltalk - Smalltalk is an object-oriented, dynamically typed, reflective programming language. It was designed and created in part for educational use, more so for Constructivist teaching, at Xerox PARC during the 1970s. The language was generally released as Smalltalk-80 and has been widely used since. Smalltalk is in continuing active development, and has gathered a loyal community of users around it."
1065
:
"SOA: Service-Oriented Architecture - Service-Oriented Architecture expresses a perspective of software architecture that defines the use of services to support the requirements of software users. In an SOA environment, resources on a network are made available as independent services that can be accessed without knowledge of their underlying platform implementation. SOA is a style of multi-tier computing that helps organizations share logic and data among multiple applications and usage modes. A number of common terms have surfaced in association with structured service and SOA delivery processes:↵service-oriented analysis↵service-oriented design↵service-oriented analysis and design (SOAD)↵service-modeling↵service-oriented modeling↵service-oriented modeling and architecture (SOMA)↵"
1066
:
"service-oriented analysis"
1067
:
"service-oriented design"
1068
:
"service-oriented analysis and design (SOAD)"
1069
:
"service-modeling"
1070
:
"service-oriented modeling"
1071
:
"service-oriented modeling and architecture (SOMA)"
1072
:
"SOAD: Service-Oriented Analysis and Design - Service-oriented analysis and design (SOAD), also known as service-oriented modeling, is an IBM defined process following the Service Oriented Architecture (SOA), which is an approach to software modeling and development specially designed for service-oriented architecture (SOA). SOAD adds innovations for service repositories, service orchestration, and the enterprise service bus. It also helps design, build, aggregate, and deploy applications as Web services based on SOAP, WSDL and UDDI technologies."
1073
:
"SOAR Cognitive Architecture - SOAR (also spelled Soar) is a symbolic cognitive architecture, created by John Laird, Allen Newell, and Paul Rosenbloom at Carnegie Mellon University. It is both a view of what cognition is and an implementation of that view through a computer programming architecture for Artificial Intelligence (AI). Since its beginnings in 1983 and its presentation on a paper in 1987 it has been widely used by AI researchers to model different aspects of human behavior."
1074
:
"Social Software - Social software is a type of software that enables people to rendezvous, connect or collaborate through computer-mediated communication and to form online communities. Broadly conceived, this term could encompass older media such as mailing lists and Usenet, but some would restrict its meaning to more recent software genres such as blogs and wikis. Others suggest that the term social software is best used not to refer to a single type of software, but rather to the use of two or more modes of computer-mediated communication that result in community formation. In this view, people form online communities by combining one-to-one (e.g., email and instant messaging), one-to-many (Web pages and blogs), and many-to-many (wikis) communication modes. In many online communities, real life meetings become part of the communication repertoire."
1075
:
"SoftICE - SoftICE is a kernel mode debugger for Microsoft Windows. It is designed to run underneath Windows such that the operating system is unaware of its presence. Unlike an application debugger, SoftICE is capable of suspending all operations in Windows when instructed. For driver debugging this is critcal due to how hardware is accessed and the kernel of the operating system functions."
1076
:
"Softimage|XSI - Softimage|XSI is a high-end three-dimensional (3D) graphics application developed by Softimage, Co., a subsidiary of Avid Technology, Inc., which is used predominantly in the film, gaming and advertising industries for the production of 3D environments and scenes."
1077
:
"Software - Software, sometimes abreviated s/w, is also called a computer program that enables a computer is also called a computer program that enables a computer to perform a specific task, as opposed to the physical components of the system (hardware). This includes application software such as a word processor, which enables a user to perform a task, and system software such as an operating system, which enables other software to run properly, by interfacing with hardware and with other software. Programs stored on non-volatile storage built from integrated circuits (e.g. ROM or PROM) are usually called firmware."
1078
:
"Software Agent - A software agent is an unit or component in a logical model that describes software that acts for a user or other program in a relationship of agency. A software agent is typically a piece of autonomous, or semi-autonomous proactive and reactive, computer software. Many individual communicative software agents may form a multi-agent system multi-agent system (MAS) is a system composed of several agents, capable of mutual interaction. The interaction can be in the form of message passing or producing changes in their common environment. The agents can be autonomous entities, such as software agents or robots."
1079
:
"Software Architecture - Software Architecture refers to a static framework or structure that provides the form of a software system and the conventions, policies, and mechanisms for composing itself with subsystems, or component parts, that can populate the architecture. The architecture defines how the parts relate to each other including constraints governing how they can relate, or there are interfaces that define how the parts intercommunicate."
1080
:
"Software Audit - Software audit refers to the investigation of the software installed on the computers in an organisation with the purpose of ensuring that it is all legal and authorised. Software audits minimise the risk of prosecution for software piracy due to the use of unlicensed software. In addition to enforce software usage policy, the risk of viruses is minimised by preventing uncontrolled software copying."
1081
:
"Software Blacklist - Software blacklisting is a tool used by manufacturers of software and music on CD and DVD, which will audit the user's computer for certain types of virtual CD and CD authoring software. If blacklisted software is found then certain actions are taken by the software on the game or music disc. Examples would be allowing the copying of the game to take place, but crashing the copied game when attempting to start it; allowing copies of games that will malfunction in subtle ways; simply disallowing the game to be run while this software exists etc."
1082
:
"Software Cracking - Software cracking refers to the modification of software to remove encoded copy prevention. Distribution of cracked software is generally an illegal act of copyright infringement."
1083
:
"Software Engineering - Software engineering refers to a systematic approach to the analysis, design, implementation and maintenance of software, in which technologies and practices from computer science, project management, engineering, application domains and other fields, are applied. There are various models of the software life-cycle, and many methodologies for the different phases."
1084
:
"Software Entropy - Software entropy refers to the tendency for software, over time, to become difficult and costly to maintain. A software system that undergoes continuous change, such as having new functionality added to its original design or fitting into the latest technology environment, will eventually become more complex and disorganized as it grows, losing its original design structure. At some point, it may be better to redesign the software in order to support the changes rather than building on the existing program, which, however, maybe quite costly and introduce new bugs and problems."
1085
:
"Software Environment - Software environment typically refers the environment to support an application, which may include the operating system, the database system, specific development tools or compiler."
1086
:
"Software Generic - Software Generic refers to the system operating software release for general availability, for example, SUN Solaris 10 etc."
1087
:
"Software Genre - Software Generic refers to the system operating software released for general availability, for example, SUN Solaris 10 etc."
1088
:
"Software Hoarding - Software hoarding is the creation of proprietary software products based on free licensed software. This software forking can cause interoperability problems leading to vendor lock-in, as well as a limitation of knowledge. The practice of software hoarding was the impetus for the creation of copyleft. Software hoarding is legal unless restricted by copyleft or a similar license, but it is considered immoral by the more ideological proponents of free software."
1089
:
"Software License - A software license is an agreemt with certain terms and conditions that grant permission to do things with computer software that would otherwise be prohibited by copyright law. If one does not follow the terms of the license, then he or she is subject to the normal restrictions of copyright law. For example, a software license might give permission to use and to make copies of the software. A copyright holder of software may offer a software license unilaterally, or as part of a software license agreement with another party. There are a variety of different types of software licenses. Some are based on the number machines on which the licensed program can run whereas others are based on the number of users that can use the program. Most personal computer software licenses allow you to run the program on only one machine and to make copies of the software only for backup purposes. Some licenses also allow you to run the program on different computers as long as you don't use the copies simultaneously."
1090
:
"Software Licensing - Software licensing refers to the practice of allowing an individual or group to use (or to do other things such as copy) a piece of software, by the copyright owner of the software. Nearly all software applications are licensed rather than sold. A software is licensed by owners in a variety of ways, including: shrink wrap contract accompanying the software, free software license accompanying open-source software which is typically made freely available in source code form, and enterprise software licenses which are agreements the terms of which are specifically negotiated between the licensee and licensor."
1091
:
"Software Life-Cycle - Software life-cycle, a terms used in the software engineering, refers to the phases a software product goes through between when it is conceived and when it is no longer available for use. The software life-cycle typically includes the following: requirements analysis, design, construction, testing (validation), installation, operation, maintenance, and retirement."
1092
:
"Software Metric - A software metric is a quantitative measure of some property of a piece of software or its specifications. Common software metrics include:↵order of growth↵source lines of code↵cyclomatic complexity↵function points↵bugs per line of code↵code coverage↵Number of lines of customer requirements.↵number of classes and interfaces↵Robert Cecil Martin's software package metrics↵cohesion↵Coupling↵"
1093
:
"order of growth"
1094
:
"source lines of code"
1095
:
"cyclomatic complexity"
1096
:
"function points"
1097
:
"bugs per line of code"
1098
:
"code coverage"
1099
:
"Number of lines of customer requirements."
1100
:
"number of classes and interfaces"
1101
:
"Robert Cecil Martin's software package metrics"
1102
:
"cohesion"
1103
:
"Coupling"
1104
:
"Software Package - A software package is a method for the distribution and installation of software on computer systems. The most common type of software package is that found sold in stores, such as a popular word processor. A user would purchase the software, then follow the given instructions to install the software on their home machine. Packaged software is generally designed to appeal to a large audience of users, and although the programs may be tailored to a user's taste by setting various preferences, it is not as individualized as custom-designed and custom-programmed software."
1105
:
"Software Pipelining - Software pipelining is a technique used to optimize loops, in a manner that parallels hardware pipelining. Software pipelining is a type of out-of-order execution, except that the reordering is done by a compiler (or in the case of hand written assembly code, by the programmer) instead of the processor. Some computer architectures have explicit support for software pipelining, notably Intel's IA-64 architecture."
1106
:
"Software Piracy - Software piracy refers to the unauthorized duplication and use of computer software. Although some software piracy is done by companies for financial gain, most piracy is done by private individuals who lend discs to friends or copy programs from the workplace to their computers at home. Because computer data is so easy to duplicate, and the use of unauthorized software is so hard to detect, it appears impossible to stop software piracy. In old days, software vendors sell each copy of their software with a dongle €“ a coded plug that must actually be fitted to the computer for the software to function."
1107
:
"Software Project Life Cycle - Software project life cycle refers to the various stages of development of a program (software), from the identification of requirements, design, coding, testing to the installation, maintenance, and support of the finished program."
1108
:
"Software Rot - Software rot, also known as code rot or software decay, is a type of bit rot. It describes the perceived slow deterioration of software overtime, that will eventually lead to it becoming faulty, unusable, or otherwise in need of maintenance. Software rot comes in two forms: 1) Dormant Rot: Software that is not (yet) being used gradually becomes unusable as the remainder of the application changes. It has been observed that un-used software has a half life of perhaps one year; 2) Active Rot: Software that is being continuously modified tends to lose its integrity over time."
1109
:
"Software Sampler - A software sampler, similar to a software synthesizer, is a software synthesizer generates sounds algorithmically from Mathematically -described tones or short-term waveforms (i.e., less than 100ms in length). A software sampler always reproduces samples, often much longer than a second, as the first step of its algorithm."
1110
:
"Software Suite - Software suite refers to a collection of programs sold together as one package. Programs within the suite are generally supplementary to each other in functions. For example, an office software suite might include a word processor, a spreadsheet, a presentation program, and a database program.Some software suites are Lotus SmartSuite, Novell PerfectOffice, and ClarisWorks."
1111
:
"Software Theft - Software theft, also known as software piracy, refers to the unauthorized duplication and use of computer software. Although some software piracy is done by companies for financial gain, most piracy is done by private individuals who lend discs to friends or copy programs from the workplace to their computers at home. Because computer data is so easy to duplicate, and the use of unauthorized software is so hard to detect, it appears impossible to stop software piracy. In old days, software vendors sell each copy of their software with a dongle €“ a coded plug that must actually be fitted to the computer for the software to function."
1112
:
"Software Tool - Software tool, also known as programming tool, is a program or application that software developers use to create, debug, or maintain other programs and applications. The term usually refers to relatively simple programs that can be combined together to accomplish a task, much as one might use multiple hand tools to fix a physical object."
1113
:
"SoftwareValet - SoftwareValet is a software installer for BeOS, originally developed by Starcode Software and included with BeOS since 1998. It was originally developed for web deployment of applications, where a user would click on an 'Install with SoftwareValet' link on a website, and the BeOS web browser at the time, NetPositive, would launch SoftwareValet."
1114
:
"Source Code - Source code, just called source or code, is any series of statements written in some high level computer programming language. The term is typically used in the context of a particular piece of computer software. A computer program's source code is the collection of files that can be converted from human-readable form to an equivalent computer-executable form in machine language. The source code is either converted into an executable file by a compiler for a particular computer architecture, or executed on the fly from the human readable form with the aid of an interpreter."
1115
:
"Source Code Repository - A source code repository is a place where large amounts of source code are kept, either publicly or privately. They are often used by multi-developer projects to handle various versions in which developers submit various patches of code in an organized fashion. CVS is a popular GNU project to handle these issues and is common in open source projects."
1116
:
"Source Language - Source language refers to the computer programming language in which a source program or source code is written. Source languages are classified as either high-level languages or low-level languages, according to whether each notation in the source language stands for many or only one instruction in machine code. Programs in high-level languages are translated into machine code by either a compiler or an interpreter program. Low-level programs are translated into machine code by means of an assembler program. The program, before translation, is called the source program; after translation into machine code it is called the object program."
1117
:
"Source Program - Source program refers to a program written in a source language, which is are classified as either high-level languages or low-level languages, according to whether each notation in the source language stands for many or only one instruction in machine code. Programs in high-level languages are translated into machine code by either a compiler or an interpreter program. Low-level programs are translated into machine code by means of an assembler program. The program, before translation, is called the source program; after translation into machine code it is called the object program."
1118
:
"SourceForge - SourceForge is the world's largest Open Source software development project facilitated through a web site (SourceForge.net, owned by OSTG, Inc. ("Open Source Technology Group")), hosting more than 100,000 projects and over 1,000,000 registered users with a centralized resource for managing projects, issues, communications, and code. SourceForge.net has the largest repository of Open Source code and applications available on the Internet, and hosts more Open Source development products than any other site or network worldwide. SourceForge.net provides a wide variety of servicesto projects we host, and to the Open Source community."
1119
:
"SOX Unix - SOX Unix(SOX) is a UNIX clone developed from scratch in Brazil in late 1980s by Computadores e Sistemas Brasileiros SA (now Cobra Tecnologia). Certified as UNIX-compatible by X/Open (through Unisoft) in early 1989, SOX was one of the first re-implementation of UNIX fully independent of AT&T that passed the X/Open verification tests, and the only one ever completed 100% outside the United States."
1120
:
"SoX: Sound eXchange - Sound eXchange (SoX) is a free digital audio editor which is licensed under the GPL and distributed by Chris Bagwell through Sourceforge. SoX is written in standard C, with a command-line interface."
1121
:
"Sparse Conditional Constant Propagation - Sparse conditional constant propagation is an optimization frequently utilized in compilers after conversion to static single assignment form (SSA). It simultaneously removes dead code and propagates constants throughout a program. It must be noted, however, that it is strictly more powerful than applying dead code elimination and constant propagation in any order or any number of repetitions."
1122
:
"Spell Checker - Spell checker is a program that checks the spelling of words in a text or other document. Spell checkers are particularly valuable for catching typos. Some spell checker comes with grammer and syntax checking too. Many word processors come with a built-in spell checker, but you can also purchase stand-alone utilities."
1123
:
"Spider-Man Cartoon Maker - The Spider-Man Cartoon Maker was a recreational software package that allows the user to create animations with a minimal level of sophistication by utilising a library of backdrops, animations and sound effects from the 1994 Marvel Comics television series, Spider-Man: The Animated Series."
1124
:
"Spiral Model - The spiral model is a software development process combining elements of both design and prototyping-in-stages, in an effort to combine advantages of top-down and bottom-up concepts. Spiral model uses the waterfall model for each step, with the aim of managing risk. In the spiral model, developers define and implement features in order of decreasing priority."
1125
:
"SPOF: Single Point of Failure - Single point of failure(SPOF) is a generic phrase for any component of a system that upon failure will cause a malfunction in the entire system. A SPOF can be a hardware or electrical component or a software component. This can be as simple as a process failure or as catastrophic as a computer system crash."
1126
:
"Spreadsheet - Spreadsheet typically refers to a table of values arranged in rows and columns. Each value can have a predefined relationship to the other values. If you change one value, therefore, you may need to change other values as well. There are many spreadsheet applications available that enable users to create and operate the data in the table efficiently."
1127
:
"Spreadsheet Applications - Spreadsheet applications, sometimes simply referred to as spreadsheets, are computer programs that enable user to create and manipulate spreadsheets electronically. In a spreadsheet application, each value sits in a cell. Different data types can be assigned to each cell and how different cells depend on one another. The relationships between cells are called formulas, and the names of the cells are called labels."
1128
:
"Sproc: Stored Procedure - Stored procedure, also known as sproc, is a SQL program which is physically stored within a database and executed by calling it directly from the client or from a database trigger. The exact implementation of a stored procedure varies from one database to another. In most cases however, stored procedures allow for an API to be defined for a database, rather than having a client application interact with the tables and other database objects directly. When the SQL procedure is stored in the database, it does not have to be replicated in each client. This saves programming effort especially when different client user interfaces and development systems are used. Triggers and stored procedures are built into DBMSs used in client/server environments."
1129
:
"SQL: Structured Query Language - Structured query language(SQL) is an ANSI/ISO standardized query language used to create, modify, retrieve and manipulate data from relational database management systems. The original version called SEQUEL (structured English query language) was designed by an IBM research center in 1974 and 1975. SQL was first introduced as a commercial database system in 1979 by Oracle Corporation."
1130
:
"SQLite - SQLite, a public domain project, is an ACID-compliant relational database management system contained in a relatively small C library. Unlike the usual client-server paradigm, the SQLite engine is not a standalone process with which the program communicates, but is linked in and thus becomes an integral part of the program. Therefore, the primary communication protocol is direct API calls within the programming language. This can have a positive impact on the amount of overhead, latency time and overall simplicity."
1131
:
"Squeez Utility - Squeez is a shareware file archiver and data compression utility by Speedproject. It supports 13 different compression algorithms. The software reads and writes files in the formats ZIP, RAR, SQX, ACE, ARJ, BZIP, GZIP, LZH, TAR, UUE, JAR, CAB and 7z."
1132
:
"Squish of FidoNet - Squish is both the name of a FidoNet mail tossing application originally designed for DOS and OS/2, and the name of the primary mail storage format in which this application stores FidoNet and other local BBS messages. Before Squish, open storage formats for FidoNet and Bulletin Board messages were relatively slow and inefficient."
1133
:
"SR: Service Release - Service Release (SR) refers to a special software release including service packs (SP) and the original product."
1134
:
"Srvany - Srvany is a Microsoft Windows 2000/2003/XP Server Resource Kit utility that can be used to enable applications to run as services."
1135
:
"SSA: Static Single Assignment Form - Static single assignment form (SSA form or SSA) is an intermediate representation (IR) in which every variable is assigned exactly once. Existing variables in the original IR are split into versions, new variables typically indicated by the original name with a subscript, so that every definition gets its own version. In SSA form, use-def chains are explicit and each contains a single element."
1136
:
"SSADM: Structured Systems Analysis and Design Method - Structured Systems Analysis and Design Method (SSADM) is a system approach to the analysis and design of information systems. SSADM was produced for the CCTA, a UK government office concerned with the use of technology in government, from 1980 onwards. The names of "Structured Systems Analysis and Design Method" and "SSADM" are now Registered Trade Marks of the Office of Government Commerce (OGC), which is an Office of the United Kingdom's Treasury. SSADM is a waterfall method by which an IS design can be arrived at; SSADM can be thought to represent a pinnacle of the rigorous document-led approach to system design, and contrastswith more contemporary Rapid Application Development methods such as DSDM."
1137
:
"Stack of Data Structure - In computer science, a stack is a temporary abstract data type and data structure based on the principle of Last In First Out (LIFO). Stacks are used extensively at every level of a modern computer system. For example, a modern PC uses stacks at the architecture level, which are used to run an operating system. The operating system also uses stacks, which are used to run a Java Virtual Machine, which is stack oriented, and the Java language itself has a class called "Stack", which can be used by the programmer. The stack is ubiquitous."
1138
:
"Startup Code - Startup code refers to a piece of assembly language code that prepares the way for software written in a high-level language. Startup code usually initializes code and data segments, safes I/O, and sets up chip selects and wait states. Most cross-compilers come with startup code that a user can modify, compile, and link with embedded programs."
1139
:
"Static Class - Static class is a concept in C# programming. Static classes and class members are used to create data and functions that can be accessed without creating an instance of the class. Static class members can be used to separate data and behavior that is independent of any object identity: the data and functions do not change regardless of what happens to the object. Static classes can be used when there is no data or behavior in the class that depends on object identity."
1140
:
"Static Code Analysis - Static code analysis is a set of methods for analysing software source code or object code in an effort to gain understanding of what the software does and establish certain correctness criteria. The term is usually applied to the analysis performed by an automated tool, with human analysis being called program understanding or program comprehension."
1141
:
"Static Library - In computer science, a static library, also referred to as a statically linked library, is a computer library in which links are resolved at compile-time by a linker. Static libraries may be merged with other libraries and executables to form a single object file, or they may be loaded at runtime into the address space of the linking executable or library, at a static memory offset determined at link-time."
1142
:
"STL: Standard Template Library - The Standard Template Library (STL) is a C++ library of container classes, algorithms, and iterators; it provides many of the basic algorithms and data structures of computer science. The STL is a generic library, meaning that its components are heavily parameterized: almost every component in the STL is a template. STL was developed by Alexander Stepanov and Meng Lee at Hewlett-Packard. It is based on their research in the field of generic programming."
1143
:
"Strength Reduction - Strength reduction is a compiler optimization where a function of some systematically changing variable is calculated more efficiently by using previous values of the function. In a procedural programming language this would apply to an expression involving a loop variable and in a declarative language it would apply to the argument of a recursive function."
1144
:
"String Intern Pool - In some modern programming languages, including Java and C#, the string intern pool is a data structure managed internally by the platform or virtual machine to facilitate efficient implementation of certain string processing tasks. The pool contains a single copy (called the intern) of each distinct string that is currently represented by a string object in the system. By invoking a method of the string class (for example String.intern() in Java), the programmer has access to this unique string object."
1145
:
"Structured Analysis - Structured analysis is one of requirements analysis methods used in software engineering. Structure analysis includes a few approaches: 1) Data Flow Diagrams to show information flow and processing in a system. 2) Structure Charts show module structure and calling relationships. 3) State models include diagrams and tables that show the significant states in a system, events that cause transitions between states and the actions that result. 4) Task diagrams show threads of execution and the real-time operating system services like queues, event flags and semaphores that connect them in a multi-tasking environment."
1146
:
"Structured Design - Structured design is one of systematic top-down design techniques used in software engineering, usually after structured analysis. The goal of structured design is to produce design specifcations of a system, based on the system requirements generated from the structured analysis."
1147
:
"Structured Programming - Structured programming refers to a software development technique that includes structured analysis and design and results in the development of a structured program. Structured programming can be seen as a subset or subdiscipline of procedural programming, one of the major programming paradigms."
1148
:
"StuffIt Expander - StuffIt Expander, published by Aladdin Systems, is program for the Macintosh used to decompress files after downloading and makes them usable by your computer. StuffIt Expander is similar to an unzipping program in a PC."
1149
:
"Subversion - Subversion is an open source application used for revision control. It is sometimes abbreviated to svn in reference to the name of its command line interface. Subversion is designed specifically to be a modern replacement for Concurrent Versions System (CVS) and shares a number of the same key developers."
1150
:
"Subweb - Subweb, a term introduced by Microsoft, refers to certain portion of a website that has special style and restrictions when access. There is a feature within FrontPage that allows a section (contained within a folder, or directory) to be converted into a website in its own right. It is not seen as another site by the server, however, and so is known as a "subweb" of the current website. If you have the parent web open in FrontPage and click to go into the subweb, FrontPage opens it in a new window, strengthening the impression that you are dealing with a separate entity. In the new window, you can treat the subweb as though it was a separate website with its own theme, etc.."
1151
:
"SuperCollider Programming Language - SuperCollider, released in 2002 by its author, James McCartney, under the free software GPL license, is a real time audio synthesis programming language. Since then it has been evolving into a system used and further developed by both scientists and artists working with sound. It is an efficient and expressive dynamic programming language which makes it an interesting framework for acoustic research, algorithmic music and interactive programming."
1152
:
"SVK - SVK is a decentralized version control system written in Perl, with a design comparable to BitKeeper and GNU arch. The primary author of svk is Chia-liang Kao, and it is distributed under Perl's Artistic License as well as GPL."
1153
:
"Sweep Software - Sweep is an open source, multiplatform digital audio editor and live playback tool for GNU/Linux, BSD and compatible systems. It is able to handle many sound formats, including MP3, WAV and Vorbis. The most notable feature of Sweep is its stylus-like cursor tool called Scrubby.The program is licensed under the GPL and it is included in most modern Linux distributions."
1154
:
"Sybase SQL Server - Sybase SQL Server, a relational database management system of Sybase Corporation, was originally created for UNIX platforms in 1987. In 1988, SQL Server for OS/2 was co-developed for the PC by Sybase, Microsoft, and Ashton-Tate. In 1995, Sybase released SQL Server 11."
1155
:
"Symbolic Inference - Symbolic inference refers to the derivation of new facts from known facts and inference rules. This is one of the fundamental operations of artificial intelligence and logic programming languages like Prolog."
1156
:
"Syntax - Syntax, in computer science, refers to the spelling and grammar of a programming language. Computers are inflexible machines that understand what you type only if you type it in the exact form or sytax that the computer expects. Each program defines its own syntactical rules that control which words the computer understands, which combinations of words are meaningful, and what punctuation is necessary. The analysis of a program's syntax is usually performed using an automatically generated program known as a parser which often builds an abstract syntax tree."
1157
:
"Sysadmin: System Administrator - A system administrator, or sysadmin, is a person employed to maintain and operate a computer system or network for a company or other organization. System administrators are often members of an information technology department."
1158
:
"System Call - System call is the mechanism used by an application program to request service from the operating system or more specifically, the operating system kernel. System calls often use a special CPU instruction which causes the processor to transfer control to more privileged code, as previously specified by the more privileged code. This allows the more privileged code to specify where it will be entered as well as important processor state at the time of entry. When the system call is invoked, the program which invoked it is interrupted, and information needed to continue its execution later is saved. The processor then begins executing the higher privileged code, which, by examining processor state set by the less privileged code and/or its stack, determines what is being requested. When it is finished, it returns to the program, restoring the saved state, and the program continues executing."
1159
:
"System Integrator - System integrator is a person or company that specializes in integrating systems. System integrators may work in many fields. In Information Technology (IT), system integrators integrate multiple systems for inputting, processing, interpreting, storing, and categorizing data. For example, a system integrator may build an IT solution integrating an Oracle based inventory tracking system, an OnBase document management system, a Microsoft CRM system, a group of Panasonic scanners, and a Rimage storage system to produce an overall solution for the customer."
1160
:
"System Resource - System Resource refers to the tools, typically part of an OS, used by either hardware or software to communicate with each other, for example, to alert software of a need or by software to control a function of hardware. In the Windows operating system, there are two kinds system resources: User Resources, and GDI (Graphic Device Interface) Resources. The User component manages input from the keyboard, mouse, and other input devices and output to the user interface (windows, icons, menus, and so on). It also manages interaction with the sound driver, timer, and communications ports. The Graphics Device Interface (GDI) is the graphical system that manages what appears on the screen. It also provides graphics support for printers and other output devices. It draws graphic primitives, manipulates bitmaps, and interacts with device-independent graphics drivers, including those for display and printer output device drivers."
1161
:
"System Software - System software, also known as system program, is a type of software which includes the operating system and all utility programs that manage computer resources at a low level. System programs include operating systems, database managers, drivers, communications and messaging protocols, basic input/output system, compilers, loaders, linkers, and debuggers, etc."
1162
:
"Systems Administration - Systems administration refers to the duties of installing, supporting, and maintaining servers or other computer systems, and planning for and responding to service outages and other problems. Other duties may include scripting or light programming, project management for systems-related projects, supervising or training computer operators, and being the equivalent of a handyman for computer problems beyond the knowledge of technical support staff."
1163
:
"Systems Analysis - Systems analysis is the process of analysis of complex, large scale systems and the interactions within those systems. It involves the investigation of a business activity or clerical procedure, with a view to deciding if and how it can be computerized. The analyst discusses the existing procedures with the people involved, observes the flow of data through the business, and draws up an outline specification of the required computer system. The next step is systems design. Typically, an automated tool is used to facilitate the systems analysis. Tools in use for this purpose include Yourdon, SSADM (Structured Systems Analysis and Design Methodology), and Soft Systems Methodology."
1164
:
"Systems Management - Systems management refers to enterprise-wide administration of distributed computer systems. System management software that manages computer systems in an enterprise may include any and all of the following functions: software distribution and upgrading, user profile management, version control, backup & recovery, printer spooling, job scheduling, virus protection and performance and capacity planning. Microsoft's Systems Management Server and Novell's ZENworks are examples of systems management applications. Depending on organizational philosophy, systems management may include network management or come under it. The most known systems management systems are IBM Tivoli Framework, Microsoft Systems Management Server, HP OpenView, LANDesk, Novell ZENworks and CA Unicenter."
1165
:
"Systems Program - System program, also known as system software, is a type of software which includes the operating system and all utility programs that manage computer resources at a low level. System programs include operating systems, database managers, drivers, communications and messaging protocols, basic input/output system, compilers, loaders, linkers, and debuggers, etc."
1166
:
"Systems Programmer - Systems programmer may refer to two types of jobs in an oganization: 1) a person who writes system programs, or 2) a person who oversees the computer systems and is responsible for the installation and integration of new hardware and software."
1167
:
"Tag - A tag, in computer programming, refers to a command inserted in a document that specifies how the document, or a portion of the document, should be formatted. Tags are used by all format specifications that store documents as text files. This includes SGML and HTML. It may also refers to mark a section of a document with a formatting command."
1168
:
"Tape Library - Tape library, also known as tape automation system, is a data storage system for storing, retrieving, reading and writing multiple magnetic tape cartridges. It contains storage racks for holding the cartridges and a robotic mechanism for moving the cartridge to the drive. Smaller units can have several drives for simultaneous reading and writing and may hold from a handful to several hundred cartridges. Large units support dozens of drives and hold several thousand cartridges."
1169
:
"Task Scheduling - Task scheduling refers to the assignment of start and end times to a set of tasks. Task scheduling may subject to certain constraints, such as time constraints or resource constraints."
1170
:
"TASM: Turbo Assembler - The Turbo Assembler (TASM), mainly PC-targeted assembler package, was Borland's offering in the x86 assembler programming tool market. The Turbo Assembler package came bundled with the linker Turbo Linker, and was interoperable with the Turbo Debugger debugger. For compatibility with the common Microsoft Macro Assembler (MASM), TASM was able to assemble such source code files via its MASM mode. Turbo Assember is no longer maintained."
1171
:
"Telegard - Telegard is an early bulletin board system (BBS) software program written for IBM PC-compatible computers running MS-DOS. Telegard was written in Pascal, based on an unauthorized copy of the WWIV source code, and released in 1986, making it one of the earlier BBS packages for that platform.Presently Telegard is best known as the predecessor of Renegade, one of the most popular BBS software packages written."
1172
:
"Telelogic SYNERGY - Telelogic SYNERGY, formerly known as Continuus/CM, is a software tool for revision control (configuration management, SCM etc) of source code and other software development assets."
1173
:
"TenDRA Compiler - The TenDRA Compiler is a C/C++ compiler for POSIX compatible operating systems available under the terms of the BSD license. TenDRA uses the Architecture Neutral Distribution Format (ANDF), a specification created by the Open Group, as its intermediate language. It was originally developed by the Defense Evaluation and Research Agency (DERA) in the United Kingdom."
1174
:
"Terragen - Terragen is a freeware scenery generator program for Microsoft Windows and Apple Macintosh developed and published by Planetside Software. It can be used to create renderings and animations of landscapes.It is popular among amateur artists, which can be attributed to it being freeware, its intuitive interface, and its capability to create photorealistic landscapes when used skillfully."
1175
:
"Third Generation Language - Third generation language(3GL) is a high level language designed to be easier for a human to understand, including things like named variables. Fortran, ALGOL and COBOL are early examples of this sort of language. Most "modern" languages (BASIC, C, C++) arethird generation. Most 3GLs support structured programming."
1176
:
"Three Tier Architecture - Three tier architecture, in Web system and service, indicates the three layers of web architecture characterized by web client - web server - CGI-gatewayed-backend server. The backend server (for instance, a DBMS) takes parameters typically embedded in URLs and returns html pages that it constructs on the fly. Plug-Ins and Java provide other interesting Web extensional architectures."
1177
:
"Three Tier Model - Three tier model, in client server architecture computing, refers to the framework in which the user interface, functional process logic ("business rules"), data storage and data access are developed and maintained as independent modules, most often on separate platforms. The term "three-tier" or "three-layer", as well as the concept of multitier architectures, seems to have originated within Rational Software."
1178
:
"Time-Sharing - Time-sharing, in computer systems, is an operating system featured with allowing several users to run several tasks(multitasking) concurrently on one processor, or in parallel on many processors. In a system with time-sharing, multiple users could share a machine by using one user's idle time to service other users. Similarly, small slices of time spent waiting for disk, tape, or network input could be granted to other users."
1179
:
"TinyOS - TinyOS is an open source component-based operating system and platform targeting wireless sensor networks. TinyOS is an embedded operating system, written in NesC programming language, as a set of cooperating tasks and processes. It is designed to be able to incorporate rapid innovation as well as to operate within the severe memory constraints inherent in sensor networks. It is intended to be incorporated into smartdust."
1180
:
"Top-Down Design - Top-down design, in contrast to the bottom-up design, is one of the software design strategies. In the top-down design approach, an overview of the system is formulated, without going into detail for any part of it. Each part of the system is then refined by designing it in more details. Each new part may then be refined again, defining it in yet more details until the entire specification is detailed enough to validate the model. The top-down model is often designed with the assistance of "dark boxes" that make it easier to bring to fulfillment but insufficient and irrelevant in understanding the elementary mechanisms. This approach to software design probably originated at IBM, and grew out of structured programming practices."
1181
:
"TOS: Tape Operating System - Tape Operating System (TOS) is was an IBM operating system for the System 360, used in the early days around 1965 to support the IBM 360 model 30 and similar platforms. TOS was a predecessor to IBM's Disk Operating System."
1182
:
"TOS: The Operating System - The Operating System (TOS) was the operating system of the Atari ST range of computers. This range included the 520ST, 1040ST and the F, FM and E variations (e.g.1040STE). Later, 32-bit machines (TT, Falcon030) were developed using a new version of TOS, called MultiTOS, which was based on MiNT."
1183
:
"Trace Scheduling - Trace scheduling is an optimization technique used in compilers for computer programs. Trace scheduling was originally developed for Very Long Instruction Word, or VLIW machines, and is a form of global code motion. It works by converting a loop to long straight-line code sequence using loop unrolling and static branch prediction. This process separates out "unlikely" code and add handlers for exits from trace. The goal is to have the most common case executed as a sequential set of instructions without branches."
1184
:
"Trial Software - Trial software refers to software which consumers can try before they buy. Trial versions of software usually contain all the functionality of the regular version, but can only be used for a limited time."
1185
:
"Trigger - Trigger, generally speaking, is the cause of an event. In a database management system (DBMS), a trigger is an SQL procedure that is executed when a record is added or deleted. It is used to maintain referential integrity in the database. A trigger may also execute a stored procedure. Triggers and stored procedures are built into DBMSs used in client/server environments."
1186
:
"TrueSpace - trueSpace is a 3D computer graphics and animation software developed by Caligari Corporation, originally created for the Amiga Computer, and later for the Windows platform.One of the most distinctive features of TrueSpace is its interface, using mainly 3D widgets for most common editing operations."
1187
:
"TrueType - TrueType is an outline font standard originally developed by Apple Computer in the late 1980s as a competitor to Adobe's Type 1 fonts used in PostScript. The primary strength of TrueType was originally that it offered font developers a high degree of control over precisely how their fonts are displayed, right down to particular pixels, at various font heights."
1188
:
"TrustedBSD - The TrustedBSD project provides a set of trusted operating system extensions to the FreeBSD operating system, targeting the Common Criteria for Information Technology Security Evaluation. The main focuses of the TrustedBSD project are working on access control lists, event auditing, extended attributes, fine-grained capabilities, and mandatory access controls."
1189
:
"TTA: True Audio - True Audio (TTA) is a free, simple real-time lossless audio codec, based on adaptive prognostic filters which have shown satisfactory results comparing to the majority of modern analogs."
1190
:
"TUGZip - TUGZip is a freeware file archiver for Microsoft Windows. It handles a variety of archive formats, including some of the commonly used ones like zip, rar, gzip, bzip2, and 7z. It can even view disk image files like BIN, C2D, IMG, ISO and NRG."
1191
:
"Turbo BASIC - Turbo BASIC is a BASIC compiler and dialect originally created by Robert 'Bob' Zale and bought from him by Borland. When Borland decided to stop publishing it, Zale bought it back from them, renamed it to PowerBASIC and set up PowerBASIC Inc. to continue support and development of it."
1192
:
"Turbo C - Turbo C is a Borland Integrated Development Environment and compiler for the C programming language. Turbo C has been largely supplanted by Turbo C++, introduced May 1990, for both DOS and Windows and later by Borland C++."
1193
:
"Turbo C++ - Turbo C++ is a Borland C++ compiler and Integrated Development Environment (IDE), famous for its ultra-high compilation & linkage speed - hence the term "Turbo". It was a part of Borland's highly popular family of compilers including Turbo Pascal, Turbo Basic, Turbo Prolog and Turbo C. Turbo C++ was a successor of Turbo C, expanding the compiler similarly to how Turbo Pascal 5.5 added object functionality to the earlier Turbo Pascal versions. Unlike Turbo Pascal, however, Turbo C++ always adhered to C++ language standards of its time. It has never been capable of compiling ISO-standard C++, however."
1194
:
"Turbo Pascal - Turbo Pascal is a compiler and a Integrated Development Environment (IDE) for the Pascal programming language running mainly on MS-DOS, developed by Borland. The name Borland Pascal was generally reserved for the high end packages (with more libraries and standard library source code) whilst the original cheap and widely known version was sold as Turbo Pascal. The name Borland Pascal is also used more generically for Borland's dialect of Pascal. Borland has released three versions of Turbo Pascal for free: versions 1.0, 3.02 and 5.5."
1195
:
"Turbo Software - Turbo software refers to the series of compilers created by Borland International, Inc., including Turbo Pascal, Turbo C, Turbo C++, Turbo Basic, Turbo Prolog etc."
1196
:
"Tutorial - Tutorial, a term often used in the computer related training, refers to an instructional lesson that leads the user through key features and functions of things such as software applications, hardware devices, processes, system designs, and programming languages. The tutorial typically is set up as a series of steps that progress through levels of difficulty and understanding. For this reason, the tutorial is best followed in its logical sequence in order to understand all of the elements of what the user is trying to learn."
1197
:
"TwinText - TwinText is a HTML based Source Code Documentation Tool. It can generate HTML documents from a variety of programming languages, including C++, C, Java, IDL, PHP, C#, and Visual Basic. It runs on Windows."
1198
:
"UAT: User Acceptance Testing -User acceptance testing(UAT), typically the final phase in a software development process, refers to providing developed software to the targeted users to be tested for functionality. Software developers can do UAT by making the software available for a free trial to the public or by using an selected user group as a testing panel. UAT is done in order to get feedback from users to make any final adjustments to the programming before releasing the product to the general public."
1199
:
"UIT: User Interface Toolkit - User Interface Toolkit (UIT) was a C++-language, object-oriented layer on top of the XView graphical toolkit. It was developed by Sun Microsystems employees, but not officially supported by the company. The source code is freely available."
1200
:
"Ultrix - Ultrix is a version of Unix based on the Berkeley version, designed and implemented by Digital Equipment Corp (DEC, now part of HP) to run on their VAX and DECstation processors."
1201
:
"UML tool: Unified Modeling Language tool - Unified Modeling Language (UML) tool is an application software that supports some or all parts of the processes or the creation of the artifacts described in the software industry standard UML, which is used in the field of software engineering."
1202
:
"UML: Unified Modeling Language - Unified Modeling Language (UML) is a non-proprietary, object modeling and specification language used in software engineering. UML is a general-purpose modeling language that includes a standardized graphical notation that may be used to create an abstract model of a system, sometimes referred to as the UML model. UML may be considered as an extensible modeling language since it offers a profile mechanism to customize the language. If a concept you need is not present in the base language, you may introduce it by defining a stereotype."
1203
:
"Unix - Unix (or UNIX) is a computer operating system originally developed in the 1960s and 1970s by AT&T Bell Labs. Today Unix is split into various branches, developed over time by many companies and non-profit organizations, such as contributors to the GNU project. The present owner of the UNIX trademark is The Open Group, while the present claimants on the rights to the UNIX source code are SCO Group and Novell. The UNIX operating system was designed to let multiple users access the computer at the same time and share its resources. While initially designed for medium-sized minicomputers, the operating system was soon moved to larger, more powerful mainframe computers. As personal computers grew in popularity, versions of UNIX found their way into these boxes, and a number of companies produce UNIX-based machines forthe scientific and programming communities."
1204
:
"Unreachable Code - In computer programming, unreachable code, also known as dead code, typically consists of blocks of programming instructions or entire routines that will never be accessed because all calls to them have been removed, or code that cannot be reached for some reason. Dead code is undesirable for a number of reasons, but primarily because it suggests there is a fault in the software. Detecting dead code is a form of static analysis and involves performing control flow analysis to find any code that will never be executed regardless of the values of variables and other conditions at run time."
1205
:
"Upgrade - An upgrade, in computer industry, refers to a new version of a software or hardware product designed to replace an older version of the same product. Sometimes, upgrade means a better version such as a professional version with more functionalities and better performance to replace a lighter version of the same product."
1206
:
"Ups Debugger - Ups debugger is an open-source debugger developed in the late 1980s for Unix and Unix-like systems. It supports C and C++, and Fortran on some platforms. Unlike more popular debugger stacks for these platforms, ups is completely self-contained not merely a graphical front-end to lower-level debuggers like gdb (although some work has been done to make ups usable in that way). The ups user interface is built directly upon the X Window System and SunView, i.e. it does not use an intermediate toolkit such as Motif or GTK+."
1207
:
"Upward Compatible - Upward compatible, also known as forward compatible, refers to software that runs not only on the computer for which it was designed, but also on newer and more powerful models. Upward compatibility is important because it means you can move to a newer, larger, and more sophisticated computer without converting your data. An example of upward/forward compatibility is the specification that a web browser ignore HTML tags not recognised. Ignoring data or application instructions not recognized is the typical behavior of forward compatible systems."
1208
:
"USG Unix: Unix Support Group - Unix Support Group(USG) Unix refers to AT&T Unix commercial versions after Version 7, especially System III and System V releases 1, 2, and 3. So called because during most of the lifespan of those versions AT&T's support crew was called the "Unix Support Group"."
1209
:
"User Interface - The user interface is the aggregate of means by which people (the users) interact with a particular machine, device, computer program or other complex tool (the system). The user interface provides two critical functions: Input, allowing the users to manipulate the system, and Output, allowing the system to produce the effects of the users' manipulation. There are many types of user interfaces, such as GUI, Command Line, Web-based user interfaces, and touch interface, etc."
1210
:
"Utility Computing - Utility computing, also called On Demand Computing, is a business model where computer resources are provided on an on-demand and pay-per-use basis, while in the conventional model, the user need to invest to own the system. As the utility computing provider can spread the customers' variance in resource needs, the utilization of the resources can be optimized."
1211
:
"Utility Program - Utility program, or utility, is a type of computer programs that support using the computer, an application or a development environment. Utility programs include file management, searching for files, comparing file contents as well as performing diagnostic routines to check performance and current health of the hardware. Utilities that support a development environment can perform a myriad of tasks."
1212
:
"Valgrind - Valgrind is a free programming tool for memory debugging, memory leak detection, and profiling. Valgrind was originally designed to be a free version of Purify for Linux on x86, but has since evolved to become a generic framework for creating dynamic analysis tools such as checkers and profilers. It is widely used by Linux programmers."
1213
:
"Vaporware - Vaporware (also spelt as vapourware) is software or hardware which is announced by a developer well in advance of its release, but which then fails to emerge, either with or without a protracted development cycle. The term implies deception, or at least a negligent degree of optimism; that is, it implies that the announcer knows that product development is in too early a stage to support responsible statements about its completion date, feature set, or even feasibility."
1214
:
"VB: Virtual Basic - Visual Basic (VB) is an event driven programming language and associated development environment prototyped by Alan Cooper as Project Ruby, then bought and vastly expanded by Microsoft. VB has been replaced by Visual Basic .NET. The older version of VB was derived heavily from BASIC and enables rapid application development (RAD) of graphical user interface (GUI) applications, access to databases using DAO, RDO, or ADO, and creation of ActiveX controls and objects."
1215
:
"Vbcc - Vbcc is a highly optimizing portable and retargetable ISO C compiler. It supports ISO C according to ISO/IEC 9899:1989 and a subset of the new standard ISO/IEC 9899:1999 (C99)."
1216
:
"VBScript: Virtual Basic Script - The Visual Basic Script Edition (VBScript) is an Active Scripting language interpreted via Microsoft's Windows Script Host. The language's syntax reflects its pedigree as a variation of Microsoft's Visual Basic programming language. It has gained significant support from Windows administrators seeking an automation tool more powerful than the batch language first developed in the late 1970s."
1217
:
"VBScript: Visual Basic Script Edition - Visual Basic Script Edition (VBScript) is an Active Scripting language interpreted via Microsoft's Windows Script Host. The language's syntax reflects its pedigree as a variation of Microsoft's Visual Basic programming language. It has gained significant support from Windows administrators seeking an automation tool more powerful than the batch language first developed in the late 1970s."
1218
:
"Veronica: Very Easy Rodent-Oriented Net-Wide Index to Computer Archives - Very Easy Rodent-Oriented Net-wide Index to Computer Archives (Veronica) is a search engine system for the Gopher protocol. Veronica is a constantly updated database of the names of almost every menu item on thousands of Gopher servers. The Veronica database can be searched from most major Gopher menus."
1219
:
"Vertical Software - Vertical software, also known as vertical application, is a king of software created for a specific kind of business or organization, such as hospitals or retail stores."
1220
:
"Video Game - A video game is a computer game where a video display such as a monitor or television is the primary feedback device."
1221
:
"Viewer Program - Viewer program is a utility software that enables you to read a file in its native format. Many shell utilities and file managers include viewers so that you can display different types of files."
1222
:
"VirtualGL: Virtual Graphics Library - VirtualGL, abbreviated from Virtual Graphics Library, is a program to remotely display a 3D application with hardware-accelerated rendering. VirtualGL non-intrusively converts any Unix/Linux OpenGL application into a thin client application, allowing for real-time interaction on a modest LAN regardless of data or geometry size."
1223
:
"Visual C++ - Visual C++, also known as MSVC, is an Integrated Development Environment (IDE) product for the C and C++ programming languages engineered by Microsoft. It has tools for developing and debugging C++ code, especially that written for the Microsoft Windows API, the DirectX API, and the Microsoft .NET Framework."
1224
:
"VisualKore - VisualKore is a modified version of the Ragnarok Online bot program known as Kore, originally made by Kura. The program is a derivative of OpenKore and henceforth has the same benefits of different and numerous contributors from all parts of the globe. VisualKore has intuitive graphical user interface as the main differential from OpenKore and other bots. VisualKore isn't tolerated by official RO servers, but the software is fully legalized. Unlike most bots, VisualKore is a commercial program."
1225
:
"VMS: Virtual Memory System - Virtual Memory System(VMS) is the proprietary operating system originally produced by Digital Equipment Corp (DEC, now part of HP) for its VAX minicomputer. VMS V1 was released in August 1978. VMS was renamed "OpenVMS" around version 5.5. OpenVMS is a multi-user, multiprocessing virtual memory-based operating system (OS) designed for use in time sharing, batch processing, real time (process priorities can be set higher than OS kernel jobs) and transaction processing. It offers high system availability through clustering, or the ability to distribute the system over multiple physical machines. This allows the system to be "disaster-tolerant" against natural disasters that may disable individual data-processing facilities."
1226
:
"VRML: Virtual Reality Modeling Language - Virtual Reality Modeling Language (VRML) is a standard file format for representing 3-dimensional (3D) interactive vector graphics, designed particularly with the World Wide Web in mind. VRML, which functions as a counterpart to HTML, is a platform-independent language that creates a virtual reality scene which users can 'walk' through and follow links much like a conventional Web page. In some contexts, VRML can replace conventional computer interfaces with their icons, menus, files, and folders. It is possible to use VRML to create, for example, a virtual museum with all the elements of a real museum, including corridors, display cases and multimedia demonstrations."
1227
:
"W2K: Windows 2000 - Windows 2000 (Win2K or W2K), part of the Microsoft Windows operating systems released in the year of 2000, is a preemptible and interruptible, graphical, business-oriented operating system that was designed to work with either uniprocessor or symmetric multi-processor (SMP) 32-bit Intel x86 computers. Windows 2000 comes in four versions: Professional, Server, Advanced Server, and Datacenter Server. Additionally, Microsoft offers Windows 2000 Advanced Server- Limited Edition, which runs on 64-bit Intel Itanium microprocessors. Windows 2000 is classified as a hybrid kernel operating system, and its architecture is divided into two modes: user mode and kernel mode. The kernel mode provides unrestricted access to system resources and facilitates the user mode, which is heavily restricted and designed for most applications."
1228
:
"WAMP: Microsoft Windows, Apache, MySQL and Perl/PHP/Python - WAMP, an acronym for the combination Microsoft Windows, Apache, MySQL and one or more of Perl, PHP and Python, defines the Windows based Web platform. It is modelled after the more well-known LAMP, referring to the all-open source/free software approach which uses Linux instead of Windows."
1229
:
"Warez - Warez refers primarily to copyrighted material traded in violation of its copyright license. The term generally refers to releases by organized groups, as opposed to peer-to-peer file sharing between friends or large groups of people with similar interest using a Darknet. It usually does not refer to commercial for-profit software counterfeiting. This term was initially coined by members of the various computer underground circles, but has since become commonplace among Internet users and the media."
1230
:
"Watchdog Event Log - Watchdog Event Log is a file created by Windows operating systems using the .WDL extension."
1231
:
"Waterfall Model - The waterfall model is a software development process in which development is seen as flowing like waterfall steadily downwards through the phases of requirements analysis, design, implementation, testing (validation), integration, and maintenance. The Waterfall Model is considered old-fashioned or simplistic by proponents of object-oriented design which often uses the spiral model instead."
1232
:
"Web Authoring - Web authoring refers to the process of websites and web pages creation, or authroing. There is a lot of web authoring software available that enables the user to develop a Web site in a desktop publishing format. The software will generate the required HTML coding for the layout of the Web pages based on what the user designs. Typically, the user can toggle back and forth between the graphical design and the HTML code and make changes to the Web page in either the design of the accompanying code. Microsoft FrontPage is an example of the web authroing software."
1233
:
"Web Content Management System - Web Content Management System is a type of Content management system software used for managing websites. Usually the software provides tools where users with little or no knowledge of programming languages and markup languages (such as HTML) can create and manage contents with relative ease of use. Most systems use a database to hold contents, and a presentation layer displays the content to regular website visitors based on a set of templates. Management of the software is typically done through a web browser, but some systems may be modified in other ways. The Wiki system is a web content management system."
1234
:
"Web Page - A web page is an HTML/XHTML document that is included in a website. A web page is almost always accessible over the network or Internet via HTTP."
1235
:
"Web Portal - Web portals are sites on the World Wide Web that typically provide personalized capabilities to their visitors. They are designed to use distributed applications, different numbers and types of middleware and hardware to provide services from a number of different sources. In addition, business portals are designed to share collaboration in workplaces. A further business-driven requirement of portals is that the content be able to work on multiple platforms such as personal computers, personal digital assistants (PDAs), and cell phones."
1236
:
"Web3D Consortium - The Web3D Consortium, formally the VRML Consortium, is a member-funded industry consortium committed to the creation and deployment of open, royalty-free standards that enable the communication of real-time 3-dimensional (3D) graphics across applications, networks, and XML web services. The Consortium works closely with the ISO, MPEG and W3C standardization bodies to maximize market opportunities for its membership."
1237
:
"Weblog Software - Weblog software, also called blog software or blogware, is a category of software which consists of a specialized form of Content Management Systems specifically designed for creating and maintaining weblogs. Most weblog applications have features such as facilitating authoring and editing of blog posts or articles, various linking and web syndication features, and the ability to easily publish the blog to the world wide web."
1238
:
"Websphere - WebSphere is an IBM brand of products that implement and extend Sun's JavaTwoEnterpriseEdition (J2EE) platform. The Java-based application and transaction infrastructure delivers high-volume transaction processing for e-business and provides enhanced capabilities for transaction management, as well as security, performance, availability, connectivity, and scalability."
1239
:
"Widget Toolkits - In computer programming, widget toolkits, also known as GUI toolkits, are sets of basic building elements for graphical user interfaces. They are often implemented as a library, or application framework."
1240
:
"Wildcat! - Wildcat! was a bulletin board system (BBS) software package developed in 1986 by Mustang Software to create dial-up BBS operating under PC-DOS. It was later ported to Microsoft Windows. By the release of Version 4 it was the basis for over 50,000 bulletin boards worldwide."
1241
:
"Windbg Debugger - Windbg is a multipurpose debugger for Microsoft Windows, created and distributed on the web by Microsoft. It can be used to debug both user mode applications and the operating system itself in kernel mode. It is a GUI application, but has little in common with the more well-known Visual Studio Debugger."
1242
:
"Window Me - Windows Me, also known as Windows Millennium Edition, is a hybrid 16-bit/32-bit graphical operating system released on September 14, 2000 by Microsoft. A successor to Windows 95 and Windows 98, it was marketed as a "Home Edition" when compared to Windows 2000. It provided Internet Explorer 5.5, Windows Media Player 7, and the new Movie Maker software, whichprovided basic video editing and was designed to be easy for home users."
1243
:
"Windowing Software - Windowing software, also known as windowing system, provides an operating system with the capability of displaying GUI windows. Windowing software allows a workstation's screen to be divided into rectangular areas which act like a separate input/output devices under the control of different application programs. This gives the user the ability to see the output of several processes at once and to choose which one will receive input by selecting its window, usually by pointing at it with a mouse. It is normally one part of a larger desktop environment. Some windowing systems, like the X Window System, have advanced capabilities such as network transparency, allowing the user to display graphical applications running on a remote machine."
1244
:
"Windowing System - A windowing system, also known as windowing software, provides an operating system with the capability of displaying GUI windows. Windowing system allows a workstation's screen to be divided into rectangular areas which act like a separate input/output devices under the control of different application programs. This gives the user the ability to see the output of several processes at once and to choose which one will receive input by selecting its window, usually by pointing at it with a mouse. It is normally one part of a larger desktop environment. Some windowing systems, like the X Window System, have advanced capabilities such as network transparency, allowing the user to display graphical applications running on a remote machine."
1245
:
"Windows 1.0 - Windows 1.0, released on November 20, 1985, was Microsoft's first attempt to implement a multi-tasking graphical user interface-based operating environment on the PC platform. Windows 1.0 offered limited multitasking of existing MS-DOS programs and concentrated on creating an interaction paradigm, an execution model and a stable API for native programs for the future."
1246
:
"Windows 2.x - Windows 2.x is a family of Microsoft Windows graphical user interface-based operating environments that succeeded Windows 1.0. Windows 2.x was said to look similar to the original Mac OS and more closely matched Microsoft's pre-release publicity for Windows 1.0. Released on November 1, 1987, Windows 2.0 allowed for windows to overlap each other, in contrast to Windows 1.0, which could only display tiled windows."
1247
:
"Windows 2003 - Windows Server 2003 is part of the Microsoft Windows operating systems released in the year of 2003 as the successor to Windows 2000 Server. Windows Server 2003 incorporated compatibility and other features from Windows 2000 and XP. Unlike Windows 2000 Server, Windows Server 2003's default installation has none of the server components enabled, to reduce the attack surface of new machines. Windows Server 2003 includes compatibility modes to allow older applications to run with greater stability. It was made more compatible with Windows NT 4.0 domain-based networking. Incorporating and upgrading a Windows NT 4.0 domain to Windows 2000 was considered difficult and time consuming, and generally was considered an all or nothing upgrade particularly when dealing with Active Directory. Windows Server 2003 brought in enhanced Active Directory compatibility, and better deployment support, to ease the transition from Windows NT 4.0 to Windows Server 2003 and Windows XP Professional."
1248
:
"Windows 3.0 - Windows 3.0 was the third major release of Microsoft Windows, and came out on May 22, 1990. It became the first widely successful version of Windows and a powerful rival to Apple Macintosh and the Commodore Amiga on the GUI front. Windows 3.0 succeeded Windows 2.1x and included a significantly revamped user interface as well as technical improvements to make better use of the memory management capabilities of Intel's 80286 and 80386 processors."
1249
:
"Windows 3.1x - The Windows 3.1x family of Microsoft Windows operating systems were released from 1992 to 1994, succeeding Windows 3.0. This family of Windows could run in either Standard or 386 Enhanced memory modes. The exception was Windows for Workgroups 3.11, which could only run in 386 Enhanced mode."
1250
:
"Windows 95 - Windows 95 is a consumer-oriented GUI-based operating system released in 1995 by Microsoft, and was a significant progression from the company's previous versions of Windows. Windows 95 was intended to combine the functions of Microsoft's formerly separate MS-DOS and Windows products. It featured significant improvements over the popular Windows 3.1, most visibly the graphical user interface (GUI) whose basic format and structure is still used today in Windows XP. There were also large changes to the underlying workings, including support for 255-character mixed-case long filenames and preemptively multitasked protected-mode 32-bit applications."
1251
:
"Windows 98 - Windows 98 is a graphical operating system released in 1998 by Microsoft. The new operating system was essentially an updated version of Windows 95, and like that earlier version, it was a hybrid 16-bit/32-bit monolithic product. Among its features were better AGP support, functional USB drivers, and support for multiple monitors and WebTV. Also added was support for the FAT32 file system which allowed Windows 98 support disk partitions larger than the two gigabyte maximum accepted by Windows 95. As in later releases of Windows 95, Internet Explorer continued to be integrated into the Windows Explorer interface. It was also the first version of Windows to support ACPI."
1252
:
"Windows API - The Windows API refers to the core set of application programming interfaces available in the Microsoft Windows operating systems. It is designed for usage by C/C++ programs and is the most direct way to interact with a Windows system for software applications. Lower level access to a Windows system, mostly required for device drivers, is provided by the Native API in current versions of Windows."
1253
:
"Windows Forms - Windows Forms refers to the GUI portion of the Microsoft .NET development framework, providing access to the native Windows widgets by wrapping the existing Win32 API in managed code."
1254
:
"Windows NT - Windows NT, where NT means New Technology, is a family of Microsoft's 32-bit operating system first released in July 1993 and Windows NT 3.1. NT was designed for high end workstations and servers. It was originally designed to be a powerful high-level language-based processor-independent multiprocessing multiuser operating system with features comparable to Unix to complement workstation versions of Windows that were based on MS-DOS until 2001. It was the first 32-bit version of Windows. Windows XP and Windows Server 2003 are the latest versions of Windows NT."
1255
:
"Windows Server System - Windows Server System is an integrated set of server software from Microsoft. It forms the infrastructure for operating the back end of an information technology system. Microsoft divides its server offerings into four major categories: "Security", "IT Operations", "Applications", and "Collaboration". Many of the products integrate deeply with Visual Studio to help software developers and designers build solutions using familiar tools."
1256
:
"Windows XP - Windows XP is a line of operating systems developed by Microsoft for use on general-purpose computer systems, including home and business desktops, notebook computers, and media centers. Windows XP is the successor to both Windows 2000 and Windows Me, and is the first consumer-oriented operating system produced by Microsoft to be built on the Windows NT kernel and architecture. With the release of Windows XP, the Windows 95/98 architecture was finally discontinued. Windows XP was first released on October 25, 2001."
1257
:
"Wine Software - WINE Software, a free software released under the GNU Lesser General Public License (LGPL), allows a PC running a Unix-like operating system and the X Window System to execute programs originally written for Microsoft Windows. Alternately, those wishing to port a Windows application to a Unix-like system can compile it against the Wine libraries. The name 'Wine'derives from the recursive acronym "Wine Is Not an Emulator", or "WINdows Emulator". While the name sometimes appears in the forms "WINE" and "wine", the project developers have agreed to standardize on the form "Wine"."
1258
:
"WinG - WinG is an API to provide fast graphics performance on Windows 3.1. It was later built-in to Windows 95. In Win32, the equivalent of WinG functionality is provided via API calls such as CreateDIBSection(), SetDIBColorTable(), BitBlt(), and StretchBlt()."
1259
:
"Wings 3D - Wings 3D is a free and open source polygon mesh modeler. Wings 3D is available for most platforms, including Windows, Linux and Mac OS X, using the Erlang environment.Wings 3D is best suited for modelling and texturing low-polygon meshes, towards which its interface is geared. When compared to other open-source modelling programs such as Blender, its GUI is minimalistic."
1260
:
"Winny Program - Winny, also known as WinNY, is a Japanese peer-to-peer (P2P) file-sharing program similar to Freenet that claims to keep user identities untraceable. While Freenet was implemented in Java, Winny was implemented as a Windows C++ application. The software takes its name from WinMX, which is a peer-to-peer file sharing program authored by Frontcode Technologies and running on Windows operating systems."
1261
:
"WinRAR - WinRAR is a shareware file archiver and data compression utility by Eugene Roshal. It is one of the few applications that are able to create RAR archives natively, as the encoding method is held to be proprietary."
1262
:
"WinZip - WinZip is a program to uncompress files after downloading them on a PC running Microsoft Windows. Many files are stored on servers in a compressed format, making them take up less disk space, and reducing the time it takes for you to download them. WinZip decompresses these files, and makes them usable by the computer."
1263
:
"Word Processing - Word processing refers to the process of using a computer to create, edit, format and print documents. To perform word processing, a special program called a word processor is required, which enables you to create a document, store it electronically on a disk, display it on a screen, modify it by entering commands and characters from the keyboard, and print it on a printer."
1264
:
"Word Processor - Word processor is computer program that enables you to perform word processing functions such as creating, editing, formating and printing documents."
1265
:
"Wrapper Software - Wrapper software refers to a type of software that accompanies resources or other software for the purposes of improving convenience, compatibility, or security. For example, a wrapper is used to compress and encrypt software that is being sold over the Internet."
1266
:
"WWIV BBS - The WWIV Bulletin Board System (BBS) was one of the most popular dialup computer hosting systems in the online world during the late 1980s and early 1990s. One of its most unusual features was a proprietary networking system, allowing tens of thousands of systems running the software to link themselves together into various networks, much like FidoNet.This software started out as a single BBS in St. Louis, MO, run by Wayne Bell, who wrote it in BASIC."
1267
:
"WxWidgets - wxWidgets, formerly known as wxWindows, is an open source, cross-platform widget toolkit; that is, a library of basic elements for building a graphical user interface (GUI)."
1268
:
"X Window System - X Window System is a distributed, network-transparent, device-independent, multitasking windowing and graphics system originally developed by MIT for communications between X terminals and UNIX workstations. It provides the standard toolkit and protocol to build graphical user interfaces (GUI) on Unix, Unix-like operating systems, and OpenVMS €“ almost all modern operating systems support it. X provides the basic framework for a GUI environment: drawing and moving windows on the screen and interacting with a mouse and/or keyboard."
1269
:
"X.Org Fundation - The X.Org Foundation is an not-for-profit organization for the development of the X Window System. It was founded on 22 January 2004. The creation of the Foundation marked a radical change in the governance of X. Whereas the stewards of X since 1988 (including the previous X.Org) had been vendor organizations, X.Org is led by software developers and using community development on the bazaar model, which relies on outside involvement. Membership is also open to individuals, with corporate membership being in the form of sponsorship."
1270
:
"X.Org Server - X.Org Server, the X.Org Foundation Open Source Public Implementation of X11, is the official reference implementation of the X Window System, commonly used on Linux and UNIX. It is both open source and free software. The project is run by the X.Org Foundation and is hosted by freedesktop.org. X11R6.7.0, the first version of the X.Org Server, was forked from XFree86 4.4 RC2."
1271
:
"X/Open - X/Open Company, Ltd. was a consortium founded by several European UNIX systems manufacturers in 1984 to identify and promote open standards in the field of information technology. X/Open managed the UNIX® trademark from 1993 to 1996, when it merged with the Open Software Foundation to form The Open Group."
1272
:
"XAD - The XAD system is a open source client based archiving and unarchiving system. There is a master library called xadmaster.library which provides an interface between the client and the user application and there are clients handling the special archive formats. Three different types to handle file and disk archives and also disk image files (filesystem) are possible. They can be made by everyone. The master library itself includes some of these clients internally to make the work somewhat easier for the package maintainer and the user installing it."
1273
:
"XCMD: eXternal CoMmanD - eXternal CoMmanD(XCMD) is plugin protocol of HyperTalk which allows a user to develope HyperTalk command written in a language such as C or Pascal. XCMD is native code containers attached to stacks (as Macintosh-specific resources) with a single entry point and return value. XCMDs and XFCNs could be called just like regular message and function handlers from HyperTalk scripts, and were also able to send messages back to the HyperCard application. Some enterprising XCMD authors added advanced features like full color support (ColorizeHC, HyperTint, AddColor), multiple special-purpose windows (Prompt, Tabloid, Textoid, Listoid, ShowDialog, MegaWindows), drag and drop support and various hardware interfaces to the language."
1274
:
"Xcode - Xcode is Apple Computer's integrated development environment (IDE) for developing applications and other software for Mac OS X. It is shipped free with Mac OS X. First introduced on October 24, 2003 along with the release of Mac OS X v10.3, it extended and replaced Apple's earlier IDE, Project Builder, which was inherited from NeXT."
1275
:
"XDBX - xdbx is a graphical user interface to the dbx debugger under the X Window System. It provides visual feedback and mouse input for the user to control program execution through breakpoints, to examine and traverse the function call stack, to display values of variables and data structures, and to browse source files and functions. This program is old and is not being actively maintained."
1276
:
"XDM: X Window Display Manager - X Window Display Manager(XDM) is the default display manager for the X Window System. It is a bare-bones X display manager. It was introduced with X11 Release 3 in October 1988, to support the standalone X terminals that were just coming onto the market. It was written by Keith Packard. Because of its lack of configurability, users of GNOME, KDE or Enlightenment tend to use other managers such as GDM, KDM or Entrance instead of XDM."
1277
:
"Xerox Development Environment - The Xerox Development Environment was one of the first Integrated Development Environments (IDE). It was first implemented on the Xerox Alto in 1977."
1278
:
"Xerox PARC: Xerox Palo Alto Research Center - Xerox Palo Alto Research Center (PARC) was a flagship research division of the Xerox Corporation, based in Palo Alto, California, USA. It was founded in 1970, and spun out as a separate company wholly owned by Xerox in 2002. It is best known for essentially creating the modern personal computer graphical user interface (GUI) paradigm. From the early 1970s into the mid-1980s, PARC yielded an astonishing volume of ground-breaking hardware and software innovations. The modern mice, windows, and icons (WIMP) style of software interface was invented there. So was the laser printer and the local-area network; Smalltalk; and PARC's series of D machines anticipated the powerful personal computers of the 1980s by a decade. Sadly, the prophets at PARC were without honour in their own company, so much so that it became a standard joke to describe PARC as a place that specialised in developing brilliant ideas for everyone else."
1279
:
"XFCN: External Functions - External Functions (XFCN) is a plugin protocol of HyperTalk, which is native code containers attached to stacks (as Macintosh-specific resources) with a single entry point and return value. XFCNs could be called just like regular message and function handlers from HyperTalk scripts, and were also able to send messages back to the HyperCard application."
1280
:
"XFree86 - XFree86 is an implementation of the X Window System. It was originally written for Unix-like operating systems on IBM PC compatibles and is now available for many other operating systems and platforms. It is free and open source software under the XFree86 License version 1.1. It is developed by the XFree86 Project, Inc. XFree86 consists of client libraries used to write X applications ("clients"), and an X server responsible for the display. Clients and servers communicate via the X protocol, which allows them to run on different computers."
1281
:
"X-Men Cartoon Maker - The X-Men Cartoon Maker was a recreational software package that allows the user to create animations with a minimal level of sophistication by utilising a library of backdrops, animations and sound effects from the 1992 Marvel Comics television series, X-Men: The Animated Series."
1282
:
"XML Schema - XML Schema, published as a W3C Recommendation in May 2001, is one of several XML schema languages. It was the first separate schema language for XML to achieve Recommendation status by the W3C. XML Schema can be used to express a schema: a set of rules to which an XML document must conform in order to be considered 'valid' according to that schema. However, unlike most other schema languages, XML Schema was also designed with the intent of validation resulting in a collection of information adhering to specific datatypes, which can be useful in the development of XML document processing software, but which has also provoked criticism."
1283
:
"XMLBeans - XMLBeans is a Java-to-XML binding framework which is part of the Apache Software Foundation XML project. XMLBeans is a tool that allows you to access the full power of XML in a Java friendly way. Using XMLBeans, you can take advantage of the richness and features of XML and XML Schema and have these features mapped as naturally as possible to the equivalent Java language and typing constructs. XMLBeans uses XML Schema to compile Java interfaces and classes that you can then use to access and modify XML instance data."
1284
:
"XMLTerm - XMLterm, stands for ``experimental Mozilla terminal", is a terminal program. XMLterm adds hypertext and graphical capabilities to the Xterm interface through the use of the extensible markup language (XML). XMLterm is open source software and is implemented using the open source Mozilla component libraries. XMLTerm is both a command line "terminal", like an Xterm, and also a web page, like the one displayed by the browser."
1285
:
"XMMS: X Multimedia System - The X Multimedia System (XMMS) is a free audio player very similar to Winamp, that runs on many Unix-like operating systems."
1286
:
"XMMS2: Cross Platform Music Multiplexing System - Cross platform music multiplexing system(XMMS2) is a new generation of the XMMS audio player. It is a new design, written from scratch, separate from the XMMS codebase. While Peter Alm, one of the original authors of XMMS, was responsible for the initial design and coding of XMMS2 (late 2002 to early 2003), he has since passed on the responsibility of furthering the project to Tobias Rundstrm and Anders Gustafsson."
1287
:
"XOTcl - XOTcl, similar to Common Lisp Object System (CLOS), is an object-oriented extension for the Tool Command Language created by G. Neumann and U. Zdun. It supports metaclasses. Class and method definitions are completely dynamic."
1288
:
"XPCOM: Cross Platform Component Object Model - Cross Platform Component Object Model(XPCOM) is a simple, cross platform component model similar to CORBA or Microsoft COM. It has multiple language bindings and IDL descriptions so programmers can plug their custom functionality into the framework and connect it with other components."
1289
:
"Xterm - In Unix computing, Xterm is the standard terminal emulator for the X Window System. Xterm was originally written as a stand-alone terminal emulator for the VAXStation 100 (VS100) by Mark Vandevoorde, prior to the X Window System. A user can have many different invocations of xterm running at once on the same display, each of which provides independent input/output for the process running in it (normally the process is a Unix shell)."
1290
:
"XView - XView is a widget toolkit from Sun Microsystems introduced in 1988, providing an OPEN LOOK user interface for X Window System applications. It has the same look and feel of the earlier SunView system, and provides a similar object-oriented application programming interface for the C programming language."
1291
:
"Xxgdb - Xxgdb is an open-source X Window System front-end for GNU Debugger (GDB). It was adapted from xdbx, which uses the dbx debugger."
1292
:
"Y Windows - The Y Windows, also known as Y Window System, is a windowing system, consisting of a window server and a client library for writing applications, written by Mark Thomas. It is intended to be a successor to the X Window System. It differs from the X Window System in having an integrated widget set and ground-up support for things like an alpha channel, which allows transparent or translucent windows."
1293
:
"Yacc: Yet Another Compiler Compiler - Yacc, abbreviated from "Yet Another Compiler Compiler", is a Unix system tool program for generating C or C++ code for a parser. Yacc is a command-line tool that accepts a grammar description (in a text file) as input and generates the code for a parser for that grammar as output. Parsers are useful in many systems other than just compilers, such as for reading the contents of a configuration file stored in a system's flash memory. Yacc was developed by Stephen C. Johnson at AT&T for the Unix operating system. Later compatible programs were written, such as Berkeley Yacc, GNU bison, MKS yacc and Abraxas yacc. Each offers slight improvements and additional features over the original Yacc, but the concept has remained the same. Yacc has also been rewritten for other languages, including Ratfor, EFL, ML, Ada, Java, and Limbo."
1294
:
"YafRay: Yet Another Free Raytracer - YafRay, abbreviated from "Yet Another Free Raytracer", is an open source ray tracing program that uses an XML scene description language. It has recently been integrated into, and is often used to render scenes made in, the 3D modelling software Blender."
1295
:
"Z88DK - Z88DK is a Small-C-derived cross compiler for a long list of Z80 based computers. The name derives for that it was originally developed to target the Cambridge Z88. Z88DK is much developed from Small-C and accepts many features of ANSI C with the notable exception of multi-dimensional arrays and function pointers."
1296
:
"ZIP File Format - The ZIP file format is a popular data compression and archival format. A ZIP file contains one or more files that have been compressed or stored. The ZIP format was originally designed by Phil Katz for PKZIP. However, many software utilities other than PKZIP itself are now available to create, modify or open ZIP files, notably WinZip, BOMArchiveHelper, PicoZip, Info-ZIP, WinRAR, IZArc and 7-Zip. ZIP files generally use the file extensions ".zip" or ".ZIP" and the MIME media type application/zip."
1297
:
"ZipGenius - ZipGenius' is a freeware file archiver designed for Microsoft Windows users, developed by M.Dev Software. It uses eg. 7-Zip format, and can also handle a number of other archive formats. It is a freeware product and is presented in two editions: STANDARD and SUITE. While the suite edition includes optional modules of the ZipGenius project (oriented to experts and power-users), the standard setup package simply includes the main ZipGenius application."
1298
:
"Zipping - Zipping refers to the process of compressing a file so it takes up less space. The compress files after zipping is called a zip file. There are two types of Zip files, normal (requiring a program to extract them) and self-executing that open up automatically. PKZip and WinZip are popular zipping and unzipping programs."
1299
:
"Zlib - zlib is an open-source, cross-platform data compression library. It was created by Jean-loup Gailly and Mark Adler as a general-purpose abstraction of the DEFLATE compression algorithm used in their gzip file compression program."
1300
:
"µTorrent - µTorrent is a Bittorrent client for Microsoft Windows sporting a very small footprint. It is designed to use as little cpu, memory and space as possible while offering all the functionality expected from advanced clients."
1301
:
"1GL: First Generation Programming Language - First-generation programming language(1GL) is a machine-level programming language, which was written in 1s and 0s. There is no compiler or translator required and it can be understood and used by a CPU directly. The code using 1GL can run very fast and efficiently since it is directly executed by the CPU. However, machine language is somewhat more difficult to learn than higher generational programming languages, and it is far more difficult to edit if errors occur. Furthermore code portability is significantly reduced in the 1GL based code. First-generation programming language is mainly used now on very ancient computers. Machine level programming still finds a use in several areas of modern programming with the help of native-code compilers which creates machine language, usually from a higher-level language."
1302
:
"2D Computer Graphics - 2D computer graphics is the computer-based generation of digital images based on two-dimensional models. The word may stand for the branch of computer science that comprises such techniques, or for the models themselves. 2D computer graphics are mainly used in applications that were originally developed upon traditional printing and drawing technologies, such as typography, cartography, technical drawing, advertising, etc."
1303
:
"2GL: Second Generation Language - Second generation language (2GL), also known as second-generation programming language, usually refers to some form of assembly language. Unlike first-generation programming languages, the code can be read and written fairly easily by a human, but it must be converted into a machine readable form in order to run on a computer. The conversion process is simply a mapping of the assembly language code into binary machine code (the first-generation language). The language is specific to and dependent on a particular processor family and environment. Since it is the native language of a processor it has significant speed advantages, but it requires more programming efforts and is difficult to use effectively for large( or wide) applications."
1304
:
"386BSD - 386BSD, also known as JOLIX, is a free operating system produced from the BSD derived UNIX operating systems for the Intel 80386. 386BSD was originally derived from the generally available parts of the "Berkeley Net Release/2". All rights with respect to 386BSD and JOLIX are now held exclusively by William Jolitz and Lynne Jolitz. 386BSD public releases ended in 1997 since code is now available from the many 386BSD-derived operating systems today such as such as Apple's Darwin, OpenBSD, OpenSolaris, etc. 386BSD innovations include role-based security, ring buffers, self-ordered configuration, intuitive setup and installation, peer-to-peer download, and modular kernel design. 386BSD is often confused with BSD/386 which was developed by BSDi, a Berkeley spinout, starting in 1991."
1305
:
"3D Computer Graphics - 3D computer graphics are graphic arts that were created with the aid of digital computers and specialized 3D software. In general, the term may also refer to the process of creating such graphics, or the field of study of 3D computer graphic techniques and its related technology. 3D computer graphics are different from 2D computer graphics in which a three-dimensional representation of geometric data is stored in the computer for the purposes of performing calculations and rendering 2D images. Sometimes these images are later displayed in a pre-rendered form, and sometimes they are rendered in real-time."
1306
:
"3D Flash - 3D Flash refers to three-dimensional (3D) animations using Macromedia/Adobe Flash, which is primarily a 2D flash creation tool. Additional tools are required to make 3D Flash products."
1307
:
"3D Studio Max - 3D Studio Max, also known as 3ds Max, is a 3-dimensional vector graphics and animation program, developed by Autodesk Media & Entertainment (formerly known as Discreet and Kinetix). 3DS Max is one of the most widely-used 3D software packages today for several reasons, such as its long heritage on the Microsoft Windows platform, its powerful editing capabilities and its ubiquitous plugin architecture. While still supplying most of the needed tools out-of-the-box, there is a plethora of plugins available."
1308
:
"3GL: Third Generation Language - Third generation language(3GL) is a high level language designed to be easier for a human to understand, including things like named variables. Fortran, ALGOL and COBOL are early examples of this sort of language. Most "modern" languages (BASIC, C, C++) are third generation. Most 3GLs support structured programming."
1309
:
"4GL: Fourth-Generation Language - A fourth-generation programming language (4GL) is a programming language closer to human languages than typical high-level programming languages. Such languages arose after the introduction of modern, block-structured third-generation programming languages, which improved the process of software development. Most 4GLs are used to access databases. For example, a typical 4GL command is FIND ALL IS "JAVVIN"."
1310
:
"5GL: Fifth-Generation Programming Language - Fifth-generation programming language (5GL) is a programming language based around solving problems using constraints given to the program, rather than using an algorithm written by a programmer. Most constraint-based and logic programming languages and some declarative languages are fifth-generation languages. Fifth-generation languages are used mainly in artificial intelligence research. Prolog, OPS5, and Mercury are the best known fifth-generation languages."
1311
:
"7-Zip - 7-Zip is a file archiver predominantly for the Microsoft Windows operating system. It operates either as a command line program or with a graphical user interface. It also features integration with the Windows shell environment. 7-Zip is free software, developed by Igor Pavlov and distributed under the GNU Lesser General Public License (LGPL). It is a competitor to the market-leading WinZip and WinRAR programs, both of which are closed source. It offers a special 64-bit version for Windows XP Professional x64 Edition. In the form of p7zip, 7-Zip has been ported for use on Unix-like systems such as Linux and FreeBSD."
1312
:
"Programming automation"
1313
:
"Lists"
1314
:
"This page was last modified on 14 December 2011, at 23:14."
1315
:
"This page has been accessed 854,028 times."
1316
:
"Content is available under GNU Free Documentation License 1.2."
1317
:
"Privacy policy"
1318
:
"About LabAutopedia"
1319
:
"Disclaimers"
1320
:
"Cavendish Skin
