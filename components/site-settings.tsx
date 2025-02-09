// import { Suspense } from "react"
// import { cookies } from "next/headers"
// import { SettingsIcon } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { RegionSelect } from "@/components/region-select"
// import { ThemeToggle } from "@/components/theme-toggle"

// import UserLoadingSkeleton from "./skeletons/user-settings-skeleton"
// import { UserSettings } from "./user-settings"

// export const SiteSettings = () => {
//   const region = cookies().get("region")?.value ?? "US"

//   return (

//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant="outline" size="icon" className="shrink-0">
//           <SettingsIcon className="size-4" />
//           <span className="sr-only">Settings</span>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="space-y-4" align="end">
//         <div>
//           <h5>Settings</h5>

//           <div className="mt-2 space-y-2">
//             <Label className="text-xs text-muted-foreground">Region</Label>
//             <RegionSelect value={region} />
//           </div>

//           <div className="mt-4 space-y-2">
//             <Label className="text-xs text-muted-foreground">Theme</Label>
//             <ThemeToggle />
//           </div>
//           <Suspense fallback={<UserLoadingSkeleton />}>
//             <UserSettings />
//           </Suspense>
//         </div>
//       </PopoverContent>
//     </Popover>
//   )
// }

import { Suspense, useEffect, useState } from "react"
import Cookie from "js-cookie"
import { SettingsIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RegionSelect } from "@/components/region-select"
import { ThemeToggle } from "@/components/theme-toggle"

import UserLoadingSkeleton from "./skeletons/user-settings-skeleton"
import { UserSettings } from "./user-settings"

export const SiteSettings = () => {
  const [region, setRegion] = useState("US")
  useEffect(() => {
    setRegion(Cookie.get("region") || "US")
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0">
          <SettingsIcon className="size-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-4" align="end">
        <div>
          <h5>Settings</h5>

          <div className="mt-2 space-y-2">
            <Label className="text-xs text-muted-foreground">Region</Label>
            <RegionSelect value={region} />
          </div>

          <div className="mt-4 space-y-2">
            <Label className="text-xs text-muted-foreground">Theme</Label>
            <ThemeToggle />
          </div>
          <Suspense fallback={<UserLoadingSkeleton />}>
            <UserSettings />
          </Suspense>
        </div>
      </PopoverContent>
    </Popover>
  )
}
