import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header'; // Check this path!
import { RouterLink, RouterOutlet } from '@angular/router'; // 1. ADD RouterOutlet HERE
import { title } from 'node:process';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterLink, RouterOutlet],// This is the key!
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'silicon-branch';
  articles = Article;
}
export const Article = [
  {
    id: 1,
    title: 'NVIDIA\'s DLSS 5 Breathes New Light into Old Games',
    thumbnail: '1.jpg',
    summary: 'NVIDIA\'s Deep Learning Super Sampling 5 may deliver a breakthrough in visual enhancement.',
    content: 'NVIDIA officially announced DLSS 5 during the GTC 2026 keynote on March 16,2026. CEO Jensen Huang described it as the \"GPT moment for graphics,\" signaling a fundamental shift from traditional mathematical rendering to AI-driven \"neural rendering.\" Instead of just filling in pixels, DLSS 5 uses a neural model to "infuse" pixels with photorealistic lighting and materials. It analyzes scene semantics (recognizing skin, hair, water, or metal) to apply specific, lifelike lighting effects that traditional rendering often misses. Unlike standard AI image generators that can be "hallucinatory" or inconsistent, DLSS 5 is anchored to the game engine\'s motion vectors and geometry. This ensures the AI enhancements remain stable and consistent from frame to frame. This feature set is expected to release in Fall 2026.'
  },
  {
    id: 2,
    title: 'Apple introduces NEW AirPods Max 2',
    thumbnail: '2.png',
    summary: 'There is going to be a new pair of AirPods Max since it\'s introduction back in 2020.',
    content: 'In March 16, 2026, Apple announced that they will be releasing a new pair of AirPods Max: the AirPods Max 2. With it, they will bring better Active Noise Cancellation, an increase in the quality of the sound, and other H2 features, such as Conversation Awareness, Voice Isolation, Adaptive Audio, and Live Translation. The AirPods Max 2 will be available to order on March 25, 2026, in 5 colors: midnight, orange, starlight, purple, and blue, at a price of $549. '
  },
  {
    id: 3,
    title: 'Apple\'s new MacBook Neo & iPhone 17e introduces a wide variety of new users into the Apple Ecosystem.',
    thumbnail: '3.png',
    summary: 'Apple released new, cheaper options of their more expensive flagships',
    content: 'In March 2026, Apple had released both the MacBook Neo & the iPhone 17e, the latter being a successor to their previous iPhone 16e. The iPhone 17e brought new improvements to it\'s predecessor such as MagSafe, and a new CenterStage camera. The iPhone 17e starts $599 for the 256 GB model, which can get bumped up to $799 for the 512 GB model. The MacBook Neo was a new addition to the MacBook lineup, utilizing the iPhone A18 Pro chip as a way to reduce costs. The MacBook Neo starts at $599 for 256 GB, and can be bumped up to $699 for 512 GB + Touch ID.'
  },
  {
    id:4,
    title: 'Nintendo Wii U, Xbox 360, and PS4 are now considered \'retro\'',
    thumbnail: '4.png',
    summary: 'GameStop classifies the Nintendo Wii U, Xbox 360, and Playstation 4 as \'retro\' consoles.',
    content: 'GameStop has recently classified the Nintendo Wii U, Xbox 360, and Playstation 4 as retro consoles in their eyes. These consoles, releasing around 2012-2014, were considered a staple of many people\'s childhoods, being a constant source of nostalgia.'
  },
    {
    id:5,
    title: 'Have you been wearing your AirPods incorrectly?',
    thumbnail: '5.png',
    summary: 'New trend of putting your Apple AirPods in upside-down emerges.',
    content: 'New trends on social media have been emerging of people demonstrating how they wear their Apple AirPods, with the stem facing upwards. They follow these practices with claims that the AirPod pieces direct the audio into your ear canal much better, as well as they fit in more precise. Creator Tyler Vitelli has posted a video of himself testing the claim, to which which he expressed affirmation of it\'s legitimacy. That being said, is it the way that Apple has entailed it to be worn? In almost every single piece of media that Apple has done for both the AirPods Pros 3 and the AirPods 4, they encourage the wearing of the Airpods in the way of which the stem faces down. Even on older AirPods, like AirPods 1st generation and AirPods 2nd generation, the stems are likely to big to fit sitting upwards in many people\'s ears. New concerns have come up on whether or not you are getting the absolutely best audio quality that the earbuds can provide, as the audio driver could possibly be reversed within the users\' ears. \n \n \n Image Source: https://www.instagram.com/p/DWCUMELmlL5/'
  }
];