# `drsTaskV3` Submodule <a name="`drsTaskV3` Submodule" id="@cdktf/provider-opentelekomcloud.drsTaskV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsTaskV3 <a name="DrsTaskV3" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3 opentelekomcloud_drs_task_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3;

DrsTaskV3.Builder.create(Construct scope, java.lang.String id)
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
    .destinationDb(DrsTaskV3DestinationDb)
    .direction(java.lang.String)
    .engineType(java.lang.String)
    .name(java.lang.String)
    .sourceDb(DrsTaskV3SourceDb)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .destinationDbReadonly(java.lang.Boolean)
//  .destinationDbReadonly(IResolvable)
//  .expiredDays(java.lang.Number)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .limitSpeed(IResolvable)
//  .limitSpeed(java.util.List<DrsTaskV3LimitSpeed>)
//  .migrateDefiner(java.lang.Boolean)
//  .migrateDefiner(IResolvable)
//  .migrationType(java.lang.String)
//  .multiWrite(java.lang.Boolean)
//  .multiWrite(IResolvable)
//  .netType(java.lang.String)
//  .nodeNum(java.lang.Number)
//  .startTime(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DrsTaskV3Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDb">destinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.sourceDb">sourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDbReadonly">destinationDbReadonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.expiredDays">expiredDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.limitSpeed">limitSpeed</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>></code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrateDefiner">migrateDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrationType">migrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.multiWrite">multiWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.netType">netType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.nodeNum">nodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationDb`<sup>Required</sup> <a name="destinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDb"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.engineType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `sourceDb`<sup>Required</sup> <a name="sourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.sourceDb"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `destinationDbReadonly`<sup>Optional</sup> <a name="destinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.destinationDbReadonly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `expiredDays`<sup>Optional</sup> <a name="expiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.expiredDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitSpeed`<sup>Optional</sup> <a name="limitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.limitSpeed"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>>

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `migrateDefiner`<sup>Optional</sup> <a name="migrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrateDefiner"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `migrationType`<sup>Optional</sup> <a name="migrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.migrationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `multiWrite`<sup>Optional</sup> <a name="multiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.multiWrite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `netType`<sup>Optional</sup> <a name="netType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.netType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `nodeNum`<sup>Optional</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.nodeNum"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb">putDestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed">putLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb">putSourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly">resetDestinationDbReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays">resetExpiredDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed">resetLimitSpeed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner">resetMigrateDefiner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType">resetMigrationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite">resetMultiWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType">resetNetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum">resetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationDb` <a name="putDestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb"></a>

