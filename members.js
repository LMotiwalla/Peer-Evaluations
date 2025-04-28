/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai,Motiwalla
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder,Pinchai
MIST.6010-088,Team_1,Trishna_Aich@student.uml.edu,Aich,Trishna
MIST.6010-088,Team_5,Pierson_Brandon@student.uml.edu,Brandon,Pierson
MIST.6010-088,Team_5,Tate_Brandon@student.uml.edu,Brandon,Tate
MIST.6010-088,Team_2,Justin_Cruickshank@student.uml.edu,Cruickshank,Justin
MIST.6010-088,Team_2,Quinn_Dala@student.uml.edu,Dala,Quinn
MIST.6010-088,Team_4,Macayla_DeAmelio@student.uml.edu,DeAmelio,Macayla
MIST.6010-088,Team_3,Kaitlin_Dickey@student.uml.edu,Dickey,Kaitlin
MIST.6010-088,Team_3,Naveed_Jabbar@student.uml.edu,Jabbar,Naveed
MIST.6010-088,Team_3,Aaron_Lecomte@student.uml.edu,Lecomte,Aaron
MIST.6010-088,Team_1,Andrew_Linnehan1@student.uml.edu,Linnehan,Andrew
MIST.6010-088,Team_2,James_McDonnell1@student.uml.edu,McDonnell,James
MIST.6010-088,Team_3,Donovan_McKee@student.uml.edu,McKee,Donovan
MIST.6010-088,Team_1,Rocco_Morello@student.uml.edu,Morello,Rocco
MIST.6010-088,Team_5,Paul_Neilan@student.uml.edu,Neilan,Paul
MIST.6010-088,Team_4,Anabelle_OKeefe@student.uml.edu,O'Keefe,Anabelle
MIST.6010-088,Team_3,Steven_Palmacci@student.uml.edu,Palmacci Jr,Steven
MIST.6010-088,Team_4,Kajal_Patel@student.uml.edu,Patel,Kajal
MIST.6010-088,Team_1,Chloe_Raesly@student.uml.edu,Raesly,Chloe
MIST.6010-088,Team_5,James_RobilottiIv@student.uml.edu,Robilotti Iv,Jack
MIST.6010-088,Team_4,Timothy_Rogers@student.uml.edu,Rogers,Timothy
MIST.6010-088,Team_4,Adam_Ross@student.uml.edu,Ross,Adam
MIST.6010-088,Team_2,Nicholas_Sasso1@student.uml.edu,Sasso,Nicholas
MIST.6010-088,Team_5,Ty_Seaton@student.uml.edu,Seaton,Ty
MIST.6010-088,Team_2,James_Stewart@student.uml.edu,Stewart,James
MIST.6010-088,Team_4,Lauren_Trahan@student.uml.edu,Trahan,Lauren
MIST.6010-088,Team_1,Marcela_Widmayer@student.uml.edu,Widmayer,Marcela`
