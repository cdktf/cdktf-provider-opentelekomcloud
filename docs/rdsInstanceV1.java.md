# `opentelekomcloud_rds_instance_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_rds_instance_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1).

# `rdsInstanceV1` Submodule <a name="`rdsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsInstanceV1 <a name="RdsInstanceV1" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1 opentelekomcloud_rds_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1;

RdsInstanceV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityzone(java.lang.String)
    .datastore(RdsInstanceV1Datastore)
    .dbrtpd(java.lang.String)
    .flavorref(java.lang.String)
    .nics(RdsInstanceV1Nics)
    .securitygroup(RdsInstanceV1Securitygroup)
    .volume(RdsInstanceV1Volume)
    .vpc(java.lang.String)
//  .backupstrategy(RdsInstanceV1Backupstrategy)
//  .dbport(java.lang.String)
//  .ha(RdsInstanceV1Ha)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tag(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsInstanceV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.availabilityzone">availabilityzone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dbrtpd">dbrtpd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.flavorref">flavorref</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.nics">nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.securitygroup">securitygroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | securitygroup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.vpc">vpc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.backupstrategy">backupstrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | backupstrategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dbport">dbport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.ha">ha</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | ha block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#name RdsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#region RdsInstanceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityzone`<sup>Required</sup> <a name="availabilityzone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.availabilityzone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}.

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.datastore"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#datastore RdsInstanceV1#datastore}

---

##### `dbrtpd`<sup>Required</sup> <a name="dbrtpd" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dbrtpd"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}.

---

##### `flavorref`<sup>Required</sup> <a name="flavorref" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.flavorref"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}.

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.nics"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#nics RdsInstanceV1#nics}

---

##### `securitygroup`<sup>Required</sup> <a name="securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.securitygroup"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

securitygroup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#securitygroup RdsInstanceV1#securitygroup}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.volume"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#volume RdsInstanceV1#volume}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.vpc"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}.

---

##### `backupstrategy`<sup>Optional</sup> <a name="backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.backupstrategy"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

backupstrategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#backupstrategy RdsInstanceV1#backupstrategy}

---

##### `dbport`<sup>Optional</sup> <a name="dbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.dbport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}.

---

##### `ha`<sup>Optional</sup> <a name="ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.ha"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

ha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#ha RdsInstanceV1#ha}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#name RdsInstanceV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#region RdsInstanceV1#region}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.tag"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#timeouts RdsInstanceV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy">putBackupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore">putDatastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa">putHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics">putNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup">putSecuritygroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetBackupstrategy">resetBackupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetDbport">resetDbport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetHa">resetHa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBackupstrategy` <a name="putBackupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy"></a>

