    import { ProfileIcon, useUserStore } from '@/entities/session';
    import { ProfileForm } from '@/features/profile';
    import { ModalCard } from '@/shared/ui'

    export const ProfileModal = () => {
        
        const user = useUserStore((state) => state.user);
        const setIsProfileOpen = useUserStore((state) => state.setIsProfileOpen);
        const isProfileOpen = useUserStore((state) => state.isProfileOpen);
        
        if (!isProfileOpen) return null;
    return (
        <ModalCard onClose={() => { setIsProfileOpen(false) }}>
                <div className="flex flex-col gap-4 p-11.25">
                    {/* Header, Forms */}
                    <div className="flex flex-col gap-6 items-center">
                        {/* Profile Header */}
                        <div className='flex flex-col gap-6 w-full'>
                            {/* Profile */}
                            <h3 className='mx-auto text-[32px] text-[#141414] font-semibold leading-none'>
                                Profile
                            </h3>
                            {/* UserName */}
                            <div className='flex items-center gap-3 w-full'>
                                <ProfileIcon/>
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-xl text-[#0A0A0A] font-semibold leading-6'>
                                        {user?.username || 'noname'} 
                                    </h4>
                                    {user?.profileComplete ? (
                                        <p className='text-[10px] text-[#1DC31D] leading-none'>
                                            profile is complete
                                        </p>
                                    ) : (
                                        <p className='text-[10px] text-[#c3281d] leading-none'>
                                            profile is not complete
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <ProfileForm/>
                    </div>
                </div>
        </ModalCard>
    )
}