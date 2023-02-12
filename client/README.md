To use onClick, useState, useEffect, etc, you have you add "use client" to the top of page.tsx

"use client" turns it into a client component rather than a server component.

For fetching data from API, it is best to use a server component.

import Link from "next/link"
<Link href={`/blahblah`}></Link>

<Image
  src={}
  width={}
  height={}
  alt={}
/>