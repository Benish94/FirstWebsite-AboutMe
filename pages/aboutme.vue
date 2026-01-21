<!-- eslint-disable @stylistic/indent -->
<template>
  <div class="min-h-screen grid">
    <div>
      <div class="container mx-auto">
        <!-- Titelbild -->
        <div class="w-full grid justify-center-safe">
          <UTooltip text="aktuell - 04.2025">
            <UAvatar
              src="https://avatars.githubusercontent.com/u/209627433?s=400&u=1f2244a443870802885758570ca74a346c2c5392&v=4"
              alt="aktuell - .04.2025"
              :ui=" {
                root: 'size-60 mt-12 mb-12',
              }"
            />
          </UTooltip>
        </div>
        <!-- Hier kommen die Modals zum Bearbeiten der Infoboxes and name -->
        <!-- <InfoboxesModal /> -->
      </div>

      <!-- Eingabefelder für Änderung -->
      <!-- <div class="flex flex-row flex-grow justify-between gap-y-4 px-18 py-8">
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="name"
            :rows="12"
          />
        </div>
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="nick"
            :rows="12"
          />
        </div>
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="hob"
            :rows="12"
          />
        </div>
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="skills"
            :rows="12"
          />
        </div>
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="resid"
            :rows="12"
          />
        </div>
        <div class="flex flex-col w-lg mt-45 ml-18">
          <UTextarea
            v-model="moment"
            :rows="12"
          />
        </div>
      </div> -->

      <!-- Name & Linktree -->
      <div class="flex flex-col lg:flex-row justify-between items-start gap-4 px-6 lg:px-18 mt-5">
        <!-- Name und Online-Nickname -->
        <div class="flex flex-col">
          <h2 class="font-raleway shadow-sm font-bold text-5xl">
            {{ name }}
          </h2>
          <div class="font-raleway shadow-sm text-xs mt-1">
            aka {{ nick }}
          </div>
        </div>

        <!-- LinkTree für Socials -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:mt-0">
          <UButton
            icon="i-simple-icons:instagram"
            class="dark:md:hover:bg-sky-700"
            to="https://www.instagram.com/ben_seidel94/"
            size="xl"
            color="neutral"
            variant="outline"
            label="Instagram"
          />

          <UButton
            icon="i-simple-icons:facebook"
            class="dark:md:hover:bg-sky-700"
            to="https://www.facebook.com/profile.php?id=100085028911339"
            size="xl"
            color="neutral"
            variant="outline"
            label="Facebook"
          />

          <UButton
            icon="i-simple-icons:linkedin"
            class="dark:md:hover:bg-sky-700"
            to="https://www.linkedin.com/in/benjamin-seidel-356164321/"
            size="xl"
            color="neutral"
            variant="outline"
            label="LinkeIn"
          />

          <UButton
            icon="i-simple-icons:github"
            class="dark:md:hover:bg-sky-700"
            to="https://github.com/Benish94"
            size="xl"
            color="neutral"
            variant="outline"
            label="Github"
          />
        </div>
      </div>

      <!-- AboutMe Cards -->
      <div class="flex w-full flex-col justify-between gap-4 p-8">
        <div class="grid w-full gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Begrüßung und Beschreibung -->
          <UCard class="w-full">
            <template #header>
              Person
            </template>

            Name:
            <br />
            {{ name }}
            <br />
            <br />
            Age:
            <br />
            {{ ageFormatted }}
            <br />
            <br />
            Hobbys
            <br />
            {{ hob }}
            <br />
            <br />
          </UCard>

          <UCard class="w-full">
            <template #header>
              Skillset
            </template>

            <pre class="whitespace-pre-wrap font-sans font-normal leading-relaxed text-base"> {{ skills }} </pre>
          </UCard>

          <UCard class="w-full">
            <template #header>
              Residencial Area
            </template>

            <pre class="whitespace-pre-wrap font-sans leading-relaxed text-base"> {{ resid }} </pre>
          </UCard>

          <UCard class="w-full">
            <template #header>
              At the Moment
            </template>

            <pre class="whitespace-pre-wrap font-sans leading-relaxed text-base"> {{ moment }} </pre>
          </UCard>
        </div>

        <!-- Tiefergesetztes Motto -->
        <UCard
          class="mt-8 mb-8 max-w-fit ring italic"
          variant="outline"
        >
          <template #default>
            <pre class="whitespace-pre-wrap font-sans font-normal leading-relaxed text-base"> "{{ randommotto }}" </pre>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref(`Benjamin Seidel`);
const nick = ref(`Benishment`);

const ageFormatted = computed(() => {
  const birthdate: Date = new Date('1994-02-05');

  const now = new Date(); // aktuelles Datum gesamt
  let age = now.getFullYear() - birthdate.getFullYear(); // aktuelles Jahr minus Geburtsjahr
  const birthdayThisYear = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate()); // neues Datum Geburtstag für Abfrage in aktuellem Jahr

  // Abfrage ob aktuelles Datum kleiner als Geburtstag im aktuellen Jahr
  // Wenn "True" -> Alter -1
  if (now < birthdayThisYear) {
    age--;
  }

  // return age > 0 ? age: "Noch im Sack";                                //Ausgabe an Template ohne Suffix

  const day = birthdate.getDate();
  const month = birthdate.toLocaleString('en-US', { month: 'long' });
  const year = birthdate.getFullYear();

  const getOrdinalSuffix = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']; // Suffix Array
    const v = n % 100; // Value
    return s[(v - 20) % 10] || s[v] || s[0]; // Array Abfrage
  };

  return `${day}${getOrdinalSuffix(day)} ${month} ${year} (${age} y.o.)`; // Ausgabe mit Suffix (ALLES außerhalb der
  // geschwungenen Klammern wird als Cleartext angezeigt)
  // "$"-Symbol ist von Typescript, um die const zu übernehmen
});

const hob = ref(`Friends | Coding | Gaming`);

const skills = ref(
// eslint-disable-next-line @stylistic/indent
`Currently I am training to be an IT-Specalist in Development.

Training consists of the use of Frameworks and different language models such as Typescript, Python or HTML.

After the 2-Year periode, I have a final exam where my skills will be put to test and after passing also certificated.`,
);

const resid = ref(
// eslint-disable-next-line @stylistic/indent
`I am living in Germany. \nBavaria right between Regensburg and Nürnberg to be excat.

My place for learning and schooling as well as for practice is right in Weiden i.d.Opf..`,
);

const moment = ref(
// eslint-disable-next-line @stylistic/indent
`As part of a 2-Year Schooling in the BfZ-Weiden I will learn how to use Developement-Software such as VSCode and IntelliJ as well as get experiences in "all day" usage of such Tools.

For practical experience I have internships in companies like the Treager GmbH and such.

By the way: \nI coded this Website by hand in my first few Weeks in internship with no briefing beforehand 😊.`,
);

// Random Motto Set
const motto = [
  'Don\'t ask questions you don\'t want to hear the anwser to!',
  'Be stronger than your strongest excuse!',
  'Live your life, not one of others!',
  'Better risk than remorse!',
  'You dont need to be better than your enemy. Just be better than yourself!',
];
const randommotto = computed(() => {
  const v = Math.floor(Math.random() * motto.length);
  return motto[v];
});
</script>

<style scoped>

</style>
