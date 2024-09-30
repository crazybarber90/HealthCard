import React, { SetStateAction, useEffect, useState } from 'react'
import HealthCardStyle, {
  TitleAndCloseBtn,
  InputWrapper,
  Select,
  InputField,
  Button,
  Text,
  DoubleInputWrapper,
  ErrorSpan,
  Devider,
} from './style'
import { countries, municipalities } from './data'
import { IoMdClose } from 'react-icons/io'
import { z } from 'zod'

// ZOD SCHEME FOR VALIDATION
const healthCardSchema = z.object({
  insuranceType: z.string().min(1, 'Ovo polje je obavezno.'),
  startDate: z.string().min(1, 'Ovo polje je obavezno.'),
  firstName: z.string().min(1, 'Ovo polje je obavezno.'),
  lastName: z.string().min(1, 'Ovo polje je obavezno.'),
  gender: z.string().min(1, 'Ovo polje je obavezno.'),
  jmbg: z
    .string()
    .length(13, 'Polje mora sadržati 13 brojeva')
    .refine((val) => /^\d+$/.test(val), 'JMBG mora sadržati samo brojeve.'),
  address: z.string().min(1, 'Ovo polje je obavezno.'),
  number: z.string().min(1, 'Ovo polje je obavezno.'),
  city: z.string().min(1, 'Ovo polje je obavezno.'),
  nationality: z.string().min(1, 'Ovo polje je obavezno.'),
  municipality: z.string().min(1, 'Ovo polje je obavezno.'),
})

const HealthCard = ({
  show,
  setShowPopup,
}: {
  show: boolean
  setShowPopup: React.Dispatch<SetStateAction<boolean>>
}) => {
  // INITIAL FORM STATE
  const [form, setForm] = useState({
    insuranceType: '',
    startDate: '',
    firstName: '',
    lastName: '',
    gender: '',
    jmbg: '',
    address: '',
    number: '',
    city: '',
    nationality: 'Serbia',
    municipality: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  //   RESET FORM VALIDATION AND ERRORS
  useEffect(() => {
    if (show) {
      setForm({
        insuranceType: '',
        startDate: '',
        firstName: '',
        lastName: '',
        gender: '',
        jmbg: '',
        address: '',
        number: '',
        city: '',
        nationality: 'Serbia',
        municipality: '',
      })
      setErrors({})
    }
  }, [show])

  //   FORM SUBMIT
  const handleSubmit = () => {
    // Perform validation using Zod
    const result = healthCardSchema.safeParse(form)
    if (!result.success) {
      const newErrors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0]] = err.message
        }
      })
      setErrors(newErrors)
    } else {
      setErrors({})
      // Submit the form or execute the next action
      console.log('Forma je validna i spremna za slanje!', form)
    }
  }

  return (
    <HealthCardStyle show={show}>
      <TitleAndCloseBtn>
        <p>Dodaj zdravstvenu knjižicu</p>
        {/* close card icon  */}
        <IoMdClose
          size={35}
          className="closeIcon"
          onClick={() => setShowPopup(true)}
        />
      </TitleAndCloseBtn>
      <InputWrapper>
        <Select
          name="insuranceType"
          value={form.insuranceType}
          onChange={handleChange}
        >
          <option value="" disabled>
            Izaberi tip:
          </option>
          <option value="nosilac">Nosilac osiguranja</option>
        </Select>
        {errors.insuranceType ? (
          <ErrorSpan>{errors.insuranceType}</ErrorSpan>
        ) : (
          <Devider />
        )}

        <InputField
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          placeholder="Datum početka osiguranja"
        />
        {errors.startDate ? (
          <ErrorSpan>{errors.startDate}</ErrorSpan>
        ) : (
          <Devider />
        )}

        <DoubleInputWrapper>
          <InputField
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Ime"
          />

          <InputField
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Prezime"
          />
        </DoubleInputWrapper>

        <Select name="gender" value={form.gender} onChange={handleChange}>
          <option value="" disabled>
            Pol
          </option>
          <option value="male">Muški</option>
          <option value="female">Ženski</option>
        </Select>
        {errors.gender ? <ErrorSpan>{errors.gender}</ErrorSpan> : <Devider />}

        <InputField
          type="text"
          name="jmbg"
          value={form.jmbg}
          onChange={handleChange}
          placeholder="JMBG"
        />
        {errors.jmbg ? <ErrorSpan>{errors.jmbg}</ErrorSpan> : <Devider />}

        <InputField
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Adresa prebivališta"
        />
        {errors.address ? <ErrorSpan>{errors.address}</ErrorSpan> : <Devider />}

        <InputField
          type="text"
          name="number"
          value={form.number}
          onChange={handleChange}
          placeholder="Broj"
        />
        {errors.number ? <ErrorSpan>{errors.number}</ErrorSpan> : <Devider />}

        <InputField
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Grad"
        />
        {errors.city ? <ErrorSpan>{errors.city}</ErrorSpan> : <Devider />}

        {/* COUNTRIES*/}
        <Select
          name="nationality"
          value={form.nationality}
          onChange={handleChange}
        >
          <option value="" disabled>
            Državljanstvo
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </Select>
        {errors.nationality ? (
          <ErrorSpan>{errors.nationality}</ErrorSpan>
        ) : (
          <Devider />
        )}

        {/* MUNICIPALITIES */}
        <Select
          name="municipality"
          value={form.municipality}
          onChange={handleChange}
        >
          <option value="" disabled>
            Izaberi opštinu
          </option>
          {municipalities.map((municipality, index) => (
            <option key={index} value={municipality}>
              {municipality}
            </option>
          ))}
        </Select>
        {errors.municipality ? (
          <ErrorSpan>{errors.municipality}</ErrorSpan>
        ) : (
          <Devider />
        )}

        <Text>
          Odabirom opcije 'Dodaj knjižicu' dobićeš mejl sa potrebnim obrascima i
          uputstvima. Promenom podataka o nosiocu osiguranja, menjaju se i
          podaci o vlasniku u samoj aplikaciji!
        </Text>
        <Button onClick={handleSubmit}>Dodaj knjižicu</Button>
      </InputWrapper>
    </HealthCardStyle>
  )
}

export default HealthCard
