import { MemberImageProps } from "../components/MemberImage";
import { PartSummaryProps } from "../components/PartSummary";
import { ImageSourcePropType } from "react-native";

export interface MemberDetailData {
  [key: string]: {
    slide: MemberImageProps[];
    intro: string[];
    func: string[];
    anatomy: string[];
  };
}

export const memberDetailData: MemberDetailData = {
  pharynx: {
    slide: [{ name: "Pharynx", image: require("../../assets/image/Home/respiratorySystem/pharynx.png") }],
    intro: [
      "The pharynx, commonly called the throat, is a muscular, funnel-shaped passageway inside the body. It connects the mouth and nose to the esophagus (leading to the stomach) and larynx (leading to the trachea and then lungs).",
    ],
    func: [
      "Carries air to the respiratory system.",
      "Delivers food and liquid to the digestive system:",
      "Pushes food into the esophagus so it’s not breathed in.",
      "Equalizes pressure in the ears and drains fluid from the ears.",
    ],

    anatomy: [
      "Location and size:The pharynx is in the middle of the neck. It starts at the bottom of the skull and is about 4.5 inches long.",
      "Components:",
      "Nasopharynx: The top part of the throat connects to the nasal cavities (nose) and lets air pass through.",
      "Oropharynx: The middle part of the throat connects to the oral cavity (mouth). It allows air, food and fluid to pass through.",
      "Laryngopharynx (or hypopharynx): The bottom part of the throat is near the larynx (or voice box). It regulates the passage of air to the lungs and food and fluid to the esophagus.",
      "Tonsils: There are three sets of tonsils. They are located at the back of the throat and base of the tongue. Tonsils are the body’s first defense against infection.",
      "Auditory (eustachian) tubes: These two tubes connect the ears to the throat. They equalize pressure and help drain fluid.",
    ],
  },

  trachea: {
    slide: [{ name: "Trachea", image: require("../../assets/image/Home/respiratorySystem/trachea.png") }],
    intro: [
      "Your trachea is a long, U-shaped tube that connects your larynx (voice box) to your lungs. The trachea is often called the windpipe. It's a key part of your respiratory system",
    ],
    func: [
      "Main function: is to carry air in and out of your lungs",
      "Trachea’s function within the respiratory system:",
      "From your nose and mouth into your trachea",
      "From your trachea into your left and right bronchi",
    ],

    anatomy: [
      "There are two  parts: Cervical trachea (in your neck), thoracic trachea (in your chest)",
      "Size: In most people, the trachea is about 4 inches (10 centimeters) long. It is about an inch (2.5 centimeters) wide",
      "Location: in your lower neck and upper chest, below your larynx. It is behind the notch at your lower throat, between the inside edges of your collarbones.",
      "Components: 16 to 20 rings of cartilage (the body’s main type of connective tissue), trachealis (muscle between each ring of cartilage), mucosa, and cilia.",
    ],
  },

  sinuses: {
    slide: [{ name: "Sinuses", image: require("../../assets/image/Home/respiratorySystem/sinuses.png") }],
    intro: [
      "The sinuses are hollow spaces in the skull and the face bones around your nose. There are four pairs of sinuses",
    ],
    func: [
      "Connect to your nasal passages in a complex network of air flow and drainage passages",
      "Produce mucus that coats and lubricates your nasal passages and the sinuses themselves",
      "Give your voice resonance as the air vibrates",
      "Help protect your face in case of trauma",
      "Insulate against rapid temperature changes in the nose",
      "Provide an immunological defense",
    ],

    anatomy: [
      "There are 4 types:",
      "Frontal sinuses: The right and left frontal sinuses are located in the center of the forehead (frontal bone) just above each eye",
      "Maxillary sinuses: These are the largest of the sinuses and are located behind the cheekbones near the maxillae, or upper jaws.",
      "Sphenoid sinuses: The sphenoid sinuses are located in the sphenoid bone near the optic nerve and the pituitary gland on the side of the skull",
      "Ethmoid sinuses: The ethmoid sinuses are located in the ethmoid bone, which separates the nasal cavity from the brain. These sinuses aren’t single sacs but a collection of 6 to 12 small air cells that open independently into the nasal cavity. They’re divided into front, middle, and rear groups.",
    ],
  },

  nose: {
    slide: [{ name: "Nose", image: require("../../assets/image/Home/respiratorySystem/nose.png") }],
    intro: [
      "Openings that pull air from outside your body into your respiratory system",
      "The mouth, also called the oral cavity or buccal cavity, in human anatomy, through which food and air enter the body,  and it also helps you speak",
      "The nose, a structure that sticks out from the middle of your face, is the entrance to the respiratory tract and contains the olfactory organ",
    ],
    func: [
      "The mouth is involved in several essential bodily functions: Breathing, Chewing, Digesting foods and drinks, Drinking, Swallowing, Talking, Tasting.",
      "The nose is involved in several important bodily functions:",
      "Allows air to enter your body",
      "Contributes to how you look and how you sound when you speak",
      "Filters and cleans air to remove particles and allergens.",
      "Provides a sense of smell",
      "Warms and moistens air so it can move comfortably into your respiratory system",
      "Protects your airways from harmful substances and irritants.",
    ],

    anatomy: [
      "Structure: Left and right lung",
      "Location: Your lungs are located in your chest (your thorax). Your thoracic cavity is the name of the space that contains your lungs and other organs. Your lungs rest on a muscle called your diaphragm",
      "Weight and size: A typical lung in a human adult lung weighs about 2.2 pounds and is a little longer than 9 inches when you’re breathing normally, and about 10.5 inches when your lungs are completely expanded",
      "The right lung is made up of three lobes. The left lung has only two lobes to make room for your heart.",
    ],
  },

  lungs: {
    slide: [{ name: "Lungs", image: require("../../assets/image/Home/respiratorySystem/lungs.png") }],
    intro: [
      "Your lungs make up a large part of your respiratory system, which is the network of organs and tissues that allow you to breathe.",
    ],
    func: [
      "Your lungs make oxygen available to your body and remove other gases, such as carbon dioxide, from your body. This process takes place 12 to 20 times per minute.",
      "When you inhale: air travels down your pharynx, passes through your larynx, into your trachea and bronchial tubes. One bronchial tube leads to your left lung, the other to your right lung. Your bronchial tubes lead to smaller air passages called bronchi, and then into bronchioles. The bronchioles end in tiny air sacs called alveoli, where oxygen is transferred from the inhaled air to your blood",
      "When cells use oxygen, they produce carbon dioxide and transfer it to your blood. Your bloodstream carries the carbon dioxide back to your lungs. When you exhale, you remove the carbon dioxide.",
      "Your respiratory system prevents harmful substances from entering your lungs using small hairs in your nose, mucus in your trachea and bronchial, and the sweeping motion of cilia",
    ],

    anatomy: [
      "Structure: Left and right lung",
      "Location: Your lungs are located in your chest (your thorax). Your thoracic cavity is the name of the space that contains your lungs and other organs. Your lungs rest on a muscle called your diaphragm",
      "Weight and size: A typical lung in a human adult lung weighs about 2.2 pounds and is a little longer than 9 inches when you’re breathing normally, and about 10.5 inches when your lungs are completely expanded",
      "The right lung is made up of three lobes. The left lung has only two lobes to make room for your heart.",
    ],
  },

  bronchial: {
    slide: [{ name: "Bronchial", image: require("../../assets/image/Home/respiratorySystem/bronchial.png") }],
    intro: [
      "Bronchial tubes are the large tubes that connect to your trachea (windpipe) and direct the air you breathe to your right and left lungs",
    ],
    func: [
      "Your bronchi carries air to and from your lungs. The bronchi also helps moisturize the air you breathe and screen out foreign particles.",
      "Your airways are lined with cells that create mucus. The mucus keeps your airways moist. It also traps bacteria, viruses, fungi and other particles to protect your lungs and prevent infection.",
      "The bronchi are lined with cilia, tiny hairlike structures. The cilia help move mucus (phlegm) and particles out of your lungs. When you cough or swallow, the particles trapped in the mucus move out of your body or into your digestive tract, where your body can dispose of them.",
      "Air passes from your mouth to your trachea",
      "Your trachea divides into your left and right bronchi",
      "The bronchi carry air into your lungs",
      "At the end of the bronchi, the bronchioles carry air to small sacs in your lungs called alveoli. The alveoli perform your body’s gas exchange",
    ],

    anatomy: [
      "Right main bronchus is a short, wide air passageway into your right lung",
      "Left main bronchus is a narrow, long passageway into your left lung",
      "Your right and left main bronchi are the widest portions of your bronchi. Then your bronchi divide into branches that get smaller and smaller starting with:",
    ],
  },

  spinal: {
    slide: [{ name: "Spinal", image: require("../../assets/image/Home/nervousSystem/spinal.png") }],
    intro: [
      "The spinal cord is a long, tube-like band of tissue. It connects your brain to your lower back. Your spinal cord carries nerve signals from your brain to your body and vice versa. These nerve signals help you feel sensations and move your body",
    ],
    func: [
      "These nerve messages have three crucial functions:",
      "Control body movements and functions. Signals from your brain to other body parts control your movements. They also direct autonomic (involuntary) functions like your breathing rate and heartbeat, as well as bowel and bladder function.",
      "Report senses to your brain. Signals from other parts of your body help your brain record and process sensations like pressure or pain.",
      "Manage your reflexes. Your spinal cord controls some reflexes (involuntary movements) without involving your brain. For example, your spinal cord manages your patellar reflex (involuntarily moving your leg when someone taps your shin in a certain spot).",
    ],

    anatomy: [
      "There are 3 main parts: Cervical (neck), Thoracic (chest), Lumbar (lower back)",
      "The layers of tissue called meninges cover the spinal cord. These protective tissues include:",
      "Dura mater. The outer layer that protects your spinal cord from injury",
      "Arachnoid mater. The middle layer between the epidural and subarachnoid space.",
      "Pia mater. The inner layer that covers your spinal cord.",
      "Location and size: The spinal cord begins at the bottom part of your brainstem, called the medulla oblongata. At your lower back, your spinal cord forms a cone shape called the conus medullaris.",
      "Length: In most adults, your spinal cord is about 18 inches (45 centimeters) long.",
    ],
  },

  nerves: {
    slide: [{ name: "Nerves", image: require("../../assets/image/Home/nervousSystem/nerves.png") }],

    intro: [
      "Nerves are like cables that carry electrical impulses between your brain and the rest of your body. These impulses help you feel sensations and move your muscles. They also maintain certain autonomic functions like breathing, sweating or digesting food",
      "Nerve cells are also called neurons. Neurons are present all over your body, especially in your brain and spinal cord. Nerves, together with your brain and spinal cord, are the foundation of your nervous system.",
    ],
    func: [
      "Nerves send electrical signals from one part of your body to another. These signals control your:",
      "Voluntary movement",
      "Senses (touch, pain, feeling hot or cold, vibration, hearing, sense of balance, taste, smell and sight).",
      "Blood pressure",
      "Breathing.",
      "Digestion.",
      "Heart rate.",
      "Stress response.",
      "When a nerve sends an electrical impulse:",
      "The signal travels down the axon, the “wiring” connection of the nerve.",
      "The message converts to a chemical signal at the end of the nerve called the axon hillock.",
      "The chemical releases molecules called neurotransmitters, into a space that bridges the space between one neuron to another. These bridges are called synapses.",
      "The neurotransmitter binds to a receptor on the muscle or connecting neuron and converts to another electrical signal.",
      "Electrical signals travel up the length of that next neuron.",
      "The process repeats until the message reaches its target.",
    ],

    anatomy: [
      "Location: Many nerves start in your spinal cord and some even from your brain. They extend throughout your body, including in your:",
      "Arms, including your ulnar nerve, median nerve, radial nerve and axillary nerve.",
      "Chest and abdomen, including your vagus nerve and phrenic nerve.",
      "Face, including your facial nerve, trigeminal nerve and optic nerve.",
      "Legs, including your sciatic nerve, femoral nerve, tibial nerve, obturator nerve and sural nerve",
      "Pelvis, including your pudendal nerve",
      "Structure: Your nerves are made up of",
      "Axons, cord-like groups of fibers in the center of your nerve.",
      "Dendrites, branches that carry electrical impulses.",
      "Endoneurium, a layer of connective tissue surrounding axons.",
      "Perineurium, a layer of connective tissue that surrounds groups of axons called fascicles.",
      "Epineurium, a layer of connective tissue that covers the outer surface of your nerve",
    ],
  },

  brain: {
    slide: [{ name: "Brain", image: require("../../assets/image/Home/nervousSystem/brain.png") }],

    intro: [
      `The brain is an organ that’s made up of a large mass of nerve tissue that’s protected within the skull. It plays a role in just about every major body system.`,
    ],
    func: [
      "Processing sensory information",
      "Regulating blood pressure and breathing",
      "Releasing hormones",
      "Controls thought, memory, emotion, temperature, hunger and every process that regulates our body",
    ],

    anatomy: [
      "Cerebrum:",
      `The cerebrum is the largest part of the brain. It’s divided into two halves, called hemispheres.`,
      "Each hemisphere of the cerebrum is divided into broad regions called lobes. Each lobe is associated with different functions",
      "4 lobes: Frontal, parietal, temporal, occipital",
      `Cerebellum: The cerebellum is located in the back of the brain, just below the occipital lobes. It’s involved with fine motor skills`,
      "Diencephalon:",
      "The diencephalon is located at the base of the brain",
      "Components: thalamus, subthalamus, epithalamus, hypothalamus",
      "Brain stem:",
      `The brainstem is located in front of the cerebellum and connects to the spinal cord. It’s responsible for passing messages to various parts of the body and the cerebral cortex`,
      "Components: Midbrain, pons, medulla, oblongata",
    ],
  },

  skeletal: {
    slide: [{ name: "Skeletal", image: require("../../assets/image/Home/musculoskeletalSystem/skeletal.png") }],

    intro: [
      `The skeletal system is your body’s central framework. It consists of bones and connective tissue, including cartilage, tendons, and ligaments.`,
    ],
    func: [
      "The primary function of muscle is contraction. Following contraction, skeletal muscle functions as an endocrine organ by secreting myokines – a wide range of cytokines and other peptides that act as signalling molecules. Myokines in turn are believed to mediate the health benefits of exercise. Myokines are secreted into the bloodstream after muscle contraction. Interleukin 6 (IL-6) is the most studied myokine, other muscle contraction-induced myokines include BDNF, FGF21, and SPARC.",
      "Muscle also functions to produce body heat. Muscle contraction is responsible for producing 85% of the body's heat. This heat produced is as a by-product of muscular activity, and is mostly wasted. As a homeostatic response to extreme cold, muscles are signaled to trigger contractions of shivering in order to generate heat.",
      "Skeletal muscles are voluntary muscles under the control of the somatic nervous system. The other types of muscle are cardiac muscle which is also striated and smooth muscle which is non-striated; both of these types of muscle tissue are classified as involuntary, or, under the control of the autonomic nervous system",
    ],

    anatomy: [
      "There are more than 600 skeletal muscles in the human body, also called the contractile part of a muscle, making up around 40% to 50% of body weight. ",
      `Location: Most muscles occur in bilaterally-placed pairs to serve both sides of the body`,
      "Components: ",
      "In the torso, there are several major muscle groups including the pectoral, and abdominal muscles;",
      `Intrinsic and extrinsic muscles are subdivisions of muscle groups in the hand, foot, tongue, and extraocular muscles of the eye.`,
      "Muscles are also grouped into compartments including four groups in the arm, and four groups in the leg.",
      "Apart from the contractile part of a muscle consisting of its fibers, a muscle contains a non-contractile part of dense fibrous connective tissue that makes up the tendon at each end. ",
      "Joints:",
      "A joint is where two or more bones in the body come together. There are three different joint types. The types of joints are:",
      `The tendons attach the muscles to bones to give skeletal movement. The length of a muscle includes the tendons.`,
      "Connective tissue is present in all muscles as deep fascia. Deep fascia specialises within muscles to enclose each muscle fiber as endomysium; each muscle fascicle as perimysium, and each individual muscle as epimysium. Together these layers are called mysia. Deep fascia also separates the groups of muscles into muscle compartments.",
      "Movable joints: Movable joints allow a wide range of motion. Your elbow, shoulder, and knee are movable joints.",
      "Ligaments: Bands of strong connective tissue called ligaments hold bones together.",
      "Tendons: Tendons are bands of tissue that connect the ends of a muscle to your bone.",
    ],
  },

  muscles: {
    slide: [{ name: "Muscles", image: require("../../assets/image/Home/musculoskeletalSystem/muscles.jpg") }],

    intro: [
      `Skeletal muscles (commonly referred to as muscles) are organs of the vertebrate muscular system and typically are attached by tendons to bones of a skeleton. The muscle cells of skeletal muscles are much longer than in the other types of muscle tissue, and are often known as muscle fibers. The muscle tissue of a skeletal muscle is striated – having a striped appearance due to the arrangement of the sarcomeres.`,
    ],
    func: [
      "The primary function of muscle is contraction. Following contraction, skeletal muscle functions as an endocrine organ by secreting myokines – a wide range of cytokines and other peptides that act as signaling molecules. Myokines in turn are believed to mediate the health benefits of exercise. Myokines are secreted into the bloodstream after muscle contraction. Interleukin 6 (IL-6) is the most studied myokine, other muscle contraction-induced myokines include BDNF, FGF21, and SPARC.",
      "Muscle also functions to produce body heat. Muscle contraction is responsible for producing 85% of the body's heat. This heat produced is as a by-product of muscular activity, and is mostly wasted. As a homeostatic response to extreme cold, muscles are signaled to trigger contractions of shivering in order to generate heat.",
      "Skeletal muscles are voluntary muscles under the control of the somatic nervous system. The other types of muscle are cardiac muscle which is also striated and smooth muscle which is non-striated; both of these types of muscle tissue are classified as involuntary, or, under the control of the autonomic nervous system",
    ],

    anatomy: [
      "There are more than 600 skeletal muscles in the human body, also called the contractile part of a muscle, making up around 40% to 50% of body weight. ",
      `Location: Most muscles occur in bilaterally-placed pairs to serve both sides of the body.`,
      "Components:",
      "In the torso, there are several major muscle groups including the pectoral, and abdominal muscles;",
      `Intrinsic and extrinsic muscles are subdivisions of muscle groups in the hand, foot, tongue, and extraocular muscles of the eye.`,
      "Muscles are also grouped into compartments including four groups in the arm, and four groups in the leg.",
      "Apart from the contractile part of a muscle consisting of its fibers, a muscle contains a non-contractile part of dense fibrous connective tissue that makes up the tendon at each end. ",
      "The tendons attach the muscles to bones to give skeletal movement. The length of a muscle includes the tendons.",
      "Connective tissue is present in all muscles as deep fascia. Deep fascia specialises within muscles to enclose each muscle fiber as endomysium; each muscle fascicle as perimysium, and each individual muscle as epimysium. Together these layers are called mysia. Deep fascia also separates the groups of muscles into muscle compartments.",
      `Two types of sensory receptors found in muscles are muscle spindles, and Golgi tendon organs. Muscle spindles are stretch receptors located in the muscle belly. Golgi tendon organs are proprioceptors located at the myotendinous junction that inform of a muscle's tension.`,
    ],
  },

  vas: {
    slide: [{ name: "Vas", image: require("../../assets/image/Home/maleSystem/vas.png") }],

    intro: [
      `Your two vasa deferentia are part of the male reproductive system. The vas deferens is also called a ductus deferens or a sperm duct. This long muscular tube runs from the epididymis into the pelvic cavity behind your bladder and connects to your urethra through a structure called the ejaculatory duct. `,
    ],
    func: [
      "The vas deferens transports mature sperm to the urethra in preparation for ejaculation. When you’re sexually aroused, muscle contractions move the sperm from the epididymis to the vas deferens and from there into the urethra so you’re able to ejaculate semen outside of your body. During the process, your body adds secretions to the sperm cells to make semen.",
    ],

    anatomy: [
      "Location: The vas deferens begins in the scrotum, which is the sac containing your testicles. The vas deferens then travels from the testicle into your body. It continues until it joins with the duct of the seminal vesicle to create the ejaculatory duct.",
      `Size: The vas deferens, or ductus deferens, can be 30 centimeters (almost 12 inches) to 45 centimeters (almost 18 inches) long. Some parts of it are coiled, but other parts are straight. The tube is described as being fibromuscular, meaning that it’s made of fibrous tissue and muscle tissue.`,
      "Structure: Your vas deferens is surrounded by your spermatic cord and transports mature sperm to the urethra before you ejaculate.",
    ],
  },

  testicles: {
    slide: [{ name: "Testicles", image: require("../../assets/image/Home/maleSystem/testicles.png") }],

    intro: [
      `Either of the two round male sex organs that produce sperm and are contained in the scrotum below and behind the penis`,
    ],
    func: [
      "The main function of the testes is producing and storing sperm. They’re also crucial for creating testosterone and other male hormones called androgens.",
    ],

    anatomy: [
      "Location:",
      `Your testicles are located underneath your penis. They’re enclosed in a pouch of skin called the scrotum. Generally, you’ll have one testicle to the right and one testicle to the left of your penis.`,
      "Your testicles are connected to the inside of your body by a cord called the spermatic cord. Each cord contains nerves and blood vessels. The cords also contain the vas deferens, which are the tubes that move sperm to your penis, so it can leave your body in semen.",
      "Shape: Your testicles aren’t visible because they’re located inside your scrotum. However, their outlines are visible, and you can feel them. Testicles have been described as being like large olives, small eggs or walnuts.",
      "Size: There’s no exact size for testicles. In fact, one of your testicles may be a little bit bigger than the other one. One testicle might be a little lower than the other. An adult testicle may range from half an inch (15 mL) to 1.5 inches (35 mL) or more. One comparison says the normal range goes from the size of a bird egg to the size of a small chicken egg.",
    ],
  },

  seminalVesicles: {
    slide: [{ name: "Seminal Vesicles", image: require("../../assets/image/Home/maleSystem/seminalVesicles.png") }],

    intro: [
      `A seminal vesicle is a part of the anatomy that’s typically considered male. The two seminal vesicles are glands that produce the fluids that will turn into semen. The vesicles may also be called seminal glands or vesicular glands.`,
    ],
    func: [
      "The seminal vesicle is part of the reproductive system. The vesicles have both glandular tissue and muscular tissue. The muscular tissue contracts to move seminal fluid and sperm into the urethra and out through the penis.",
      "The seminal vesicles work together with other parts of your reproductive system. For instance, the vesicles and the vas deferens and its ampulla (sperm repository) are all involved in pushing out ejaculate into and from the penis.",
      "The fluids that develop in your seminal vesicles make up an estimated 50% to 80% of your semen’s volume. The substances in these fluids are designed to help sperm stay alive once they enter the vagina. The fluids carry:",
      "Fructose, which provides energy.",
      "Prostaglandins, which keep the vagina from seeing sperm as an invader.",
      "Alkaline fluid, which helps keep the sperm alive in the vagina, which is acidic.",
      "Clotting factors, which also help to keep sperm alive longer.",
    ],

    anatomy: [
      "Location: The seminal vesicles are located behind your bladder but in front of your rectum. The tip of the vas deferens is near the vesicles.",
      `Structure: Seminal glands, which are like bags or pouches, have blood vessels and nerves within them. There are also lymph nodes nearby. The seminal glands combine glandular and muscular tissue.`,
      "Size: A typical seminal gland (seminal vesicle) is about 5 centimeters long or not quite 2 inches long. However, it’s in a tight coil that would be twice as long if stretched out.",
    ],
  },

  scrotum: {
    slide: [{ name: "Scrotum", image: require("../../assets/image/Home/maleSystem/scrotum.png") }],

    intro: [
      `The scrotum is a part of a male's body that is the loose pouch-like sac of skin that hangs behind the penis. It holds the testicles (also called testes), as well as many nerves and blood vessels.`,
    ],
    func: [
      "The scrotum is responsible for protecting the testes. In addition, the scrotum protects the testicles and major blood vessels, as well as tubes that release sperm from the testicles into the penis for ejaculation.",
    ],

    anatomy: [
      "Each side of the scrotum usually consists of a:",
      `Testicle. Each testicle produces hormones, the main one being testosterone, with the help of parts of the brain like the hypothalamus and pituitary gland.`,
      "Epididymis. An epididymis is located on the top of each testicle.",
      "Spermatic cord. Each spermatic cord contains blood vessels, nerves, lymph vessels, and a tube called the vas deferens.",
      "Cremaster muscle. Each cremaster muscle surrounds one of the testicles and its spermatic cord.",
    ],
  },

  prostateGland: {
    slide: [{ name: "ProstateGland", image: require("../../assets/image/Home/maleSystem/prostateGland.png") }],

    intro: [
      `A firm partly muscular partly glandular body that is situated about the base of the male urethra and that secretes an alkaline viscid fluid which is a major constituent of the semen`,
    ],
    func: [
      "Helping to produce semen: The prostate contributes 20-30% of fluid to the total semen volume.",
      "Closing the urethra during ejaculation: During ejaculation, the prostate contracts and squirts prostatic fluid into the urethra. Here, it mixes with sperm cells and fluid from the seminal vesicles to create semen, which the body then expels.When the prostate contracts during ejaculation, it closes off the opening between the bladder and urethra, pushing semen through at speed. This is why, in typical anatomic situations, it is impossible to urinate and ejaculate simultaneously.",
      "Hormone metabolism",
    ],

    anatomy: [
      "Size: the prostate is a walnut-sized gland locate between the bladder and the penis",
      `The following layers make up the prostate, beginning with the outer capsule and ending inside the prostate:`,
      "Anterior zone: Made of muscle and fibrous tissues, medical professionals call this zone the anterior fibromuscular zone.",
      "Peripheral zone: Mostly situated toward the back of the gland, this is where most of the glandular tissue sits.",
      "Central zone: This surrounds the ejaculatory ducts and makes up around 25% of the prostate’s total mass.",
      "Transition zone: This is the part of the prostate that surrounds the urethra. It is the only portion of the prostate that continues to grow throughout life.",
    ],
  },

  penis: {
    slide: [{ name: "Penis", image: require("../../assets/image/Home/maleSystem/penis.png") }],

    intro: [
      `The penis is the male sex organ, a complex external organ used to urinate and for sex and reproduction in people who are born biologically male.`,
    ],
    func: [
      "The two main functions of the penis include sexual intercousrse and urination.",
      "When a person experiences arousal, the penis fills with blood, causing an erection. As such, erectile function is closely related to cardiovascular health.",
      "The penis also plays an important urinary role. The penis contains the urethra, which allows passage of urine from the bladder to the urethral opening, enabling a person to expel urine from the body.",
    ],

    anatomy: [
      "Location: at the front of the body at the base of the pelvis.",
      `The penis consists of several major structures:`,
      "Glans: The glans, or head of the penis, is the sensitive structure at the end of the corpus (shaft).",
      "Urethra: The urethra is a tube inside the penis that runs from the bladder to the head of the penis. It is used for urination. It also crosses through the prostate gland, where an opening (called the ejaculatory duct) receives sperm and fluids that mix together to form semen.",
      "Meatus: The meatus is the opening at the tip of the glans through which urine or semen exits the body.",
      "Prepuce: The prepuce, or foreskin, is a loose fold of skin that covers the head of the penis. The removal of the foreskin is referred to as circumcision.",
      "Corpus cavernosa: The corpus cavernosa are two columns of spongy tissue that run along the interior shaft of the penis. When filled with blood, the tissues stiffen, causing an erection.",
      "Corpus spongiosum: The corpus spongiosum is the third column of tissue that prevents the urethra from closing during an erection.",
    ],
  },

  maleUrethra: {
    slide: [{ name: "Male Urethra", image: require("../../assets/image/Home/maleSystem/maleUrethra.png") }],

    intro: [
      `The urethra is the tube that lets urine leave your bladder and your body. If you were assigned male at birth, your urethra passes through your prostate and into your penis. If you were assigned female at birth, your urethra is much shorter. It runs from your bladder to open in front of your vagina.`,
    ],
    func: [
      "The urethra is part of your urinary system. This system is made up of your kidneys, bladder, ureters and urethra.",
      "Your kidneys clean your blood and produce urine, a waste product. From your two kidneys, two ureters move the urine to the bladder, where it’s stored until you urinate (pee). Urine leaves your body through a hole at the end of your urethra. That hole from the inside to the outside is called the urethral meatus. (The term ‘meatus’ refers to any opening from the inside to the outside.)",
    ],

    anatomy: [
      "The urethra has two different types of sphincters, or muscles that act as valves that open or close. There is an internal urethral sphincter, which is located at the point where the urethra leaves the bladder. There’s also an external urethral sphincter located in the pelvic floor. These muscles work together with the bladder to get urine out of your body.",
      `Location: The urethra is a passageway located in your body’s pelvic region. The walls of the tube are thin and made up of epithelial tissue, smooth muscle cells and connective tissue.`,
      "Length: If you’re someone who’s been assigned female at birth, your urethra is about 1.5 inches (3 to 4 centimeters) long. If you’re someone who’s been assigned male at birth, your urethra is about 8 to 9 inches long (about 20 centimeters).",
      "Components:",
      "The prostatic urethra: The part of the urethra that carries seminal fluid through the prostate gland to produce the semen that will be ejaculated.",
      "The membranous urethra: The short part of the urethra that transports fluids through the pelvic floor.",
      "The penile urethra (also called the spongy urethra or the cavernous urethra): The longest piece of the urethra. This section extends the entire length of the penis and ends at the urethral meatus or the opening outside the body.",
    ],
  },

  epididymis: {
    slide: [{ name: "Epididymis", image: require("../../assets/image/Home/maleSystem/epididymis.png") }],

    intro: [`The epididymis is a long, coiled tube that stores sperm and transports it from the testes.`],
    func: [
      "The primary functions of the epididymis are sperm transport and sperm maturation.",
      "The sperm move from the testes, through the epididymis, and into the vas deferens prior to being mixed with various secretions at the time of ejaculation.",
      "During their time moving through the epididymis, sperm mature and gain additional function.",
      "In particular, they gain the ability to propel themselves forward. Sperm must pass through at least the middle of the corpus to mature enough to fertilize an egg on their own.",
    ],

    anatomy: [
      "The epididymis is a coiled tube in three sections. It sits inside the scrotum, rests on the backside of each testicle, attached to the testes.",
    ],
  },

  ejaculatoryDuct: {
    slide: [{ name: "Ejaculatory Duct", image: require("../../assets/image/Home/maleSystem/ejaculatoryDuct.png") }],

    intro: [`On each side of the prostate gland (in the male reproductive system) is an ejaculatory duct.`],
    func: [
      "The ejaculatory duct delivers sperm into the urethra, adding secretions and additives from the prostate necessary for sperm function, while providing an interface between the reproductive and urinary systems in men",
    ],

    anatomy: [
      "Location: In prostate gland.",
      "Length: about two centimeters in length",
      "Structure: Either of two hollow tubes. These ducts are formed by the fusion of the vas deferens and the seminal vesicles.",
    ],
  },

  fallopian: {
    slide: [{ name: "Fallopian", image: require("../../assets/image/Home/femaleSystem/fallopian.png") }],

    intro: [
      `Your fallopian tubes are a pair of hollow, muscular ducts located between your ovaries and your uterus. Each fallopian tube is a channel between your ovaries, where your body makes eggs, and your uterus, where a fertilized egg can develop into a fetus.`,
    ],
    func: [
      "Your fallopian tubes play an important role in conception and pregnancy.",
      "A holding place for your egg: Each month, one of your ovaries releases a mature egg as part of your menstrual cycle. Finger-like structures at the end of your fallopian tube, called fimbriae, sweep the egg into the tube, where the egg waits to be fertilized.",
      "The site where fertilization happens: If your partner ejaculates during intercourse, their sperm travels through your vagina, cervix, uterus and eventually into your fallopian tubes. Fertilization happens in your fallopian tubes when an egg and sperm meet.",
      "An active passageway that moves a fertilized egg to your uterus: A fertilized egg (embryo) travels through your fallopian tubes until it reaches your uterus, where it can grow into a fetus.",
    ],

    anatomy: [
      "Location: You have two fallopian tubes. One on the right side of your uterus and one on the left side. Each tube extends from an ovary and opens into your uterus.",
      "Size: each fallopian tube is between 4 to 5 inches long and between 0.2 to 0.6 inches in diameter.",
      "Components: A fallopian tube consists of a thin mucous membrane and layers of muscle:",
      "Mucous membrane: A delicate lining in your fallopian tubes secrete fluids that maintain an environment where fertilization can happen and an embryo can develop. Small hair-like structures in the lining (cilia) sway, moving eggs, sperm and an embryo (if fertilization takes place) through your fallopian tubes.",
      "Muscular layers: Your fallopian tube’s muscular wall has varied layers. The outermost layer is mostly smooth, long muscle fibers. The innermost layer consists of circular fibers. Together, these muscles contract (squeeze) to move an egg, sperm, or embryo through your fallopian tubes, along with the help of the cilia.",
    ],
  },

  ovaries: {
    slide: [{ name: "Ovaries", image: require("../../assets/image/Home/femaleSystem/ovaries.png") }],

    intro: [
      `The ovaries are small, oval-shaped glands that produce and store your eggs (also called ovum) and make hormones.`,
    ],
    func: [
      "They shelter and protect the eggs a female is born with until they are ready for use.",
      "Produce female reproductive hormones called estrogen and progesterone, and some lesser hormones called relaxin and inhibin to help develop adult female characteristic, aid in the reproduction cycle.",
      "Ovaries release one egg, or sometimes more, each menstrual cycle. ",
    ],

    anatomy: [
      "Location: The ovaries lie on either side of the uterus against the pelvic wall in a region called the ovarian fossa. They are held in place by ligaments attached to the uterus.",
      "Size: The size of the ovaries relate to the age. The average size of an ovary is round 4 centimeters, and declines every decade of life once you turn 30.",
      "Components: The ovary has three layers. The outer layer is similar to a capsule found on medicine. The middle layer is the ovarian cortex. It's made up of connective tissue and contains the ovarian follicles. The innermost layer (medulla) contains blood and lymphatic vessels.",
    ],
  },

  uterus: {
    slide: [{ name: "Uterus", image: require("../../assets/image/Home/femaleSystem/uterus.png") }],

    intro: [
      `Your uterus is a pear-shaped organ in the reproductive system of people assigned female at birth. It’s where a fertilized egg implants during pregnancy and where your baby develops until birth.`,
    ],
    func: [
      "Your uterus plays a key role in your reproductive health and function. The three main jobs of your uterus are:",
      "Pregnancy: Your uterus stretches to grow your baby during pregnancy. It can also contract to help push your baby out of your vagina.",
      "Fertility: Your uterus is where a fertilized egg implants during conception and where your baby grows.",
      "Menstrual cycle: Your uterine lining is where blood and tissue come from during menstruation.",
    ],

    anatomy: [
      "Location: Your uterus is in your pelvis between your bladder and rectum. It’s supported by your pelvic floor muscles and perineal body.",
      "Components: consists of three layers",
      "Perimetrium: The outermost, protective layer.",
      "Myometrium: The highly muscular middle layer. This is what expands during pregnancy and contracts to push your baby out.",
      "Endometrium: The inner layer or lining of your uterus (uterine lining). This layer of your uterus is shed during your menstrual cycle.",
      "Size and weight: Your uterus is about 3 inches from top to bottom and 2 inches wide at the widest part. It’s about 1 inch thick and weighs around 1 ounce.",
    ],
  },

  vagina: {
    slide: [{ name: "Vagina", image: require("../../assets/image/Home/femaleSystem/vagina.png") }],

    intro: [
      `The vagina is a muscular canal lined with nerves and mucus membranes. It connects the uterus and cervix to the outside of the body.`,
    ],
    func: [
      "The vagina has 3 main functions:",
      "provides a passageway for blood and mucosal tissue from the uterus during a woman’s monthly period",
      "receives the penis during sexual intercourse and holds the sperm until they pass into the uterus",
      "provides a passageway for childbirth",
    ],

    anatomy: [
      "Location: Your vagina extends from your cervix, a neck-like piece of tissue that connects your vagina to your uterus. Your vagina ends as a hole outside of your body, called your vaginal opening. Your vagina is between your bladder and your rectum",
      "Depth: a little over 3.5 inches deep, but depends on various factors, including age, weight.",
    ],
  },

  bladder: {
    slide: [{ name: "Bladder", image: require("../../assets/image/Home/excretorySystem/bladder.png") }],

    intro: [
      `The urinary bladder, or simply bladder, is a hollow organ in humans and other vertebrates that stores urine from the kidneys before disposal by urination. In humans the bladder is a distensible organ that sits on the pelvic floor. Urine enters the bladder via the ureters and exits via the urethra.`,
    ],
    func: [
      "The bladder is the organ that holds urine until it is ready to be released and then helps to expel it from the body.",
      "Ureters bring urine to the bladder from the kidneys, passing through an opening to the bladder called the ureterovesical junction.",
      "As the bladder fills with urine, nerves send signals to the central nervous system. Somatic and autonomic nerves control the detrusor muscle, which contracts and relaxes along with sphincters in the urethra.",
      "When full, the typical adult bladder can hold up to 500 milliliters of urine at a time—or about 2 cups—which must be released every two to five hours.",
      "Urination, or micturition, is a combination of voluntary and involuntary actions regulated by the micturition center—a signal center located in the pons of the brainstem. As the bladder fills and the bladder wall is stretched, sensors send nerve impulses to the micturition center. The result is the relaxing and contracting of the detrusor muscle along with the external and internal urethral sphincters.",
    ],

    anatomy: [
      "Location: In men, it is bordered by the pubic bone at the front of the pelvis and the rectum at the back of the pelvis in the lower abdomen. In women, the bladder is bordered posteriorly by the uterus and vagina.",
      "Shape: The bladder is a triangle-shaped, hollow organ.",
      "Structure: The bladder is supported by ligaments and connects at the top to two ureters and at the bottom to the urethra.",
      "The bladder itself is divided into four sections.",
      "Apex: This is the top part of the bladder. The apex points forward toward the abdominal wall.",
      "Fundus: The base of the bladder",
      "Body: The main portion of the bladder between the apex and fundus.",
      "Neck: The narrow part of the bladder that constricts and connects the organ to the urethra.",
    ],
  },

  kidney: {
    slide: [{ name: "Kidney", image: require("../../assets/image/Home/excretorySystem/kidney.png") }],

    intro: [
      `The kidneys are two bean-shaped organs that filter your blood. Your kidneys are part of your urinary system.`,
    ],
    func: [
      "The main role of the kidneys is maintaining homeostasis. They manage fluid levels, electrolyte balance, and other factors that keep the internal environment of the body consistent and comfortable.",
      "These organs carry out a wide range of bodily functions:",
      "Waste excretion: The kidneys remove various waste products and get rid of them in the urine. Some major compounds that the kidneys remove are:",
      "urea, which results from the breakdown of proteins",
      "uric acid from the breakdown of nucleic acids",
      "drugs and their metabolites",
      "Reabsorption of nutrients:",
      "The kidneys reabsorb nutrients from the blood using tubules and transport them to where they will best support health. They also reabsorb other products to help maintain homeostasis.",
      "Reabsorbed products include: glucose, amino acids, bicarbonate, water, phosphate, chloride, sodium, magnesium, and potassium ions",
      "Maintaining pH",
      "The kidneys manage the pH by reabsorbing and producing bicarbonate from urine, which helps neutralize acids.",
      "The kidneys can retain bicarbonate if the pH is tolerable and release it if acid levels rise. They can produce new bicarbonate by excreting acid.",
      "Osmolality regulation",
      "Increasing urine concentration",
      "Increasing water reabsorption",
      "Reopening portions of the collecting duct that water cannot normally enter, allowing water back into the body",
      "Retaining urea in the medulla of the kidney rather than excreting it, as this compound draws in water",
      "Regulating blood pressure",
      "The kidneys regulate blood pressure when necessary, but they are responsible for slower adjustments.",
      "They adjust long-term pressure in the arteries by causing changes in the fluid outside of cells (extracellular fluid).",
      "Secretion of active compounds: The kidneys release several important compounds, including:",
      "Erythropoietin: This controls erythropoiesis, which is the production of red blood cells. The liver also produces erythropoietin, but the kidneys are its main producers in adults.",
      "Renin: This enzyme helps manage the expansion of arteries and the volumes of blood plasma, lymph, and interstitial fluid. Lymph is a fluid that contains white blood cells, which support immune activity, and interstitial fluid is the main component of extracellular fluid.",
      "Calcitriol: This is the hormonally active metabolite of vitamin D. It increases both the amount of calcium that the intestines can absorb and the reabsorption of phosphate in the kidney.",
    ],

    anatomy: [
      "Location: The positioning of the kidneys is just below the rib cage, with one on each side of the spine. The right kidney is generally slightly lower than the left kidney to make space for the liver.",
      "Size: Each kidney is approximately 3 centimeters (cm) thick, 6 cm wide, and 12 cm long.",
      "Weight: In males, the average weight of the kidneys is roughly 129g for the right one and 137g for the left. In females, the average weight of these organs is 108g for the right kidney and 116g for the left kidney.",
      "Shape: The kidneys are two bean-shaped organs that are roughly the size of a fist. ",
      "Structure: ",
      "A tough, fibrous renal capsule surrounds each kidney and provides support for the soft tissue inside. Beyond that, two layers of fat serve as further protection. The adrenal glands lie on top of the kidneys.",
      "Inside the kidneys are a number of pyramid-shaped lobes. Each consists of an outer renal cortex and an inner renal medulla. Nephrons flow between these sections. Each nephron includes a filter, called the glomerulus, and a tubule.",
      "The tubule returns necessary substances to the blood and removes waste that then becomes urine. The kidneys excrete urine through the ureter, a tube that leads to the bladder.",
    ],
  },

  ureters: {
    slide: [{ name: "Ureters", image: require("../../assets/image/Home/excretorySystem/ureters.png") }],

    intro: [
      `The ureters are the part of the urinary system. They are tubes made of smooth muscle that propel urine from the kidneys to the urinary bladder. `,
    ],
    func: [
      "The ureters’s function is to filter blood and create urine as a waste product. Ureters carry urine from the kidneys to the bladder. The ureters work constantly, emptying urine into the bladder about every 10 to 15 seconds.",
      "Length: In a human adult, the ureters are usually 20–30 cm (8–12 inch) long and around 3–4 mm (0.12–0.16 inch) in diameter. ",
      "Structure:",
      "There are two ureters, one connected to each kidney. The kidneys are situated below the ribs, toward the middle of the back. The ureters each run to the bladder, a hollow, muscular organ located in the pelvis. Ligaments, connected to other organs and bones, hold the bladder in place.",
      "The wall of the ureter has three layers: the outer layer, made of fibrous connective tissue; the middle layer, made of smooth muscle; and a moist, inner lining that protects the surface of the cells.",
    ],

    anatomy: [
      "Location: Ureters connect the kidneys to the bladder. The upper half of each ureter is located in the abdomen and the lower half is in the pelvis.",
      "Depth: a little over 3.5 inches deep, but depends on various factors, including age, weight.",
    ],
  },

  urethra: {
    slide: [{ name: "Urethra", image: require("../../assets/image/Home/excretorySystem/urethra.png") }],

    intro: [
      `The urethra is a hollow tube that connects the urinary bladder to the urinary meatus for the removal of urine from the body.`,
    ],
    func: [
      "The urethra is part of the excretory system. This system is made up of  kidneys, bladder, ureters and urethra.  Kidneys clean  blood and produce urine, a waste product. From two kidneys, two ureters move the urine to the bladder, where it’s stored until urinate (pee).",
      "Urine leaves the body through a hole at the end of  urethra. That hole from the inside to the outside is called the urethral meatus. (The term ‘meatus’ refers to any opening from the inside to the outside.)",
    ],

    anatomy: [
      "Location: The urethra is a passageway located in the body's pelvic region. ",
      "Structure:",
      "The walls of the tube are thin and made up of epithelial tissue, smooth muscle cells and connective tissue. ",
      "The urethra has two different types of sphincters, or muscles that act as valves that open or close:",
      "An internal urethral sphincter which is located at the point where the urethra leaves the bladder.",
      "An external urethral sphincter located in the pelvic floor. These muscles work together with the bladder to get urine out of the body.",
      "Length",
      "Female: urethra is about 1.5 inches (3 to 4 centimeters) long",
      "Male: urethra is about 8 to 9 inches long (about 20 centimeters).",
      "There are three parts to the male urethra:",
      "The prostatic urethra: The part of the urethra that carries seminal fluid through the prostate gland to produce the semen that will be ejaculated.",
      "The membranous urethra: The short part of the urethra that transports fluids through the pelvic floor.",
      "The penile urethra (also called the spongy urethra or the cavernous urethra): The longest piece of the urethra. This section extends the entire length of the penis and ends at the urethral meatus or the opening outside the body.",
    ],
  },

  endocrineSystem: {
    slide: [
      { name: "Endocrine System", image: require("../../assets/image/Home/endocrineSystem/endocrineSystem.png") },
    ],

    intro: [
      `The endocrine system is a messenger system comprising feedback loops of the hormones released by internal glands of an organism directly into the circulatory system, regulating distant target organs.`,
      `A gland is an organ that makes and puts out hormones that do a specific job in your body. Endocrine and exocrine glands release the substances they make into your bloodstream.`,
    ],
    func: [
      "Your endocrine system continuously monitors the amount of hormones in your blood.",
      "Hormones deliver their messages by locking into the cells they target so they can relay the message. Hormones affect nearly every process in your body, including:",
      "Metabolism (the way you break down food and get energy from nutrients).",
      "Growth and development.",
      "Emotions and mood.",
      "Fertility and sexual function.",
      "Sleep.",
      "Blood pressure.",
    ],

    anatomy: [
      "Your endocrine system is made up of several organs called glands. These glands, located all over your body, create and secrete (release) hormones. The main glands that produce hormones include:",
      "Hypothalamus: This gland is located in your brain and controls your endocrine system. It uses information from your nervous system to determine when to tell other glands, including the pituitary gland, to produce hormones. The hypothalamus controls many processes in your body, including your mood, hunger and thirst, sleep patterns and sexual function.",
      "Pituitary: This little gland is only about the size of a pea, but it has a big job. It makes hormones that control several other glands such as the thyroid gland, adrenal glands, ovaries and testicles. The pituitary gland is in charge of many different functions, including how your body grows. It’s located at the base of your brain.",
      "Thyroid: Your thyroid is a butterfly-shaped gland in the front of your neck. It’s responsible for your metabolism (how your body uses energy).",
      "Parathyroid: These four tiny glands are no larger than a grain of rice. They control the level of calcium in your body. For your heart, kidneys, bones and nervous system to work, you need the right amount of calcium.",
      "Adrenal: You have two adrenal glands, one on top of each kidney. They control your metabolism, blood pressure, sexual development and response to stress.",
      "Pineal: This gland manages your sleep cycle by releasing melatonin, a hormone that causes you to feel sleepy.",
      "Pancreas: Your pancreas is part of your endocrine system, and it plays a significant role in your digestive system too. It makes a hormone called insulin that controls the level of sugar in your blood.",
      "Ovaries: In women, the ovaries release sex hormones called estrogen, progesterone and testosterone. Women have two ovaries in their lower abdomen, one on either side.",
      "Testes: In men, the testes (testicles) make sperm and release the hormone testosterone. This hormone affects sperm production, muscle strength and sex drive.",
    ],
  },

  stomach: {
    slide: [{ name: "Stomach", image: require("../../assets/image/Home/digestiveSystem/stomach.png") }],

    intro: [`Your stomach is a part of your gastrointestinal (GI) tract. It is a muscular organ that digests food.`],
    func: [
      "Your stomach’s purpose is to digest food and send it to your small intestine. It has three functions:",
      "Temporarily store food.",
      "Contract and relax to mix and break down food.",
      "Produce enzymes and other specialized cells to digest food.",
    ],

    anatomy: [
      "Location: Your stomach sits in your upper abdomen on the left side of your body. The top of your stomach connects to a valve called the esophageal sphincter (a muscle at the end of your esophagus). The bottom of your stomach connects to your small intestine.",
      "Size: Your stomach expands when full and deflates when empty. Because of this, your stomach size can vary depending on how recently and how much you have eaten.",
      "Components: Your stomach has five distinct sections:",
      "The cardia is the top part of your stomach. It contains the cardiac sphincter, which prevents food from traveling back up your esophagus.",
      "The fundus is a rounded section next to the cardia. It's below your diaphragm (the dome-shaped muscle that helps you breathe).",
      "The body (corpus) is the largest section of your stomach. In the body, your stomach contracts and begins to mix food.",
      "The antrum lies below the body. It holds food until your stomach is ready to send it to your small intestine.",
      "The pylorus is the bottom part of your stomach. It includes the pyloric sphincter. This ring of tissue controls when and how your stomach contents move to your small intestine.",
      "Structure: Several layers of muscle and other tissues make up your stomach:",
      "Mucosa is your stomach’s inner lining. When your stomach is empty, the mucosa has small ridges (rugae). When your stomach is full, the mucosa expands, and the ridges flatten.",
      "Submucosa contains connective tissue, blood vessels, lymph vessels (part of your lymphatic system) and nerve cells. It covers and protects the mucosa.",
      "Muscularis externa is the primary muscle of your stomach. It has three layers that contract and relax to break down food.",
      "Serosa is a layer of membrane that covers your stomach.",
    ],
  },

  smallIntestine: {
    slide: [
      { name: "Small Intestine.png", image: require("../../assets/image/Home/digestiveSystem/smallIntestine.png") },
    ],

    intro: [
      `The small intestine is part of your digestive system. It is a long tube-like organ that connects the stomach and the large intestine.`,
    ],
    func: [
      "The small intestine is where most of the long process of digestion takes place. It:",
      "Systematically breaks food down.",
      "Absorbs nutrients.",
      "Extracts water.",
      "Moves food along the gastrointestinal tract.",
    ],

    anatomy: [
      "Location: The small intestine is coiled inside the lower abdominal cavity beneath the stomach. The large intestine surrounds it, framing the edges of the abdominal cavity.",
      "Size: The small intestine is about 18 feet (6.5 meters) long and folds many times to fit in the abdomen. Although it is longer than the large intestine, it is called the small intestine because it is narrower in diameter.",
      "Shape: It looks like a long, pink or red tube with many folds.",
      "Components: Made up of three segments — the duodenum, jejunum, and ileum",
    ],
  },

  rectum: {
    slide: [{ name: "Rectum", image: require("../../assets/image/Home/digestiveSystem/rectum.png") }],

    intro: [
      `The rectum is the end part of the large intestine that connects the colon to the anus. It is the area where a person holds stool before excreting it from the body.`,
    ],
    func: [
      "The rectum's job is to receive stool from the colon, let you know that there is stool to be evacuated (pooped out) and to hold the stool until evacuation happens. ",
      "When anything (gas or stool) comes into the rectum, sensors send a message to the brain. The brain then decides if the rectal contents can be released or not.",
    ],

    anatomy: [
      "Location: The position of the rectum is between the sigmoid section of the colon and the anal canal.",
      "Size: The rectum is a straight, 8-inch chamber that connects the colon to the anus.",
    ],
  },

  pancreas: {
    slide: [{ name: "Pancreas", image: require("../../assets/image/Home/digestiveSystem/pancreas.png") }],

    intro: [`The pancreas is an organ in the back of your abdomen (belly). It is part of your digestive system.`],
    func: [
      "The pancreas performs two main functions:",
      "As an endocrine gland, it functions mostly to regulate blood sugar levels, secreting the hormones insulin, glucagon, somatostatin, and pancreatic polypeptide.",
      "As a part of the digestive system, it functions as an exocrine gland secreting pancreatic juice into the duodenum through the pancreatic duct.",
    ],

    anatomy: [
      "Location: Your pancreas sits behind your stomach and in front of your spine. Your gallbladder, liver and spleen surround your pancreas.",
      "Length: The pancreas is about 6 inches long. It’s about the length of your hand.",
      "Components: The pancreas anatomy includes:",
      "Head: The wider part of the pancreas that sits in the curve of your duodenum.",
      "Neck: The short part of the pancreas extending from the head.",
      "Body: The middle part of the pancreas between the head and neck, which extends upward.",
      "Tail: The thinnest part of the pancreas, located near your spleen.",
    ],
  },

  mouth: {
    slide: [{ name: "Mouth", image: require("../../assets/image/Home/digestiveSystem/mouth.png") }],

    intro: [
      `Your mouth is part of your digestive system. This oval-shaped opening in your skull starts at your lips and ends at your throat.`,
    ],
    func: [
      "The mouth is involved in several essential bodily functions:",
      "Breathing.",
      "Chewing.",
      "Digesting foods and drinks.",
      "Drinking.",
      "Swallowing.",
      "Talking.",
      "Tasting.",
    ],

    anatomy: [
      "The boundaries of your mouth hold food in place for chewing and allow you to form sounds and words:",
      "Cheeks",
      "Lips",
      "Palate: The palate is the roof of your mouth, which separates your mouth from your nasal cavity, or nose area. It’s made of bone and muscle. Inside your mouth are the:",
      "Gums: Your gums are tissue that anchor your teeth in place.",
      "Oral mucosa (mucous membranes): The oral mucosa is a lining all over the inside of your mouth.",
      "Salivary glands: Three pairs of salivary glands make saliva (spit).",
      "Sensory receptors: Sensory receptors located throughout your mouth help you sense the temperature and texture of foods and drinks.",
      "Taste buds: These cells help sense flavors and tastes (sweet, salty, sour, and bitter).",
      "Teeth: Your mouth has 32 teeth that crush and tear food for swallowing and digestion.",
      "Tongue: Your tongue is a strong muscle that contains taste buds. It moves food around your mouth and helps you speak.",
      "Uvula: This piece of flesh hanging in the back of the palate helps move food from your mouth into your throat.",
    ],
  },

  liver: {
    slide: [{ name: "Liver", image: require("../../assets/image/Home/digestiveSystem/liver.png") }],

    intro: [
      `The liver is a large organ in the abdomen that performs many important bodily functions, including blood filtering. It is also considered a gland because it makes chemicals the body needs.`,
    ],
    func: [
      "The liver has hundreds of jobs. Some of the most vital are:",
      "Cleans toxins (harmful substances) out of the blood.",
      "Gets rid of old red blood cells.",
      "Makes bile, a fluid that helps the body digest (break down) food.",
      "Metabolizes proteins, carbohydrates and fats so your body can use them.",
      "Produces substances to help blood clot.",
      "Regulates the amount of blood in the body.",
      "Stores glycogen (an energy source) and vitamins to be used by the body later.",
    ],

    anatomy: [
      "Location: It is located in the right upper quadrant of the abdomen, under the ribs. However, in a condition called situs inversus, the liver is located on the left side.",
      "Shape: It’s spongy, wedge-shaped, reddish-brown in color and about the size of a football",
      "Size: The size varies based on how tall you are and how much you weigh. ",
      "Weight: The liver is the largest internal organ. Weighing, on average, about three pounds in an adult",
      "Components: The liver has two main parts: the larger right lobe and the smaller left lobe.",
      "The lobes contain many blood vessels. Blood travels through the liver. The liver filters (cleans) the blood, removing toxins and waste that eventually leave the body through urine and feces.",
      "The lobes also contain thousands of lobules (small lobes). These lobules connect with many bile ducts, tubes that transport bile from the liver to the small intestine.",
    ],
  },

  gallbladder: {
    slide: [{ name: "Gallbladder", image: require("../../assets/image/Home/digestiveSystem/gallbladder.png") }],

    intro: [
      `The gallbladder stores and concentrates bile from the liver, and then releases it into the duodenum in the small intestine to help absorb and digest fats.`,
    ],
    func: [
      "Its main function is to store bile. Bile helps your digestive system break down fats. Bile is a mixture of mainly cholesterol, bilirubin and bile salts.",
      "Your gallbladder is connected to other parts of your digestive system through a series of bile ducts called the biliary tract. The biliary tract (sometimes called biliary system or biliary tree) is a pipe-like system that carries bile from your liver to your small intestine.",
    ],

    anatomy: [
      "Location: Your gallbladder is located in the upper right part of your abdomen (belly). It sits just under your liver.",
      "Shape: Your gallbladder is a small, pear-shaped organ",
      "Component: gallbladder stores and releases bile. Bile is the fluid your liver produces that helps digest fats in the food you eat",
    ],
  },

  esophagus: {
    slide: [{ name: "Esophagus", image: require("../../assets/image/Home/digestiveSystem/esophagus.png") }],

    intro: [
      `The esophagus is the hollow, muscular tube that passes food and liquid from your throat to your stomach. It functions as part of your digestive system.`,
    ],
    func: [
      "The primary function of your esophagus is to carry food and liquid from your mouth to your stomach. ",
      "When you swallow, food and liquid first move from your mouth to your throat (pharynx).",
      "A small muscular flap called the epiglottis closes to prevent food and liquid from going down the “wrong pipe” — your windpipe (trachea).",
      "Another small flap called the uvula helps prevent liquid from passing upward into your nasal cavity.",
    ],

    anatomy: [
      "Location: The esophagus is located in the center of your chest in an area called the mediastinum. It lies behind your windpipe (trachea) and in front of your spine.",
      "Length: The average adult esophagus is about 10 to 13 inches long. It’s about three-fourths of an inch thick at its smallest point.",
    ],
  },

  colon: {
    slide: [{ name: "Colon", image: require("../../assets/image/Home/digestiveSystem/colon.png") }],

    intro: [
      `The colon (large intestine) is the last part of the gastrointestinal (GI) tract, the long, tube-like pathway that food travels through your digestive system.`,
    ],
    func: [
      "When the large intestine receives food from the small intestine, the food has been liquified by the digestive process and most of the nutrients have been absorbed.",
      "The colon’s job is to dehydrate what’s left of the food and form it into stool. It does this by slowly absorbing water and electrolytes as its muscle system moves the waste along. ",
      "Meanwhile, bacteria living in your colon feed on the waste and break it down further, completing the chemical part of the digestive process.",
    ],

    anatomy: [
      "Location: The large intestine is in your lower abdominal cavity from your waist down. It surrounds the small intestine in a sort of a square question mark shape, with the tail of the question mark ending at the anal canal",
      "Shape: The large intestine looks like a semi-flat, segmented tube that lays loosely around the edges of the abdominal cavity. A seam runs vertically down the middle of the tube, making the segments bulge on either side of it",
      "Length: The colon is the longest part of the large intestine and its average length in the adult human is 65 inches or 166 cm (range of 80 to 313 cm) for males, and 61 inches or 155 cm (range of 80 to 214 cm) for females.",
      "Structure: The colon is made up of the cecum, the ascending (right) colon, the transverse (across) colon, the descending (left) colon, and the sigmoid colon, which connects to the rectum.",
    ],
  },

  anus: {
    slide: [{ name: "Anus", image: require("../../assets/image/Home/digestiveSystem/anus.png") }],

    intro: [`The anus is the last part of the digestive tract.`],
    func: [
      "Its function is to control the expulsion of feces, the residual semi-solid waste that remains after food digestion",
    ],

    anatomy: [
      "Location: The anus starts at the bottom of the rectum, the last portion of the colon (large intestine). The anorectal line separates the anus from the rectum.",
      "Size: It is a 2-inch long canal consisting of the pelvic floor muscles and the two anal sphincters (internal and external).",
      "Structure: The anus is surrounded by sphincter muscles that are important in allowing control of stool. The pelvic floor muscle creates an angle between the rectum and the anus that stops stool from coming out when it’s not supposed to. The internal sphincter is always tight, except when stool enters the rectum. This keeps us continents (prevents us from pooping involuntarily) when we are asleep or otherwise unaware of the presence of stool.",
    ],
  },

  heart: {
    slide: [{ name: "Heart", image: require("../../assets/image/Home/circulatorySystem/heart.png") }],

    intro: [
      `The heart is a fist-sized organ that pumps blood throughout your body. It's the primary organ of your circulatory system.`,
      `Your heart contains four main sections (chambers) made of muscle and powered by electrical impulses. Your brain and nervous system direct your heart’s function.`,
    ],
    func: [
      "Main function:",
      "Your heart’s main function is to move blood throughout your body. Your heart also:",
      "Controls the rhythm and  speed of your heart rate.",
      "Maintains your blood pressure.",
      "Work with other Organ:",
      "Your heart works with other body systems to control your heart rate and other body functions. The primary systems are:",
      "Nervous system: Your nervous system helps control your heart rate. It sends signals that tell your heart to beat slower during rest and faster during stress.",
      "Endocrine system: Your endocrine system sends out hormones. These hormones tell your blood vessels to constrict or relax, which affects your blood pressure. Hormones from your thyroid gland can also tell your heart to beat faster or slower.",
    ],

    anatomy: [
      "Location: in the front of your chest. Your heart is slightly on the left side of your body. It sits between your right and left lungs. The left lung is slightly smaller to make room for the heart in your left chest.",
      "Size: Generally, adult hearts are about the same size as two clenched fists, and children’s hearts are about the same size as one clenched fist.",
      "Weight: depending on your body size and sex, an adult’s heart weighs about 10 ounces",
      "Component: Walls, Chambers (rooms), Valves (doors), Blood vessels (plumbing), Electrical conduction system (electricity).",
    ],
  },

  bloodVessels: {
    slide: [{ name: "Blood Vessels", image: require("../../assets/image/Home/circulatorySystem/bloodVessels.png") }],

    intro: [
      `Blood vessels are channels that carry blood throughout your body. They form a closed loop, like a circuit, that begins and ends at your heart`,
      "Your body contains about 60,000 miles of blood vessels.",
    ],
    func: [
      "Your blood vessels’ main function is to deliver blood and carry waste products, CO2 away from your organs and tissues",
      "Each type of blood vessel serves a different function:",
      "Arteries: carry oxygen-rich blood from your heart to your body. At any given time, only about 10% to 15% of your body’s blood is in your arteries.",
      "Arterioles: Arteries branch into smaller vessels called arterioles. Both arteries and arterioles are very flexible. They get bigger or smaller to help maintain your body’s blood pressure.",
      "Capillaries: Capillaries are where tissues exchanged CO2 and waste for oxygen and nutrients ",
      "Venules: Venules receive blood from capillaries",
      "Veins: Veins carry large volumes of deoxygenated blood back to your heart. About 75% of your blood is in your veins",
    ],

    anatomy: [
      "Location: There are blood vessels throughout your body.",
      "Size; Some, like the aorta, have a wide diameter. For example, a normal aorta in the abdomen is about 2 centimeters wide. Others, such as capillaries, are extremely small, ranging from 2 to 12 micrometers.",
      "Component: Three layers: Tunica intima, media, adventitia",
      "Types:",
      "Arteries: strong, muscular blood vessels",
      "Arterioles: Arteries branch into smaller vessels called arterioles.",
      "Capillaries: These tiny blood vessels have thin walls. Oxygen and nutrients from the blood can move through the walls",
      "Veins: Thin, less elastic walls help them handle high volumes and low pressure. Most veins have valves that open and close.",
      "Venules: Veins begin as tiny vessels called venules and get gradually larger as they near your heart.",
    ],
  },

  blood: {
    slide: [{ name: "Blood", image: require("../../assets/image/Home/circulatorySystem/blood.png") }],

    intro: [
      `Blood is a body fluid in the circulatory system of humans and other vertebrates that delivers necessary substances such as nutrients and oxygen to the cells, and transports metabolic waste products away from those same cells.`,
    ],
    func: [
      "Transporting oxygen and nutrients to the lungs and tissues (red blood cells)",
      "Forming blood clots to prevent excess blood loss (platelets)",
      "Carrying cells and antibodies that fight infection (white blood cells)",
      "Bringing waste products to the kidneys and liver, which filter and clean the blood",
      "Regulating body temperature",
    ],

    anatomy: [
      "Four main components: plasma, red blood cells, white blood cells, and platelets",
      "Blood is composed of 55% plasma and 45% “formed elements,” including red blood cells, white blood cells, and platelets.",
      "Because of these living cells suspended in the plasma, blood is considered a fluid connective tissue (not a fluid). It is the only fluid tissue in the body.",
    ],
  },
};
