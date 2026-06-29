"use client";

import { FormEvent, useMemo, useState } from "react";
import { contact } from "@/lib/projects";

const projectTypes = [
  "Music Video",
  "Commercial / Brand Film",
  "Campaign Rollout",
  "Fashion Visual",
  "Documentary",
  "Editing / Trailer / Reel",
  "Show Recap",
  "VFX / Post",
  "Other",
];

const timelines = ["ASAP", "1-2 weeks", "3-4 weeks", "1-2 months", "Flexible / planning ahead"];
const budgets = ["Under $2.5k", "$2.5k-$5k", "$5k-$10k", "$10k-$20k", "$20k+", "Not sure yet"];
const deliverableOptions = [
  "Full film",
  "Social cutdowns",
  "Teaser / trailer",
  "Edit only",
  "Production",
  "Post supervision",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  title: string;
  type: string;
  timeline: string;
  budget: string;
  location: string;
  deliverables: string[];
  references: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  title: "",
  type: projectTypes[0],
  timeline: timelines[2],
  budget: budgets[5],
  location: "",
  deliverables: [],
  references: "",
  notes: "",
};

export function ProjectInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Project inquiry${form.title ? `: ${form.title}` : ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Project title: ${form.title}`,
        `Project type: ${form.type}`,
        `Timeline: ${form.timeline}`,
        `Budget range: ${form.budget}`,
        `Shoot location: ${form.location}`,
        `Deliverables: ${form.deliverables.length ? form.deliverables.join(", ") : "Not selected yet"}`,
        "",
        "Reference links:",
        form.references,
        "",
        "What are we making?",
        form.notes,
      ].join("\n")
    );

    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleDeliverable = (deliverable: string) => {
    setForm((current) => ({
      ...current,
      deliverables: current.deliverables.includes(deliverable)
        ? current.deliverables.filter((item) => item !== deliverable)
        : [...current.deliverables, deliverable],
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.email.trim() && !form.phone.trim()) {
      alert("Drop either an email or phone number so Nathan can follow up.");
      return;
    }

    window.location.href = emailHref;
  };

  return (
    <form onSubmit={handleSubmit} className="grid min-w-0 gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
          your name
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="w-full border-b border-bone/16 bg-transparent px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
            placeholder="name"
            required
          />
        </label>
        <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
          email
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full border-b border-bone/16 bg-transparent px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
        phone
        <input
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full border-b border-bone/16 bg-transparent px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
          placeholder="phone number if that is easier"
        />
      </label>

      <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
        project title
          <input
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            className="w-full border-b border-bone/16 bg-transparent px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
            placeholder="artist, brand, campaign, or working title"
            required
          />
        </label>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
          project type
          <select
            value={form.type}
            onChange={(event) => updateField("type", event.target.value)}
            className="w-full border-b border-bone/16 bg-ink px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors focus:border-bone/60"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
          timeline
          <select
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className="w-full border-b border-bone/16 bg-ink px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors focus:border-bone/60"
          >
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
          budget range
          <select
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className="w-full border-b border-bone/16 bg-ink px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors focus:border-bone/60"
          >
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
        shoot location
        <input
          value={form.location}
          onChange={(event) => updateField("location", event.target.value)}
          className="w-full border-b border-bone/16 bg-transparent px-0 py-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
          placeholder="city, studio, venue, or tbd"
        />
      </label>

      <fieldset className="grid gap-2">
        <legend className="text-[11px] lowercase leading-4 text-bone/48">deliverables</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {deliverableOptions.map((deliverable) => (
            <label
              key={deliverable}
              className="flex cursor-pointer items-center justify-between gap-3 border-b border-bone/12 py-2 text-[13px] lowercase leading-5 text-bone/70 transition-colors has-[:checked]:text-bone"
            >
              {deliverable}
              <input
                type="checkbox"
                checked={form.deliverables.includes(deliverable)}
                onChange={() => toggleDeliverable(deliverable)}
                className="h-3.5 w-3.5 accent-[#f4efe7]"
              />
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
        reference links
        <textarea
          value={form.references}
          onChange={(event) => updateField("references", event.target.value)}
          className="min-h-20 w-full resize-y border border-bone/12 bg-transparent p-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
          placeholder="songs, scripts, decks, moodboards, vimeo links, youtube links, or references"
        />
      </label>

      <label className="grid gap-1 text-[11px] lowercase leading-4 text-bone/48">
        what are we making?
        <textarea
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="min-h-28 w-full resize-y border border-bone/12 bg-transparent p-2 text-[13px] normal-case leading-5 text-bone outline-none transition-colors placeholder:text-bone/26 focus:border-bone/60"
          placeholder="tell me the goal, vibe, deadline pressure, must-haves, what is already locked, and what needs help."
          required
        />
      </label>

      <div className="flex flex-wrap gap-4 pt-1 text-[11px] lowercase leading-4">
        <button
          type="submit"
          className="text-bone/72 transition-colors hover:text-bone"
        >
          send project inquiry
        </button>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-bone/50 transition-colors hover:text-bone"
        >
          instagram
        </a>
      </div>
    </form>
  );
}
