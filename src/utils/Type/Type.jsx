import Typewriter from 'typewriter-effect';

const Type = () => {
    return (
        <div style={{ fontSize: '34px', fontFamily: "Poppins ", fontWeight: 600 }}>
            <Typewriter
                options={{
                    strings: [
                        '<span style="color: #fff;">Building modern web applications...</span>',
                        '<span style="color: #fff;">with MERN Stack</span>',
                        '<span style="color: #fff;">Optimized for scalability.</span>',
                        '<span style="font-weight: bold;">Delivering cutting-edge web solutions!</span>',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                }}
            />
        </div>
    );
};

export default Type;