```java
public void putDestinationDb(DrsTaskV3DestinationDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putDestinationDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `putLimitSpeed` <a name="putLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed"></a>

```java
public void putLimitSpeed(IResolvable OR java.util.List<DrsTaskV3LimitSpeed> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putLimitSpeed.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>>

---

##### `putSourceDb` <a name="putSourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb"></a>

```java
public void putSourceDb(DrsTaskV3SourceDb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putSourceDb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts"></a>

```java
public void putTimeouts(DrsTaskV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationDbReadonly` <a name="resetDestinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetDestinationDbReadonly"></a>

```java
public void resetDestinationDbReadonly()
```

##### `resetExpiredDays` <a name="resetExpiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetExpiredDays"></a>

```java
public void resetExpiredDays()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetId"></a>

```java
public void resetId()
```

##### `resetLimitSpeed` <a name="resetLimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetLimitSpeed"></a>

```java
public void resetLimitSpeed()
```

##### `resetMigrateDefiner` <a name="resetMigrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrateDefiner"></a>

```java
public void resetMigrateDefiner()
```

##### `resetMigrationType` <a name="resetMigrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMigrationType"></a>

```java
public void resetMigrationType()
```

##### `resetMultiWrite` <a name="resetMultiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetMultiWrite"></a>

```java
public void resetMultiWrite()
```

##### `resetNetType` <a name="resetNetType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNetType"></a>

```java
public void resetNetType()
```

##### `resetNodeNum` <a name="resetNodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetNodeNum"></a>

```java
public void resetNodeNum()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3;

DrsTaskV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3;

DrsTaskV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3;

DrsTaskV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3;

DrsTaskV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DrsTaskV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DrsTaskV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DrsTaskV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DrsTaskV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DrsTaskV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb">destinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed">limitSpeed</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb">sourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput">destinationDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput">destinationDbReadonlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput">expiredDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput">limitSpeedInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput">migrateDefinerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput">migrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput">multiWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput">netTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput">nodeNumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput">sourceDbInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly">destinationDbReadonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays">expiredDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner">migrateDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite">multiWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType">netType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum">nodeNum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `destinationDb`<sup>Required</sup> <a name="destinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDb"></a>

```java
public DrsTaskV3DestinationDbOutputReference getDestinationDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference">DrsTaskV3DestinationDbOutputReference</a>

---

##### `limitSpeed`<sup>Required</sup> <a name="limitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeed"></a>

```java
public DrsTaskV3LimitSpeedList getLimitSpeed();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList">DrsTaskV3LimitSpeedList</a>

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceDb`<sup>Required</sup> <a name="sourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDb"></a>

```java
public DrsTaskV3SourceDbOutputReference getSourceDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference">DrsTaskV3SourceDbOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeouts"></a>

```java
public DrsTaskV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference">DrsTaskV3TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationDbInput`<sup>Optional</sup> <a name="destinationDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbInput"></a>

```java
public DrsTaskV3DestinationDb getDestinationDbInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---

##### `destinationDbReadonlyInput`<sup>Optional</sup> <a name="destinationDbReadonlyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonlyInput"></a>

```java
public java.lang.Object getDestinationDbReadonlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `expiredDaysInput`<sup>Optional</sup> <a name="expiredDaysInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDaysInput"></a>

```java
public java.lang.Number getExpiredDaysInput();
```

- *Type:* java.lang.Number

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitSpeedInput`<sup>Optional</sup> <a name="limitSpeedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.limitSpeedInput"></a>

```java
public java.lang.Object getLimitSpeedInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>>

---

##### `migrateDefinerInput`<sup>Optional</sup> <a name="migrateDefinerInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefinerInput"></a>

```java
public java.lang.Object getMigrateDefinerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `migrationTypeInput`<sup>Optional</sup> <a name="migrationTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationTypeInput"></a>

```java
public java.lang.String getMigrationTypeInput();
```

- *Type:* java.lang.String

---

##### `multiWriteInput`<sup>Optional</sup> <a name="multiWriteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWriteInput"></a>

```java
public java.lang.Object getMultiWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `netTypeInput`<sup>Optional</sup> <a name="netTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netTypeInput"></a>

```java
public java.lang.String getNetTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeNumInput`<sup>Optional</sup> <a name="nodeNumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNumInput"></a>

```java
public java.lang.Number getNodeNumInput();
```

- *Type:* java.lang.Number

---

##### `sourceDbInput`<sup>Optional</sup> <a name="sourceDbInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.sourceDbInput"></a>

```java
public DrsTaskV3SourceDb getSourceDbInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationDbReadonly`<sup>Required</sup> <a name="destinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.destinationDbReadonly"></a>

```java
public java.lang.Object getDestinationDbReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `expiredDays`<sup>Required</sup> <a name="expiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.expiredDays"></a>

```java
public java.lang.Number getExpiredDays();
```

- *Type:* java.lang.Number

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrateDefiner`<sup>Required</sup> <a name="migrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrateDefiner"></a>

```java
public java.lang.Object getMigrateDefiner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

---

##### `multiWrite`<sup>Required</sup> <a name="multiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.multiWrite"></a>

```java
public java.lang.Object getMultiWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `netType`<sup>Required</sup> <a name="netType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.netType"></a>

```java
public java.lang.String getNetType();
```

- *Type:* java.lang.String

---

##### `nodeNum`<sup>Required</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.nodeNum"></a>

```java
public java.lang.Number getNodeNum();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DrsTaskV3Config <a name="DrsTaskV3Config" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3Config;

DrsTaskV3Config.builder()
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
    .destinationDb(DrsTaskV3DestinationDb)
    .direction(java.lang.String)
    .engineType(java.lang.String)
    .name(java.lang.String)
    .sourceDb(DrsTaskV3SourceDb)
    .type(java.lang.String)
//  .description(java.lang.String)
//  .destinationDbReadonly(java.lang.Boolean)
//  .destinationDbReadonly(IResolvable)
//  .expiredDays(java.lang.Number)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .limitSpeed(IResolvable)
//  .limitSpeed(java.util.List<DrsTaskV3LimitSpeed>)
//  .migrateDefiner(java.lang.Boolean)
//  .migrateDefiner(IResolvable)
//  .migrationType(java.lang.String)
//  .multiWrite(java.lang.Boolean)
//  .multiWrite(IResolvable)
//  .netType(java.lang.String)
//  .nodeNum(java.lang.Number)
//  .startTime(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DrsTaskV3Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb">destinationDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | destination_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#direction DrsTaskV3#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb">sourceDb</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | source_db block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#type DrsTaskV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#description DrsTaskV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly">destinationDbReadonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays">expiredDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#id DrsTaskV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed">limitSpeed</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>></code> | limit_speed block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner">migrateDefiner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite">multiWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType">netType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum">nodeNum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#tags DrsTaskV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destinationDb`<sup>Required</sup> <a name="destinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDb"></a>

```java
public DrsTaskV3DestinationDb getDestinationDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

destination_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db DrsTaskV3#destination_db}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#direction DrsTaskV3#direction}.

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `sourceDb`<sup>Required</sup> <a name="sourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.sourceDb"></a>

```java
public DrsTaskV3SourceDb getSourceDb();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

source_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#source_db DrsTaskV3#source_db}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#type DrsTaskV3#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#description DrsTaskV3#description}.

---

##### `destinationDbReadonly`<sup>Optional</sup> <a name="destinationDbReadonly" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.destinationDbReadonly"></a>

```java
public java.lang.Object getDestinationDbReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#destination_db_readonly DrsTaskV3#destination_db_readonly}.

---

##### `expiredDays`<sup>Optional</sup> <a name="expiredDays" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.expiredDays"></a>

```java
public java.lang.Number getExpiredDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#expired_days DrsTaskV3#expired_days}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#force_destroy DrsTaskV3#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#id DrsTaskV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitSpeed`<sup>Optional</sup> <a name="limitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.limitSpeed"></a>

```java
public java.lang.Object getLimitSpeed();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>>

limit_speed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#limit_speed DrsTaskV3#limit_speed}

---

##### `migrateDefiner`<sup>Optional</sup> <a name="migrateDefiner" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrateDefiner"></a>

```java
public java.lang.Object getMigrateDefiner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migrate_definer DrsTaskV3#migrate_definer}.

---

##### `migrationType`<sup>Optional</sup> <a name="migrationType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#migration_type DrsTaskV3#migration_type}.

---

##### `multiWrite`<sup>Optional</sup> <a name="multiWrite" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.multiWrite"></a>

```java
public java.lang.Object getMultiWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#multi_write DrsTaskV3#multi_write}.

---

##### `netType`<sup>Optional</sup> <a name="netType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.netType"></a>

```java
public java.lang.String getNetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#net_type DrsTaskV3#net_type}.

---

##### `nodeNum`<sup>Optional</sup> <a name="nodeNum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.nodeNum"></a>

```java
public java.lang.Number getNodeNum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#node_num DrsTaskV3#node_num}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#tags DrsTaskV3#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Config.property.timeouts"></a>

```java
public DrsTaskV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#timeouts DrsTaskV3#timeouts}

---

### DrsTaskV3DestinationDb <a name="DrsTaskV3DestinationDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3DestinationDb;

DrsTaskV3DestinationDb.builder()
    .engineType(java.lang.String)
    .ip(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .user(java.lang.String)
//  .instanceId(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sslCertCheckSum(java.lang.String)
//  .sslCertKey(java.lang.String)
//  .sslCertName(java.lang.String)
//  .sslCertPassword(java.lang.String)
//  .sslEnabled(java.lang.Boolean)
//  .sslEnabled(IResolvable)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip">ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum">sslCertCheckSum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey">sslCertKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName">sslCertName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword">sslCertPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled">sslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `sslCertCheckSum`<sup>Optional</sup> <a name="sslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertCheckSum"></a>

```java
public java.lang.String getSslCertCheckSum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `sslCertKey`<sup>Optional</sup> <a name="sslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertKey"></a>

```java
public java.lang.String getSslCertKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `sslCertName`<sup>Optional</sup> <a name="sslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertName"></a>

```java
public java.lang.String getSslCertName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `sslCertPassword`<sup>Optional</sup> <a name="sslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslCertPassword"></a>

```java
public java.lang.String getSslCertPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `sslEnabled`<sup>Optional</sup> <a name="sslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.sslEnabled"></a>

```java
public java.lang.Object getSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3LimitSpeed <a name="DrsTaskV3LimitSpeed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3LimitSpeed;

DrsTaskV3LimitSpeed.builder()
    .endTime(java.lang.String)
    .speed(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed">speed</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#speed DrsTaskV3#speed}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#end_time DrsTaskV3#end_time}.

---

##### `speed`<sup>Required</sup> <a name="speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.speed"></a>

```java
public java.lang.String getSpeed();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#speed DrsTaskV3#speed}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#start_time DrsTaskV3#start_time}.

---

### DrsTaskV3SourceDb <a name="DrsTaskV3SourceDb" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3SourceDb;

DrsTaskV3SourceDb.builder()
    .engineType(java.lang.String)
    .ip(java.lang.String)
    .password(java.lang.String)
    .port(java.lang.Number)
    .user(java.lang.String)
//  .instanceId(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sslCertCheckSum(java.lang.String)
//  .sslCertKey(java.lang.String)
//  .sslCertName(java.lang.String)
//  .sslCertPassword(java.lang.String)
//  .sslEnabled(java.lang.Boolean)
//  .sslEnabled(IResolvable)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType">engineType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip">ip</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ip DrsTaskV3#ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#password DrsTaskV3#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#port DrsTaskV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user">user</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#user DrsTaskV3#user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#region DrsTaskV3#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum">sslCertCheckSum</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey">sslCertKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName">sslCertName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword">sslCertPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled">sslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}. |

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#engine_type DrsTaskV3#engine_type}.

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ip DrsTaskV3#ip}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#password DrsTaskV3#password}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#port DrsTaskV3#port}.

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#user DrsTaskV3#user}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#instance_id DrsTaskV3#instance_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#name DrsTaskV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#region DrsTaskV3#region}.

---

##### `sslCertCheckSum`<sup>Optional</sup> <a name="sslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertCheckSum"></a>

```java
public java.lang.String getSslCertCheckSum();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_check_sum DrsTaskV3#ssl_cert_check_sum}.

---

##### `sslCertKey`<sup>Optional</sup> <a name="sslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertKey"></a>

```java
public java.lang.String getSslCertKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_key DrsTaskV3#ssl_cert_key}.

---

##### `sslCertName`<sup>Optional</sup> <a name="sslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertName"></a>

```java
public java.lang.String getSslCertName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_name DrsTaskV3#ssl_cert_name}.

---

##### `sslCertPassword`<sup>Optional</sup> <a name="sslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslCertPassword"></a>

```java
public java.lang.String getSslCertPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_cert_password DrsTaskV3#ssl_cert_password}.

---

##### `sslEnabled`<sup>Optional</sup> <a name="sslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.sslEnabled"></a>

```java
public java.lang.Object getSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#ssl_enabled DrsTaskV3#ssl_enabled}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#subnet_id DrsTaskV3#subnet_id}.

---

### DrsTaskV3Timeouts <a name="DrsTaskV3Timeouts" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3Timeouts;

DrsTaskV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#create DrsTaskV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#delete DrsTaskV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#create DrsTaskV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.31/docs/resources/drs_task_v3#delete DrsTaskV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DrsTaskV3DestinationDbOutputReference <a name="DrsTaskV3DestinationDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3DestinationDbOutputReference;

new DrsTaskV3DestinationDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum">resetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey">resetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName">resetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword">resetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled">resetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSslCertCheckSum` <a name="resetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertCheckSum"></a>

```java
public void resetSslCertCheckSum()
```

##### `resetSslCertKey` <a name="resetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertKey"></a>

```java
public void resetSslCertKey()
```

##### `resetSslCertName` <a name="resetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertName"></a>

```java
public void resetSslCertName()
```

##### `resetSslCertPassword` <a name="resetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslCertPassword"></a>

```java
public void resetSslCertPassword()
```

##### `resetSslEnabled` <a name="resetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSslEnabled"></a>

```java
public void resetSslEnabled()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput">sslCertCheckSumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput">sslCertKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput">sslCertNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput">sslCertPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput">sslEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum">sslCertCheckSum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey">sslCertKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName">sslCertName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword">sslCertPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled">sslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sslCertCheckSumInput`<sup>Optional</sup> <a name="sslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSumInput"></a>

```java
public java.lang.String getSslCertCheckSumInput();
```

- *Type:* java.lang.String

---

##### `sslCertKeyInput`<sup>Optional</sup> <a name="sslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKeyInput"></a>

```java
public java.lang.String getSslCertKeyInput();
```

- *Type:* java.lang.String

---

##### `sslCertNameInput`<sup>Optional</sup> <a name="sslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertNameInput"></a>

```java
public java.lang.String getSslCertNameInput();
```

- *Type:* java.lang.String

---

##### `sslCertPasswordInput`<sup>Optional</sup> <a name="sslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPasswordInput"></a>

```java
public java.lang.String getSslCertPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslEnabledInput`<sup>Optional</sup> <a name="sslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabledInput"></a>

```java
public java.lang.Object getSslEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sslCertCheckSum`<sup>Required</sup> <a name="sslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertCheckSum"></a>

```java
public java.lang.String getSslCertCheckSum();
```

- *Type:* java.lang.String

---

##### `sslCertKey`<sup>Required</sup> <a name="sslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertKey"></a>

```java
public java.lang.String getSslCertKey();
```

- *Type:* java.lang.String

---

##### `sslCertName`<sup>Required</sup> <a name="sslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertName"></a>

```java
public java.lang.String getSslCertName();
```

- *Type:* java.lang.String

---

##### `sslCertPassword`<sup>Required</sup> <a name="sslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslCertPassword"></a>

```java
public java.lang.String getSslCertPassword();
```

- *Type:* java.lang.String

---

##### `sslEnabled`<sup>Required</sup> <a name="sslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.sslEnabled"></a>

```java
public java.lang.Object getSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDbOutputReference.property.internalValue"></a>

```java
public DrsTaskV3DestinationDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3DestinationDb">DrsTaskV3DestinationDb</a>

---


### DrsTaskV3LimitSpeedList <a name="DrsTaskV3LimitSpeedList" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3LimitSpeedList;

new DrsTaskV3LimitSpeedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get"></a>

```java
public DrsTaskV3LimitSpeedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>>

---


### DrsTaskV3LimitSpeedOutputReference <a name="DrsTaskV3LimitSpeedOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3LimitSpeedOutputReference;

new DrsTaskV3LimitSpeedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput">speedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed">speed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `speedInput`<sup>Optional</sup> <a name="speedInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speedInput"></a>

```java
public java.lang.String getSpeedInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `speed`<sup>Required</sup> <a name="speed" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.speed"></a>

```java
public java.lang.String getSpeed();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeedOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3LimitSpeed">DrsTaskV3LimitSpeed</a>

---


### DrsTaskV3SourceDbOutputReference <a name="DrsTaskV3SourceDbOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3SourceDbOutputReference;

new DrsTaskV3SourceDbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum">resetSslCertCheckSum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey">resetSslCertKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName">resetSslCertName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword">resetSslCertPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled">resetSslEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSslCertCheckSum` <a name="resetSslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertCheckSum"></a>

```java
public void resetSslCertCheckSum()
```

##### `resetSslCertKey` <a name="resetSslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertKey"></a>

```java
public void resetSslCertKey()
```

##### `resetSslCertName` <a name="resetSslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertName"></a>

```java
public void resetSslCertName()
```

##### `resetSslCertPassword` <a name="resetSslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslCertPassword"></a>

```java
public void resetSslCertPassword()
```

##### `resetSslEnabled` <a name="resetSslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSslEnabled"></a>

```java
public void resetSslEnabled()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput">engineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput">ipInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput">sslCertCheckSumInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput">sslCertKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput">sslCertNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput">sslCertPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput">sslEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType">engineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum">sslCertCheckSum</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey">sslCertKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName">sslCertName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword">sslCertPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled">sslEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `engineTypeInput`<sup>Optional</sup> <a name="engineTypeInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineTypeInput"></a>

```java
public java.lang.String getEngineTypeInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `ipInput`<sup>Optional</sup> <a name="ipInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ipInput"></a>

```java
public java.lang.String getIpInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sslCertCheckSumInput`<sup>Optional</sup> <a name="sslCertCheckSumInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSumInput"></a>

```java
public java.lang.String getSslCertCheckSumInput();
```

- *Type:* java.lang.String

---

##### `sslCertKeyInput`<sup>Optional</sup> <a name="sslCertKeyInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKeyInput"></a>

```java
public java.lang.String getSslCertKeyInput();
```

- *Type:* java.lang.String

---

##### `sslCertNameInput`<sup>Optional</sup> <a name="sslCertNameInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertNameInput"></a>

```java
public java.lang.String getSslCertNameInput();
```

- *Type:* java.lang.String

---

##### `sslCertPasswordInput`<sup>Optional</sup> <a name="sslCertPasswordInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPasswordInput"></a>

```java
public java.lang.String getSslCertPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslEnabledInput`<sup>Optional</sup> <a name="sslEnabledInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabledInput"></a>

```java
public java.lang.Object getSslEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.engineType"></a>

```java
public java.lang.String getEngineType();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sslCertCheckSum`<sup>Required</sup> <a name="sslCertCheckSum" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertCheckSum"></a>

```java
public java.lang.String getSslCertCheckSum();
```

- *Type:* java.lang.String

---

##### `sslCertKey`<sup>Required</sup> <a name="sslCertKey" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertKey"></a>

```java
public java.lang.String getSslCertKey();
```

- *Type:* java.lang.String

---

##### `sslCertName`<sup>Required</sup> <a name="sslCertName" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertName"></a>

```java
public java.lang.String getSslCertName();
```

- *Type:* java.lang.String

---

##### `sslCertPassword`<sup>Required</sup> <a name="sslCertPassword" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslCertPassword"></a>

```java
public java.lang.String getSslCertPassword();
```

- *Type:* java.lang.String

---

##### `sslEnabled`<sup>Required</sup> <a name="sslEnabled" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.sslEnabled"></a>

```java
public java.lang.Object getSslEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDbOutputReference.property.internalValue"></a>

```java
public DrsTaskV3SourceDb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3SourceDb">DrsTaskV3SourceDb</a>

---


### DrsTaskV3TimeoutsOutputReference <a name="DrsTaskV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.drs_task_v3.DrsTaskV3TimeoutsOutputReference;

new DrsTaskV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.drsTaskV3.DrsTaskV3Timeouts">DrsTaskV3Timeouts</a>

---



