'use client';
import { updateUserInfo } from '@/actions/user';
import { ShopContext } from '@/context/ShopProvider';
import { TextField, Button } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProfileForm = () => {
  const { userInfo, getUserInfo } = useContext(ShopContext);
  const [username, setUsername] = useState<string>(
    userInfo?.name ? userInfo?.name : ''
  );
  const [phone, setPhone] = useState<string>(
    userInfo?.number ? userInfo?.number : ''
  );
  const [address, setAddress] = useState<string>(
    userInfo?.address ? userInfo?.address : ''
  );
  const [city, setCity] = useState<string>(
    userInfo?.city ? userInfo?.city : ''
  );
  const [country, setCountry] = useState<string>(
    userInfo?.country ? userInfo?.country : ''
  );
  const [zipcode, setZipcode] = useState<string>(
    userInfo?.zipCode ? userInfo?.zipCode : ''
  );

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', userInfo?.email as string);
    formData.append('name', username);
    formData.append('number', phone);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('country', country);
    formData.append('zipCode', zipcode);

    const res = await updateUserInfo(formData);
    if (res.status !== 200)
      return toast.error('Something went wrong! Try again.');
    toast.success('Profile updated successfully.');
    await getUserInfo(userInfo?.email as string);
  };
  useEffect(() => {
    setUsername(userInfo?.name ? userInfo?.name : '');
    setPhone(userInfo?.number ? userInfo?.number : '');
    setAddress(userInfo?.address ? userInfo?.address : '');
    setCity(userInfo?.city ? userInfo?.city : '');
    setCountry(userInfo?.country ? userInfo?.country : '');
    setZipcode(userInfo?.zipCode ? userInfo?.zipCode : '');
  }, [userInfo]);
  return (
    <form className='flex flex-col gap-4 w-full' onSubmit={handleUpdate}>
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        Email Address
      </label>
      <TextField
        id='email'
        value={userInfo?.email ? userInfo?.email : ''}
        variant='outlined'
        disabled
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        User Name
      </label>
      <TextField
        id='name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={username ? username : 'eg: Kevin Smith'}
        variant='outlined'
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        Phone Number
      </label>
      <TextField
        id='number'
        value={phone}
        type='number'
        onChange={(e) => setPhone(e.target.value)}
        placeholder={phone ? phone : 'eg: 1234567890'}
        variant='outlined'
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        Address
      </label>
      <TextField
        id='address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={address ? address : 'eg: 123 Main Street'}
        variant='outlined'
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        Country
      </label>
      <TextField
        id='country'
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder={country ? country : 'Brazil'}
        variant='outlined'
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        City
      </label>
      <TextField
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={city ? city : 'Rio de Janeiro'}
        variant='outlined'
      />
      <label htmlFor='email' className='text-[#d87d4a] font-semibold'>
        ZIPCode
      </label>
      <TextField
        id='zipcode'
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder={zipcode ? zipcode : '12345'}
        variant='outlined'
      />
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#d87d4a',
          ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
        }}
        type='submit'
      >
        Update
      </Button>
    </form>
  );
};

export default ProfileForm;
