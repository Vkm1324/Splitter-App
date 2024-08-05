interface LogoProps {
  imageUrl: string;
  url: string;
  customClass?: string;
}

export function Logo({ imageUrl, url,customClass }:LogoProps) {
    const finalClassList = customClass !== undefined ? `logo ${customClass}` : `logo`;
    return (
        <a href={url} target="_blank">
            <img src={imageUrl}className={finalClassList} alt="vite logo"></img>
        </a>
    );
}