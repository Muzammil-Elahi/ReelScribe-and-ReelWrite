//clean the mobile url
export function cleanInstagramUrl(fullUrl: string) {
    try {
      // const url = new URL(fullUrl)
      // if (url.pathname.includes('/reel/')) {
      //   const pathParts = url.pathname.split('/')
      //   const reelId = pathParts[pathParts.indexOf('reel') + 1]
      //   return `https://www.instagram.com/reel/${reelId}/`
      // }
      return fullUrl
    } catch (error) {
      console.error('Invalid URL:', error)
      return null
    }
  }

  //download the text file    
  export function downloadAsTxt (data: string) {
        const blob = new Blob([data], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'response.txt'
        a.click()
        URL.revokeObjectURL(url)
    }

  //download the video file    
    export function downloadAsMP4 (data: string) {
      const blob = new Blob([data], {  type: 'video/mp4' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'AIVideo.mp4'
      a.click()
      URL.revokeObjectURL(url)
  }

    //paste the url from the clipboard
    export const handlePaste = async (setMessage: (value: string) => void, setError: (value: string) => void, inputRef: React.RefObject<HTMLInputElement>) => {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        try {
            const text = await navigator.clipboard.readText()
            setMessage(text)
            if (inputRef.current) {
                inputRef.current.value = text
                inputRef.current.setSelectionRange(text.length, text.length)
                inputRef.current.focus()
            }
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err)
            setError('Failed to access clipboard.')
        }
    } else {
        alert('Clipboard not supported in this browser.')
    }
}


    //fake testing data
   export const testScribedData = {
        "transcript": "If you're looking for a new couch, especially with Black Friday coming up, you absolutely need to check out United Canada. Their range is made in Canada and let me tell you, the quality speaks for itself. I have never felt more comfortable sofas in my life, plus the turnaround times quicker thanks to the local production. But wait, there's more. The warranty is 25 years. Tell me that's not the best deal you've come across. Every piece is highly customizable from the configuration, the material and the color and made with top quality materials. They're authorized retailers for renowned Canadian manufacturers that have been around for over decades like Palisader, Decorest and Marshall. They're open every day of the week with interiors designers in store to consult with. They currently have incredible Black Friday offers on. You could get this so far for your home for just $85 a month, so visit them in Richmond Hill in store or online.",
        "rewritten_transcript": "Hook: Hey there! Looking for a new couch this Black Friday? Well, I've got just the place for you!\n\nProblem: Choosing the perfect couch can be overwhelming with so many options out there. You want something comfortable, high quality, and customizable to fit your space.\n\nSolution: United Canada has got you covered! Their Canadian-made sofas are not only top quality but also highly customizable to suit your style and space.\n\nMore detail: With a 25-year warranty, quick turnaround time, and top-quality materials, United Canada offers the best deal in town. Plus, they work with renowned Canadian manufacturers like Palisader, Decorest, and Marshall to ensure you're getting the best of the best.\n\nCall to action: Don't miss out on their incredible Black Friday offers! Visit United Canada in store or online and find the perfect couch for your home today.",
    }
    
    export const testVideoGeneration = {
        "url": "https://storage.googleapis.com/captions-avatar-orc/orc/studio/dWBgT5iv1D4KS6KwpbCr/6f0b0d04-7010-4a57-8cac-d6fa47a62525/cropped_result.mp4?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=cloud-run-captions-server%40captions-f6de9.iam.gserviceaccount.com%2F20241130%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241130T170902Z&X-Goog-Expires=543058&X-Goog-SignedHeaders=host&X-Goog-Signature=9f03e7c59ca0d295f083cdb6fa7cf6f75e3c2782f96476f3c9e3523f61d9e51c20b5738aedeb9e0e7a450b191210509df82454a2292ab69f286d9b7e78ba0c16562fda39adab7752e35a7592bc0afbf0df68f5bfe469f70008612cf160eccd0ca73126855d8160f5d411f46078a3a903cb12c6cc12b88699e22dc3e675c97643e87d564c045b898225441f029da23b3981edb1dfc8edb440cd191bf078f7908677ef6413b8bdbe89625b59e9197f38edbb11d847ce6af6939cd35cbfda850d809cec09246bbe10ff7a9cb2a6fa805dcdc65a018fe146118ffd9795c85fe468dbbb28250489a3af07fb2fd1804a5cb635bf571de90773e4574dadc2292b0f4c53",
        "state": "COMPLETE"
      }