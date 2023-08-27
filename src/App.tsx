import { FormEvent, JSX, useState } from 'react';

function App(): JSX.Element {
  const [username, setUsername] = useState<string>('');

  function handleInput(e: FormEvent<HTMLInputElement>): void {
    setUsername(e.currentTarget.value);
  }

  return (
    <main className='flex items-center justify-center mt-60'>
      <section className='space-y-2'>
        <h1 className='font-bold text-3xl text-transparent tracking-wide'>
          <span className='bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500'>
            Floating Label
          </span>
        </h1>

        {/* Start Input Field */}
        <div>
          <div className='group pt-4 px-1 rounded-t-md bg-gray-100 border-gray-800 border-b-[1px] focus-within:border-b-2 focus-within:border-indigo-600'>
            <div className='relative'>
              <label
                htmlFor='username'
                className={`cursor-text absolute top-0 px-3 transition-all duration-300 text-gray-600 ${
                  !username
                    ? 'group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-indigo-600'
                    : '!-top-2 text-xs text-indigo-600'
                }`}>
                Username
              </label>
              <input
                id='username'
                type='text'
                className='border-0 w-full focus:ring-0 bg-inherit text-gray-900'
                onInput={handleInput}
              />
            </div>
          </div>
          <p className='mt-1 px-3 text-xs text-gray-400'>
            Contains conditional classes
          </p>
        </div>
        {/* end: Input Field */}
      </section>
    </main>
  );
}

export default App;
