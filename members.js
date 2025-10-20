/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai,Motiwalla
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder,Pinchai
MIST.6010-081,Team 2,Susan_Allo@student.uml.edu,Allo, Susan
MIST.6010-081,Team 2,Laura_Arnold@student.uml.edu,Arnold, Laura
MIST.6010-081,Team 1,Terry_Badman@student.uml.edu,Badman, Terry
MIST.6010-081,Team 6,William_Baker1@student.uml.edu,Baker, William
MIST.6010-081,Team 1,Chad_Bass@student.uml.edu,Bass, Chad
MIST.6010-081,Team 6,Sydney_Battle@student.uml.edu,Battle, Sydney
MIST.6010-081,Team 5,Nidhi_Bodalwala@student.uml.edu,Bodalwala, Nidhi
MIST.6010-081,Team 2,Kira_Cameron@student.uml.edu,Cameron, Kira
MIST.6010-081,Team 1,Julia_Cotreau@student.uml.edu,Cotreau, Julia
MIST.6010-081,Team 5,Michael_Cronin2@student.uml.edu,Cronin, Michael
MIST.6010-081,Team 2,Emily_Day@student.uml.edu,Day, Emily
MIST.6010-081,Team 4,Richard_DeLoach@student.uml.edu,De Loach, Rich
MIST.6010-081,Team 3,Annalise_Difolco@student.uml.edu,DiFolco, Annalise
MIST.6010-081,Team 6,Michael_Douglas1@student.uml.edu,Douglas, Michael
MIST.6010-081,Team 3,Ainara_FernandezOlivera@student.uml.edu,Fernandez Olivera, Ainara
MIST.6010-081,Team 1,Trevor_Frazier@student.uml.edu,Frazier, Trevor
MIST.6010-081,Team 4,Jennifer_Goonan@student.uml.edu,Goonan, Jennifer
MIST.6010-081,Team 3,Mingli_Hou@student.uml.edu,Hou, Mingli
MIST.6010-081,Team 6,Yingyi_Huang@student.uml.edu,Huang, Yingyi
MIST.6010-081,Team 3,Logan_Huff@student.uml.edu,Huff, Logan
MIST.6010-081,Team 2,Tia_Julian@student.uml.edu,Julian, Tia
MIST.6010-081,Team 5,Victoria_Katze@student.uml.edu,Katze, Victoria
MIST.6010-081,Team 4,Jason_Keo@student.uml.edu,Keo, Jason
MIST.6010-081,Team 5,Nolan_Kimball@student.uml.edu,Kimball, Nolan
MIST.6010-081,Team 6,Joseph_Lace@student.uml.edu,Lace, Joseph
MIST.6010-081,Team 5,Joseph_Levesque@student.uml.edu,Levesque, Joey
MIST.6010-081,Team 5,Angelina_Milinazzo@student.uml.edu,Milinazzo, Angelina
MIST.6010-081,Team 4,Ghenry_Navarro@student.uml.edu,Navarro Jr., Ghenry
MIST.6010-081,Team 4,Joao_Pacheco@student.uml.edu,Pacheco, Joao
MIST.6010-081,Team 3,Chhunheng_Phay@student.uml.edu,Phay, Chhunheng
MIST.6010-081,Team 4,Djanisha_Philippe@student.uml.edu,Philippe, Djanisha
MIST.6010-081,Team 1,Thomas_Schweighardt@student.uml.edu,Schweighardt, Tj
MIST.6010-081,Team 1,Ubaraj_Subedi@student.uml.edu,Subedi, Ubaraj
MIST.6010-081,Team 5,Irina_Testarmata@student.uml.edu,Testarmata, Irina
MIST.6010-081,Team 6,Jonathancarlos_TophamGonzalez@student.uml.edu,Topham Gonzalez, Jonathan carlos
MIST.6010-081,Team 3,Kiara_Vasquez@student.uml.edu,Vasquez, Kiara`

