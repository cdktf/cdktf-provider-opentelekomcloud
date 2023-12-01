# `vbsBackupPolicyV2` Submodule <a name="`vbsBackupPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VbsBackupPolicyV2 <a name="VbsBackupPolicyV2" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  retain_first_backup: str,
  start_time: str,
  frequency: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  rentention_day: typing.Union[int, float] = None,
  rentention_num: typing.Union[int, float] = None,
  resources: typing.List[str] = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]] = None,
  timeouts: VbsBackupPolicyV2Timeouts = None,
  week_frequency: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.retainFirstBackup">retain_first_backup</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionDay">rentention_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionNum">rentention_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.weekFrequency">week_frequency</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}.

---

##### `retain_first_backup`<sup>Required</sup> <a name="retain_first_backup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.retainFirstBackup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.startTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.frequency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}.

---

##### `rentention_day`<sup>Optional</sup> <a name="rentention_day" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}.

---

##### `rentention_num`<sup>Optional</sup> <a name="rentention_num" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionNum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.resources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#tags VbsBackupPolicyV2#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#timeouts VbsBackupPolicyV2#timeouts}

---

##### `week_frequency`<sup>Optional</sup> <a name="week_frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.weekFrequency"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay">reset_rentention_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum">reset_rentention_num</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency">reset_week_frequency</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}.

---

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rentention_day` <a name="reset_rentention_day" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay"></a>

```python
def reset_rentention_day() -> None
```

##### `reset_rentention_num` <a name="reset_rentention_num" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum"></a>

```python
def reset_rentention_num() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_week_frequency` <a name="reset_week_frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency"></a>

```python
def reset_week_frequency() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VbsBackupPolicyV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VbsBackupPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VbsBackupPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount">policy_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput">frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput">rentention_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput">rentention_num_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput">retain_first_backup_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput">week_frequency_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay">rentention_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum">rentention_num</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup">retain_first_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency">week_frequency</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_resource_count`<sup>Required</sup> <a name="policy_resource_count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount"></a>

```python
policy_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags"></a>

```python
tags: VbsBackupPolicyV2TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts"></a>

```python
timeouts: VbsBackupPolicyV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a>

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput"></a>

```python
frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rentention_day_input`<sup>Optional</sup> <a name="rentention_day_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput"></a>

```python
rentention_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rentention_num_input`<sup>Optional</sup> <a name="rentention_num_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput"></a>

```python
rentention_num_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retain_first_backup_input`<sup>Optional</sup> <a name="retain_first_backup_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput"></a>

```python
retain_first_backup_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VbsBackupPolicyV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>]

---

##### `week_frequency_input`<sup>Optional</sup> <a name="week_frequency_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput"></a>

```python
week_frequency_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency"></a>

```python
frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rentention_day`<sup>Required</sup> <a name="rentention_day" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay"></a>

```python
rentention_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rentention_num`<sup>Required</sup> <a name="rentention_num" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum"></a>

```python
rentention_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `retain_first_backup`<sup>Required</sup> <a name="retain_first_backup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup"></a>

```python
retain_first_backup: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `week_frequency`<sup>Required</sup> <a name="week_frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency"></a>

```python
week_frequency: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VbsBackupPolicyV2Config <a name="VbsBackupPolicyV2Config" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  retain_first_backup: str,
  start_time: str,
  frequency: typing.Union[int, float] = None,
  id: str = None,
  region: str = None,
  rentention_day: typing.Union[int, float] = None,
  rentention_num: typing.Union[int, float] = None,
  resources: typing.List[str] = None,
  status: str = None,
  tags: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]] = None,
  timeouts: VbsBackupPolicyV2Timeouts = None,
  week_frequency: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup">retain_first_backup</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency">frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay">rentention_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum">rentention_num</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency">week_frequency</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}.

---

##### `retain_first_backup`<sup>Required</sup> <a name="retain_first_backup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup"></a>

```python
retain_first_backup: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}.

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency"></a>

```python
frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}.

---

##### `rentention_day`<sup>Optional</sup> <a name="rentention_day" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay"></a>

```python
rentention_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}.

---

##### `rentention_num`<sup>Optional</sup> <a name="rentention_num" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum"></a>

```python
rentention_num: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#tags VbsBackupPolicyV2#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts"></a>

```python
timeouts: VbsBackupPolicyV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#timeouts VbsBackupPolicyV2#timeouts}

---

##### `week_frequency`<sup>Optional</sup> <a name="week_frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency"></a>

```python
week_frequency: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}.

---

### VbsBackupPolicyV2Tags <a name="VbsBackupPolicyV2Tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2Tags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}.

---

### VbsBackupPolicyV2Timeouts <a name="VbsBackupPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VbsBackupPolicyV2TagsList <a name="VbsBackupPolicyV2TagsList" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VbsBackupPolicyV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VbsBackupPolicyV2Tags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]]

---


### VbsBackupPolicyV2TagsOutputReference <a name="VbsBackupPolicyV2TagsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VbsBackupPolicyV2Tags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>]

---


### VbsBackupPolicyV2TimeoutsOutputReference <a name="VbsBackupPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import vbs_backup_policy_v2

vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VbsBackupPolicyV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>]

---



