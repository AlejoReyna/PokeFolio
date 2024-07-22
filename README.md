


https://github.com/user-attachments/assets/4761d619-6c26-4440-992f-e775c1f71b1f


## PokeFolio - My developer portfolio.

Hello! This is Alexis Reyna, and as I mentioned in the title, this is the website where I upload my code creations. 

### Main Component: Homepage
<hr/>

The component renders a layout with the following elements:
1. A typing text animation at the top.
2. A dialog box (Pokemon-style) that appears after the typing animation finishes, containing:
   - A music player component
   - A question prompting user action
   - Two interactive options:
     - "Go to my projects" (functional)
     - "Under construction" (placeholder [at least in July 22nd, the time I'm writing this)
    
The Homepage component uses the useState hook to manage whether the typing animation has finished, and the useRouter hook for navigation.

```typescript
export default function HomepageComponent() {
    const [isTypingFinished, setIsTypingFinished] = useState(false);
    const router = useRouter();
```
<hr/>

The audioFiles array defines the background music tracks available for playback, which I'll show later.
(Btw, I don't own the tracks, and I'm not making any money with them, please Nintendo, don't sue me)

```typescript
const audioFiles = [
        { name: 'Ecruteak City', url: 'tracks/Ecruteak-City.mp3' },
        { name: 'National Park', url: 'tracks/National-Park.mp3' },
        { name: 'PokeViolet City', url: 'tracks/PokeViolet-City.mp3' },
    ];
```

- handleFinished logs a message when all tracks have been played.
- goToProjects uses the Next.js router to navigate to the ProjectList page.

```typescript
   const handleFinished = () => {
        console.log('All tracks have been played');
    };

    const goToProjects = (): void => {
        router.push('ProjectList');
    };
```




