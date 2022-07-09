import { ChangeEvent, useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase.client';

interface Props {
  url?: string;
  onUpload: (args: any) => void;
}

export default function LocationImage({ url, onUpload }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('location-images').download(path);

      if (error) throw error;

      if (data) {
        const url = URL.createObjectURL(data);
        setImageUrl(url);
      }
    } catch (error: any) {
      console.error('LocationImage >> ', error.message);
    }
  }

  async function uploadImage(event: ChangeEvent<HTMLInputElement>) {
    try {
      if (!event.target.files || event.target.files.length === 0) throw new Error('Must select an image file.');

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `public/${fileName}`;

      let { error } = await supabase.storage.from('location-images').upload(filePath, file);

      if (error) throw error;

      onUpload(filePath);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt="location image" className="w-48 h-48 rounded-xl border-2 border-sol-yellow-1" />
      ) : (
        <div>No image</div>
      )}

      <div>
        <label htmlFor="img-input">Add picture</label>
        <input
          id="img-input"
          style={{ visibility: 'hidden', position: 'absolute' }}
          type="file"
          accept="image/*"
          onChange={(e) => uploadImage(e)}
        />
      </div>
    </>
);
}
