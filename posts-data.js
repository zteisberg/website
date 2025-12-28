// Blog posts data

//h3 class="text-terminal-cyan font-bold mt-6 mb-2"
//p class="mb-4
const posts = {
    2: {
        title: "The Truth about AI in Software",
        slug: "truth-about-ai",
        date: "2025-12-27",
        tags: ["Software Development", "Software Architecture", "Rant", "AI"],
        tagline: "Your impostor syndrome makes you hate AI.",
        content: `
        <p class="mb-4">If I see one more "The End of Programming" headline on LinkedIn, I'm going to throw my MacBook into a lake. There is a specific brand of hysteria going around right now, fueled by a mix of CEO wishful thinking and party school MBA empowered product owners—suggesting that by 2026, we'll all be replaced by a blinking cursor. It's the same old song, just a different key.</p>

<p class="mb-4">The reality? The nature of the job is shifting, not evaporating. We're moving toward a world of more code review and refactoring, and less "blank page" typing. We aren't being replaced, we might be more important than ever. Regardless, let's dive in and address the common delusions people have about AI.</p>

<h3 class="text-terminal-cyan font-bold mt-6 mb-2">"AI isn't even good bro"</h3>

<p class="mb-4">The first thing skeptics say is that "AI code is unmaintainable garbage." And yeah, if you ask a basic LLM to "write a banking app" with zero context, it'll give you a mess that probably doesn't run or if it does run, has 0 features. (It might look pretty though!) But as an engineer, your value isn't just typing, it's knowing what <i>good</i> code looks like. When you use an agent with proper planning, guidance, and oversight, you can produce incredibly maintainable systems. The AI is the engine, but you're still the architect holding the blueprints. </p>

<p class="mb-4">Also, there's plenty of cases you don't <i>need</i> maintainable code. This website for example has a lot of AI generated elements. It looks cool doesn't it? How often am I changing or updating the page layouts or backgrounds or whatever. Almost never. It doesn't need to be maintainable therefore VIBE AWAY I say. Consider if I made this in react? How long it would've taken. Much longer than the hour or two I used to hobble this together.</p>

<p class="mb-4">Then there's the "Democratization" lie, the idea that AI enables <i>anyone</i> to code. Give me a break. Asking good questions is 80% of software engineering. If you don't know how to decompose a complex problem into logic, you can't prompt your way out of a paper bag. Look at the famous story of Jackson Palmer giving Elon Musk a simple Python script to catch crypto-scammers, and the "technoking" himself couldn't even figure out how to execute it. Coding is an ecosystem of infrastructure, environments, and deployment, not just a snippet of text.</p>

<h3 class="text-terminal-cyan font-bold mt-6 mb-2">The SYDDO Tax (Shit You Don't Do Often)</h3>

<p class="mb-4">AI has become an essential productivity tool for me, much like an IDE or a search engine. I use it mostly to avoid the "complexity tax" of things I don't do daily. I call it <b>SYDDO</b>. For example:</p>

<ul class="list-disc list-inside mb-4">
    <li><strong>Language Bridging:</strong> I know Ruby. If I need the Rust equivalent of <code>subject.respond_to?(:full_name)</code>, I'm not spending a second looking at horrendous documentation, or a stack overflow thread filled with inflated egos postulating about theoretical best practices. I'm asking the AI to bridge the gap between the domains I already know.</li>
    <li><strong>The Bash Abyss:</strong> I use the terminal every day, but I don't memorize the exact syntax for a complex <code>sed</code> replacement or a nested loop in a shell script. AI writes the heck out of a Bash script that would have otherwise cost me an hour of "Googling idioms."</li>
    <li><strong>Library Independence:</strong> We've all pulled in a massive NPM package just to handle a trivial utility, only for the library to get hacked or go down. Now? I just have the AI generate the snippet. We can in-house those small, annoying pieces without the security risk of a thousand dependencies.</li>
    <li><strong>The AWS Documentation Maze:</strong> Why is finding a specific config in AWS docs harder than finding the Holy Grail? Modern AI agents that can search and cite specific documentation are legitimately better than Google at this point.</li>
</ul>

<h3 class="text-terminal-cyan font-bold mt-6 mb-2">The AI Doesn't Get Bored</h3>

<p class="mb-4">We've all been there, a 2000 line PR hits your desk at 4:30 PM on a Friday. Your eyes glaze over. You miss the off-by-one error. You miss the security flaw. AI doesn't have "Friday afternoon brain." Using AI for basic code review is genuinely pretty neat. It catches the trivial details and, if trained on your previous feedback, it stops being noisy and starts being a genuine second set of eyes.</p>

<h3 class="text-terminal-cyan font-bold mt-6 mb-2">The Bottom Line: Don't Lose the Plot</h3>

<p class="mb-4">Business people are salivating at the idea that they won't need engineers anymore. They've completely lost the plot. This isn't a replacement for the workforce, it's a productivity multiplier. It's no different than the transition from assembly to C, or the birth of Open Source, or the invention of package managers.</p>

<p class="mb-4">Each of those innovations made us faster, but they didn't make the problems any less complex. If your entire value proposition as an engineer was "I can write a CRUD app from memory" then yeah, maybe start sweating. But if your value is <i>solving problems</i>, you just got a much bigger toolbox. Stay pragmatic, keep your hands on the wheel, and let the AI write the boilerplate. We have bigger things to build. 🫡</p>

        `},
  1: {
    title: "Dangers Of Dogma",
    slug: "dangers-of-dogma",
    date: "2025-12-24",
    tags: ["Software Development", "Software Architecture", "Rant"],
    tagline: "Decision-making should be rooted in context.",
    content: `
<p class="mb-4">So, we just hired this new senior engineer, right? Two months in, and he's already decided the codebase we've been scaling for three years is "absolute legacy trash." Going as far as to print out one of our Service Classes that was 5k+ lines long, staple them together, and dramatically flourish them at a company all hands meeting. His solution? The gospel according to Uncle Bob. He's convinced we need to pivot everything to "Clean Code" using Jeffrey Palermo's "Onion Architecture." You know the vibe: layers upon layers of abstractions, interfaces for your interfaces, and enough boilerplate to make you feel like you're writing a NASA flight controller just to save a user's middle name.</p>

<p class="mb-4">We figured, "Fine, let's give it a shot using a new module in our existing codebase before we even think about rewriting the monolith." Total disaster. We spent three days just mapping Domain Models, Domain Values, Domain Services, Repositories, Application Services, DTOs, Mappers, and nearly 25 files just to create a single CRUD endpoint. What used to be a five-minute job turned into a philosophical debate about where the "boundaries" are. It was extraordinarily convoluted for literally no functional gain. We weren't building software anymore, we were building a monument to someone's book.</p>
    
<h3 class="text-terminal-cyan font-bold mt-6 mb-2">The Cult of the "Standard"</h3>

    <p class="mb-4">The biggest trap we fall into is thinking there's a "right" way to build things that exists in a vacuum. We treat architectural patterns like they're fashion trends. One year it's Clean Architecture, the next it's Microservices, then it's "Back to the Monolith."</p>

    <p class="mb-4">The danger isn't the patterns themselves, it's the dogmatism. When we adopt a framework or a pattern because of "conventional wisdom" rather than looking at our actual traffic, team size, or business constraints, we aren't engineering anymore, we're roleplaying. We're wearing a suit that's three sizes too big because we saw a nerd on the internet wearing it who works at a FAANG company, made our favorite library, and gives a lot of talks (while perhaps not contributing much to their actual business).</p>

    <h3 class="text-terminal-cyan font-bold mt-6 mb-2">Personalities != Production Reality</h3>

    <p class="mb-4">We have to stop treating the opinions of tech personalities as gospel. Just because someone has 50k followers and a sleek landing page doesn't mean their "Hot Take" applies to your legacy Ruby codebase.</p>

    <p class="mb-4">A lot of these "best practices" are born in environments with infinite resources or very specific problems. When we copy and paste these decisions into our mid-sized startups, we end up with "Resume Driven Development." We build complex abstractions to solve problems we don't have, and then we spend the next six months debugging the abstraction instead of shipping features.</p>

    <h3 class="text-terminal-cyan font-bold mt-6 mb-2">Experience over Aesthetics</h3>

    <p class="mb-4">True seniority in software engineering isn't about knowing every Design Pattern by heart. It's about the scars. It's about remembering that time you over-engineered a caching layer and took down the site for four hours.</p>

    <p class="mb-4">Decision-making should be rooted in context. Ask yourself:</p>

    <ul class="list-disc list-inside mb-4">
    <li>Does this actually solve a pain point we are currently feeling?</li>
    <li>What is the "complexity tax" we're going to pay for this "best practice"?</li>
    <li>Are we doing this because it's better, or because we're afraid of looking "un-cool" to other devs?</li>
    </ul>

    <h3 class="text-terminal-cyan font-bold mt-6 mb-2">Stay Pragmatic, Not Dogmatic</h3>

    <p class="mb-4">At the end of the day, your users don't care if your folders are organized according to a specific influencer's philosophy. They care if the button works and the page loads.</p>

    <p class="mb-4">Let's stop being "Identity Engineers" who tie our worth to a specific stack or methodology. Be a "Problem Solver." Use the tools that make sense for your specific, messy, real-world situation. Everything else is just noise. This applies to more than just software... but I'll leave that for another day.</p>
    `
  }
};