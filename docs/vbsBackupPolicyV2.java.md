# `opentelekomcloud_vbs_backup_policy_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_vbs_backup_policy_v2`](https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2).

# `vbsBackupPolicyV2` Submodule <a name="`vbsBackupPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VbsBackupPolicyV2 <a name="VbsBackupPolicyV2" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2;

VbsBackupPolicyV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .retainFirstBackup(java.lang.String)
    .startTime(java.lang.String)
//  .frequency(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .rententionDay(java.lang.Number)
//  .rententionNum(java.lang.Number)
//  .resources(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<VbsBackupPolicyV2Tags>)
//  .timeouts(VbsBackupPolicyV2Timeouts)
//  .weekFrequency(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.retainFirstBackup">retainFirstBackup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionDay">rententionDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionNum">rententionNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.weekFrequency">weekFrequency</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}.

---

##### `retainFirstBackup`<sup>Required</sup> <a name="retainFirstBackup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.retainFirstBackup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.frequency"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}.

---

##### `rententionDay`<sup>Optional</sup> <a name="rententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionDay"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}.

---

##### `rententionNum`<sup>Optional</sup> <a name="rententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.rententionNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.resources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#tags VbsBackupPolicyV2#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#timeouts VbsBackupPolicyV2#timeouts}

---

##### `weekFrequency`<sup>Optional</sup> <a name="weekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.weekFrequency"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay">resetRententionDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum">resetRententionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency">resetWeekFrequency</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTags` <a name="putTags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<VbsBackupPolicyV2Tags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts"></a>

```java
public void putTimeouts(VbsBackupPolicyV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency"></a>

```java
public void resetFrequency()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRententionDay` <a name="resetRententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay"></a>

```java
public void resetRententionDay()
```

##### `resetRententionNum` <a name="resetRententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum"></a>

```java
public void resetRententionNum()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources"></a>

```java
public void resetResources()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWeekFrequency` <a name="resetWeekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency"></a>

```java
public void resetWeekFrequency()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2;

VbsBackupPolicyV2.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2;

VbsBackupPolicyV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2;

VbsBackupPolicyV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount">policyResourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput">rententionDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput">rententionNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput">retainFirstBackupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput">weekFrequencyInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay">rententionDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum">rententionNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup">retainFirstBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency">weekFrequency</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyResourceCount`<sup>Required</sup> <a name="policyResourceCount" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount"></a>

```java
public java.lang.Number getPolicyResourceCount();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags"></a>

```java
public VbsBackupPolicyV2TagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts"></a>

```java
public VbsBackupPolicyV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput"></a>

```java
public java.lang.Number getFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `rententionDayInput`<sup>Optional</sup> <a name="rententionDayInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput"></a>

```java
public java.lang.Number getRententionDayInput();
```

- *Type:* java.lang.Number

---

##### `rententionNumInput`<sup>Optional</sup> <a name="rententionNumInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput"></a>

```java
public java.lang.Number getRententionNumInput();
```

- *Type:* java.lang.Number

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retainFirstBackupInput`<sup>Optional</sup> <a name="retainFirstBackupInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput"></a>

```java
public java.lang.String getRetainFirstBackupInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `weekFrequencyInput`<sup>Optional</sup> <a name="weekFrequencyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput"></a>

```java
public java.util.List<java.lang.String> getWeekFrequencyInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `rententionDay`<sup>Required</sup> <a name="rententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay"></a>

```java
public java.lang.Number getRententionDay();
```

- *Type:* java.lang.Number

---

##### `rententionNum`<sup>Required</sup> <a name="rententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum"></a>

```java
public java.lang.Number getRententionNum();
```

- *Type:* java.lang.Number

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retainFirstBackup`<sup>Required</sup> <a name="retainFirstBackup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup"></a>

```java
public java.lang.String getRetainFirstBackup();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `weekFrequency`<sup>Required</sup> <a name="weekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency"></a>

```java
public java.util.List<java.lang.String> getWeekFrequency();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VbsBackupPolicyV2Config <a name="VbsBackupPolicyV2Config" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2Config;

VbsBackupPolicyV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .retainFirstBackup(java.lang.String)
    .startTime(java.lang.String)
//  .frequency(java.lang.Number)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .rententionDay(java.lang.Number)
//  .rententionNum(java.lang.Number)
//  .resources(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .tags(IResolvable)
//  .tags(java.util.List<VbsBackupPolicyV2Tags>)
//  .timeouts(VbsBackupPolicyV2Timeouts)
//  .weekFrequency(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup">retainFirstBackup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency">frequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay">rententionDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum">rententionNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>></code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency">weekFrequency</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}.

---

##### `retainFirstBackup`<sup>Required</sup> <a name="retainFirstBackup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup"></a>

```java
public java.lang.String getRetainFirstBackup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency"></a>

```java
public java.lang.Number getFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}.

---

##### `rententionDay`<sup>Optional</sup> <a name="rententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay"></a>

```java
public java.lang.Number getRententionDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}.

---

##### `rententionNum`<sup>Optional</sup> <a name="rententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum"></a>

```java
public java.lang.Number getRententionNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#tags VbsBackupPolicyV2#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts"></a>

```java
public VbsBackupPolicyV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#timeouts VbsBackupPolicyV2#timeouts}

---

##### `weekFrequency`<sup>Optional</sup> <a name="weekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency"></a>

```java
public java.util.List<java.lang.String> getWeekFrequency();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}.

---

### VbsBackupPolicyV2Tags <a name="VbsBackupPolicyV2Tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2Tags;

VbsBackupPolicyV2Tags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}.

---

### VbsBackupPolicyV2Timeouts <a name="VbsBackupPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2Timeouts;

VbsBackupPolicyV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VbsBackupPolicyV2TagsList <a name="VbsBackupPolicyV2TagsList" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2TagsList;

new VbsBackupPolicyV2TagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get"></a>

```java
public VbsBackupPolicyV2TagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>>

---


### VbsBackupPolicyV2TagsOutputReference <a name="VbsBackupPolicyV2TagsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2TagsOutputReference;

new VbsBackupPolicyV2TagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a> OR com.hashicorp.cdktf.IResolvable

---


### VbsBackupPolicyV2TimeoutsOutputReference <a name="VbsBackupPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.vbs_backup_policy_v2.VbsBackupPolicyV2TimeoutsOutputReference;

new VbsBackupPolicyV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---



