export interface ImageInterface {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large'; 
    isCircle?: boolean;
    hasBorderColor?: 'PRIMARY' | 'SECONDARY';
}