```java
public void putBackupstrategy(RdsInstanceV1Backupstrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putBackupstrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---

##### `putDatastore` <a name="putDatastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore"></a>

```java
public void putDatastore(RdsInstanceV1Datastore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---

##### `putHa` <a name="putHa" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa"></a>

```java
public void putHa(RdsInstanceV1Ha value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putHa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---

##### `putNics` <a name="putNics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics"></a>

```java
public void putNics(RdsInstanceV1Nics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putNics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---

##### `putSecuritygroup` <a name="putSecuritygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup"></a>

```java
public void putSecuritygroup(RdsInstanceV1Securitygroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putSecuritygroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts"></a>

```java
public void putTimeouts(RdsInstanceV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume"></a>

```java
public void putVolume(RdsInstanceV1Volume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---

##### `resetBackupstrategy` <a name="resetBackupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetBackupstrategy"></a>

```java
public void resetBackupstrategy()
```

##### `resetDbport` <a name="resetDbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetDbport"></a>

```java
public void resetDbport()
```

##### `resetHa` <a name="resetHa" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetHa"></a>

```java
public void resetHa()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTag"></a>

```java
public void resetTag()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1;

RdsInstanceV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1;

RdsInstanceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1;

RdsInstanceV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategy">backupstrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference">RdsInstanceV1BackupstrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference">RdsInstanceV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.ha">ha</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference">RdsInstanceV1HaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nics">nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference">RdsInstanceV1NicsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroup">securitygroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference">RdsInstanceV1SecuritygroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference">RdsInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference">RdsInstanceV1VolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzoneInput">availabilityzoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategyInput">backupstrategyInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastoreInput">datastoreInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbportInput">dbportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpdInput">dbrtpdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorrefInput">flavorrefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.haInput">haInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nicsInput">nicsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroupInput">securitygroupInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tagInput">tagInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpcInput">vpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzone">availabilityzone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbport">dbport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpd">dbrtpd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorref">flavorref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpc">vpc</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupstrategy`<sup>Required</sup> <a name="backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategy"></a>

```java
public RdsInstanceV1BackupstrategyOutputReference getBackupstrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference">RdsInstanceV1BackupstrategyOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastore"></a>

```java
public RdsInstanceV1DatastoreOutputReference getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference">RdsInstanceV1DatastoreOutputReference</a>

---

##### `ha`<sup>Required</sup> <a name="ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.ha"></a>

```java
public RdsInstanceV1HaOutputReference getHa();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference">RdsInstanceV1HaOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nics"></a>

```java
public RdsInstanceV1NicsOutputReference getNics();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference">RdsInstanceV1NicsOutputReference</a>

---

##### `securitygroup`<sup>Required</sup> <a name="securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroup"></a>

```java
public RdsInstanceV1SecuritygroupOutputReference getSecuritygroup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference">RdsInstanceV1SecuritygroupOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeouts"></a>

```java
public RdsInstanceV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference">RdsInstanceV1TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volume"></a>

```java
public RdsInstanceV1VolumeOutputReference getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference">RdsInstanceV1VolumeOutputReference</a>

---

##### `availabilityzoneInput`<sup>Optional</sup> <a name="availabilityzoneInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzoneInput"></a>

```java
public java.lang.String getAvailabilityzoneInput();
```

- *Type:* java.lang.String

---

##### `backupstrategyInput`<sup>Optional</sup> <a name="backupstrategyInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.backupstrategyInput"></a>

```java
public RdsInstanceV1Backupstrategy getBackupstrategyInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---

##### `datastoreInput`<sup>Optional</sup> <a name="datastoreInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.datastoreInput"></a>

```java
public RdsInstanceV1Datastore getDatastoreInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---

##### `dbportInput`<sup>Optional</sup> <a name="dbportInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbportInput"></a>

```java
public java.lang.String getDbportInput();
```

- *Type:* java.lang.String

---

##### `dbrtpdInput`<sup>Optional</sup> <a name="dbrtpdInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpdInput"></a>

```java
public java.lang.String getDbrtpdInput();
```

- *Type:* java.lang.String

---

##### `flavorrefInput`<sup>Optional</sup> <a name="flavorrefInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorrefInput"></a>

```java
public java.lang.String getFlavorrefInput();
```

- *Type:* java.lang.String

---

##### `haInput`<sup>Optional</sup> <a name="haInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.haInput"></a>

```java
public RdsInstanceV1Ha getHaInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nicsInput`<sup>Optional</sup> <a name="nicsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.nicsInput"></a>

```java
public RdsInstanceV1Nics getNicsInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securitygroupInput`<sup>Optional</sup> <a name="securitygroupInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.securitygroupInput"></a>

```java
public RdsInstanceV1Securitygroup getSecuritygroupInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tagInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.volumeInput"></a>

```java
public RdsInstanceV1Volume getVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpcInput"></a>

```java
public java.lang.String getVpcInput();
```

- *Type:* java.lang.String

---

##### `availabilityzone`<sup>Required</sup> <a name="availabilityzone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.availabilityzone"></a>

```java
public java.lang.String getAvailabilityzone();
```

- *Type:* java.lang.String

---

##### `dbport`<sup>Required</sup> <a name="dbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbport"></a>

```java
public java.lang.String getDbport();
```

- *Type:* java.lang.String

---

##### `dbrtpd`<sup>Required</sup> <a name="dbrtpd" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.dbrtpd"></a>

```java
public java.lang.String getDbrtpd();
```

- *Type:* java.lang.String

---

##### `flavorref`<sup>Required</sup> <a name="flavorref" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.flavorref"></a>

```java
public java.lang.String getFlavorref();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tag"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTag();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsInstanceV1Backupstrategy <a name="RdsInstanceV1Backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Backupstrategy;

RdsInstanceV1Backupstrategy.builder()
//  .keepdays(java.lang.Number)
//  .starttime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.keepdays">keepdays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#keepdays RdsInstanceV1#keepdays}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.starttime">starttime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#starttime RdsInstanceV1#starttime}. |

---

##### `keepdays`<sup>Optional</sup> <a name="keepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.keepdays"></a>

```java
public java.lang.Number getKeepdays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#keepdays RdsInstanceV1#keepdays}.

---

##### `starttime`<sup>Optional</sup> <a name="starttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy.property.starttime"></a>

```java
public java.lang.String getStarttime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#starttime RdsInstanceV1#starttime}.

---

### RdsInstanceV1Config <a name="RdsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Config;

RdsInstanceV1Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityzone(java.lang.String)
    .datastore(RdsInstanceV1Datastore)
    .dbrtpd(java.lang.String)
    .flavorref(java.lang.String)
    .nics(RdsInstanceV1Nics)
    .securitygroup(RdsInstanceV1Securitygroup)
    .volume(RdsInstanceV1Volume)
    .vpc(java.lang.String)
//  .backupstrategy(RdsInstanceV1Backupstrategy)
//  .dbport(java.lang.String)
//  .ha(RdsInstanceV1Ha)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tag(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsInstanceV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.availabilityzone">availabilityzone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.datastore">datastore</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbrtpd">dbrtpd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.flavorref">flavorref</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.nics">nics</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | nics block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.securitygroup">securitygroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | securitygroup block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.vpc">vpc</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.backupstrategy">backupstrategy</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | backupstrategy block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbport">dbport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.ha">ha</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | ha block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#name RdsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#region RdsInstanceV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.tag">tag</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityzone`<sup>Required</sup> <a name="availabilityzone" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.availabilityzone"></a>

```java
public java.lang.String getAvailabilityzone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#availabilityzone RdsInstanceV1#availabilityzone}.

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.datastore"></a>

```java
public RdsInstanceV1Datastore getDatastore();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#datastore RdsInstanceV1#datastore}

---

##### `dbrtpd`<sup>Required</sup> <a name="dbrtpd" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbrtpd"></a>

```java
public java.lang.String getDbrtpd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbrtpd RdsInstanceV1#dbrtpd}.

---

##### `flavorref`<sup>Required</sup> <a name="flavorref" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.flavorref"></a>

```java
public java.lang.String getFlavorref();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#flavorref RdsInstanceV1#flavorref}.

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.nics"></a>

```java
public RdsInstanceV1Nics getNics();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#nics RdsInstanceV1#nics}

---

##### `securitygroup`<sup>Required</sup> <a name="securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.securitygroup"></a>

```java
public RdsInstanceV1Securitygroup getSecuritygroup();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

securitygroup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#securitygroup RdsInstanceV1#securitygroup}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.volume"></a>

```java
public RdsInstanceV1Volume getVolume();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#volume RdsInstanceV1#volume}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.vpc"></a>

```java
public java.lang.String getVpc();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#vpc RdsInstanceV1#vpc}.

---

##### `backupstrategy`<sup>Optional</sup> <a name="backupstrategy" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.backupstrategy"></a>

```java
public RdsInstanceV1Backupstrategy getBackupstrategy();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

backupstrategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#backupstrategy RdsInstanceV1#backupstrategy}

---

##### `dbport`<sup>Optional</sup> <a name="dbport" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.dbport"></a>

```java
public java.lang.String getDbport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#dbport RdsInstanceV1#dbport}.

---

##### `ha`<sup>Optional</sup> <a name="ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.ha"></a>

```java
public RdsInstanceV1Ha getHa();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

ha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#ha RdsInstanceV1#ha}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#name RdsInstanceV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#region RdsInstanceV1#region}.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.tag"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTag();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#tag RdsInstanceV1#tag}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Config.property.timeouts"></a>

```java
public RdsInstanceV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#timeouts RdsInstanceV1#timeouts}

---

### RdsInstanceV1Datastore <a name="RdsInstanceV1Datastore" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Datastore;

RdsInstanceV1Datastore.builder()
    .type(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#type RdsInstanceV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#version RdsInstanceV1#version}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#type RdsInstanceV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#version RdsInstanceV1#version}.

---

### RdsInstanceV1Ha <a name="RdsInstanceV1Ha" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Ha;

RdsInstanceV1Ha.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .replicationmode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#enable RdsInstanceV1#enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.replicationmode">replicationmode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#replicationmode RdsInstanceV1#replicationmode}. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#enable RdsInstanceV1#enable}.

---

##### `replicationmode`<sup>Optional</sup> <a name="replicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha.property.replicationmode"></a>

```java
public java.lang.String getReplicationmode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#replicationmode RdsInstanceV1#replicationmode}.

---

### RdsInstanceV1Nics <a name="RdsInstanceV1Nics" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Nics;

RdsInstanceV1Nics.builder()
    .subnetid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.property.subnetid">subnetid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#subnetid RdsInstanceV1#subnetid}. |

---

##### `subnetid`<sup>Required</sup> <a name="subnetid" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics.property.subnetid"></a>

```java
public java.lang.String getSubnetid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#subnetid RdsInstanceV1#subnetid}.

---

### RdsInstanceV1Securitygroup <a name="RdsInstanceV1Securitygroup" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Securitygroup;

RdsInstanceV1Securitygroup.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#id RdsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RdsInstanceV1Timeouts <a name="RdsInstanceV1Timeouts" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Timeouts;

RdsInstanceV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#create RdsInstanceV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#delete RdsInstanceV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#create RdsInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#delete RdsInstanceV1#delete}.

---

### RdsInstanceV1Volume <a name="RdsInstanceV1Volume" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1Volume;

RdsInstanceV1Volume.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#size RdsInstanceV1#size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#type RdsInstanceV1#type}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#size RdsInstanceV1#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.6/docs/resources/rds_instance_v1#type RdsInstanceV1#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsInstanceV1BackupstrategyOutputReference <a name="RdsInstanceV1BackupstrategyOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1BackupstrategyOutputReference;

new RdsInstanceV1BackupstrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetKeepdays">resetKeepdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetStarttime">resetStarttime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeepdays` <a name="resetKeepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetKeepdays"></a>

```java
public void resetKeepdays()
```

##### `resetStarttime` <a name="resetStarttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.resetStarttime"></a>

```java
public void resetStarttime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdaysInput">keepdaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttimeInput">starttimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdays">keepdays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttime">starttime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keepdaysInput`<sup>Optional</sup> <a name="keepdaysInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdaysInput"></a>

```java
public java.lang.Number getKeepdaysInput();
```

- *Type:* java.lang.Number

---

##### `starttimeInput`<sup>Optional</sup> <a name="starttimeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttimeInput"></a>

```java
public java.lang.String getStarttimeInput();
```

- *Type:* java.lang.String

---

##### `keepdays`<sup>Required</sup> <a name="keepdays" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.keepdays"></a>

```java
public java.lang.Number getKeepdays();
```

- *Type:* java.lang.Number

---

##### `starttime`<sup>Required</sup> <a name="starttime" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.starttime"></a>

```java
public java.lang.String getStarttime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1BackupstrategyOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Backupstrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Backupstrategy">RdsInstanceV1Backupstrategy</a>

---


### RdsInstanceV1DatastoreOutputReference <a name="RdsInstanceV1DatastoreOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1DatastoreOutputReference;

new RdsInstanceV1DatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1DatastoreOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Datastore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Datastore">RdsInstanceV1Datastore</a>

---


### RdsInstanceV1HaOutputReference <a name="RdsInstanceV1HaOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1HaOutputReference;

new RdsInstanceV1HaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetReplicationmode">resetReplicationmode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetReplicationmode` <a name="resetReplicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.resetReplicationmode"></a>

```java
public void resetReplicationmode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmodeInput">replicationmodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmode">replicationmode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationmodeInput`<sup>Optional</sup> <a name="replicationmodeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmodeInput"></a>

```java
public java.lang.String getReplicationmodeInput();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replicationmode`<sup>Required</sup> <a name="replicationmode" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.replicationmode"></a>

```java
public java.lang.String getReplicationmode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1HaOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Ha getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Ha">RdsInstanceV1Ha</a>

---


### RdsInstanceV1NicsOutputReference <a name="RdsInstanceV1NicsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1NicsOutputReference;

new RdsInstanceV1NicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetidInput">subnetidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetid">subnetid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subnetidInput`<sup>Optional</sup> <a name="subnetidInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetidInput"></a>

```java
public java.lang.String getSubnetidInput();
```

- *Type:* java.lang.String

---

##### `subnetid`<sup>Required</sup> <a name="subnetid" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.subnetid"></a>

```java
public java.lang.String getSubnetid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1NicsOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Nics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Nics">RdsInstanceV1Nics</a>

---


### RdsInstanceV1SecuritygroupOutputReference <a name="RdsInstanceV1SecuritygroupOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1SecuritygroupOutputReference;

new RdsInstanceV1SecuritygroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1SecuritygroupOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Securitygroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Securitygroup">RdsInstanceV1Securitygroup</a>

---


### RdsInstanceV1TimeoutsOutputReference <a name="RdsInstanceV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1TimeoutsOutputReference;

new RdsInstanceV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Timeouts">RdsInstanceV1Timeouts</a>

---


### RdsInstanceV1VolumeOutputReference <a name="RdsInstanceV1VolumeOutputReference" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.rds_instance_v1.RdsInstanceV1VolumeOutputReference;

new RdsInstanceV1VolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1VolumeOutputReference.property.internalValue"></a>

```java
public RdsInstanceV1Volume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rdsInstanceV1.RdsInstanceV1Volume">RdsInstanceV1Volume</a>

---



