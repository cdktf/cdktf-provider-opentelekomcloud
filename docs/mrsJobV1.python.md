# `opentelekomcloud_mrs_job_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_mrs_job_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1).

# `mrsJobV1` Submodule <a name="`mrsJobV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsJobV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsJobV1 <a name="MrsJobV1" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1 opentelekomcloud_mrs_job_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  jar_path: str,
  job_name: str,
  job_type: typing.Union[int, float],
  arguments: str = None,
  hive_script_path: str = None,
  id: str = None,
  input: str = None,
  is_protected: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  job_log: str = None,
  output: str = None,
  region: str = None,
  timeouts: MrsJobV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jarPath">jar_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobType">job_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.arguments">arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.hiveScriptPath">hive_script_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#id MrsJobV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#input MrsJobV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.isProtected">is_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobLog">job_log</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.output">output</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#output MrsJobV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#region MrsJobV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}.

---

##### `jar_path`<sup>Required</sup> <a name="jar_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jarPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}.

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.arguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}.

---

##### `hive_script_path`<sup>Optional</sup> <a name="hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.hiveScriptPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#id MrsJobV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#input MrsJobV1#input}.

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.isProtected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}.

---

##### `job_log`<sup>Optional</sup> <a name="job_log" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.jobLog"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.output"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#output MrsJobV1#output}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#region MrsJobV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#timeouts MrsJobV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetHiveScriptPath">reset_hive_script_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsProtected">reset_is_protected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetJobLog">reset_job_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOutput">reset_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#create MrsJobV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#delete MrsJobV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#update MrsJobV1#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_hive_script_path` <a name="reset_hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetHiveScriptPath"></a>

```python
def reset_hive_script_path() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_is_protected` <a name="reset_is_protected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsProtected"></a>

```python
def reset_is_protected() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_job_log` <a name="reset_job_log" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetJobLog"></a>

```python
def reset_job_log() -> None
```

##### `reset_output` <a name="reset_output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetOutput"></a>

```python
def reset_output() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobState">job_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference">MrsJobV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.argumentsInput">arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPathInput">hive_script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtectedInput">is_protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPathInput">jar_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLogInput">job_log_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobNameInput">job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobTypeInput">job_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.outputInput">output_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPath">hive_script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtected">is_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPath">jar_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLog">job_log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobName">job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobType">job_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.output">output</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_state`<sup>Required</sup> <a name="job_state" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobState"></a>

```python
job_state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeouts"></a>

```python
timeouts: MrsJobV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference">MrsJobV1TimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.argumentsInput"></a>

```python
arguments_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `hive_script_path_input`<sup>Optional</sup> <a name="hive_script_path_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPathInput"></a>

```python
hive_script_path_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `is_protected_input`<sup>Optional</sup> <a name="is_protected_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtectedInput"></a>

```python
is_protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_path_input`<sup>Optional</sup> <a name="jar_path_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPathInput"></a>

```python
jar_path_input: str
```

- *Type:* str

---

##### `job_log_input`<sup>Optional</sup> <a name="job_log_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLogInput"></a>

```python
job_log_input: str
```

- *Type:* str

---

##### `job_name_input`<sup>Optional</sup> <a name="job_name_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobNameInput"></a>

```python
job_name_input: str
```

- *Type:* str

---

##### `job_type_input`<sup>Optional</sup> <a name="job_type_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobTypeInput"></a>

```python
job_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_input`<sup>Optional</sup> <a name="output_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.outputInput"></a>

```python
output_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MrsJobV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `hive_script_path`<sup>Required</sup> <a name="hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.hiveScriptPath"></a>

```python
hive_script_path: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isProtected"></a>

```python
is_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jar_path`<sup>Required</sup> <a name="jar_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jarPath"></a>

```python
jar_path: str
```

- *Type:* str

---

##### `job_log`<sup>Required</sup> <a name="job_log" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobLog"></a>

```python
job_log: str
```

- *Type:* str

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.jobType"></a>

```python
job_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.output"></a>

```python
output: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MrsJobV1Config <a name="MrsJobV1Config" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  jar_path: str,
  job_name: str,
  job_type: typing.Union[int, float],
  arguments: str = None,
  hive_script_path: str = None,
  id: str = None,
  input: str = None,
  is_protected: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  job_log: str = None,
  output: str = None,
  region: str = None,
  timeouts: MrsJobV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jarPath">jar_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobName">job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobType">job_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.arguments">arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.hiveScriptPath">hive_script_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#id MrsJobV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#input MrsJobV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isProtected">is_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobLog">job_log</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.output">output</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#output MrsJobV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#region MrsJobV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#cluster_id MrsJobV1#cluster_id}.

---

##### `jar_path`<sup>Required</sup> <a name="jar_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jarPath"></a>

```python
jar_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#jar_path MrsJobV1#jar_path}.

---

##### `job_name`<sup>Required</sup> <a name="job_name" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobName"></a>

```python
job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_name MrsJobV1#job_name}.

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobType"></a>

```python
job_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_type MrsJobV1#job_type}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#arguments MrsJobV1#arguments}.

---

##### `hive_script_path`<sup>Optional</sup> <a name="hive_script_path" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.hiveScriptPath"></a>

```python
hive_script_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#hive_script_path MrsJobV1#hive_script_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#id MrsJobV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#input MrsJobV1#input}.

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isProtected"></a>

```python
is_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_protected MrsJobV1#is_protected}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#is_public MrsJobV1#is_public}.

---

##### `job_log`<sup>Optional</sup> <a name="job_log" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.jobLog"></a>

```python
job_log: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#job_log MrsJobV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.output"></a>

```python
output: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#output MrsJobV1#output}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#region MrsJobV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Config.property.timeouts"></a>

```python
timeouts: MrsJobV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#timeouts MrsJobV1#timeouts}

---

### MrsJobV1Timeouts <a name="MrsJobV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#create MrsJobV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#delete MrsJobV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#update MrsJobV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#create MrsJobV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#delete MrsJobV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/resources/mrs_job_v1#update MrsJobV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsJobV1TimeoutsOutputReference <a name="MrsJobV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import mrs_job_v1

mrsJobV1.MrsJobV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MrsJobV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.mrsJobV1.MrsJobV1Timeouts">MrsJobV1Timeouts</a>]

---



