# `asGroupV1` Submodule <a name="`asGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.asGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsGroupV1 <a name="AsGroupV1" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1 opentelekomcloud_as_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1;

AsGroupV1.Builder.create(Construct scope, java.lang.String id)
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
    .deleteInstances(java.lang.String)
    .deletePublicip(java.lang.Boolean)
    .deletePublicip(IResolvable)
    .networks(IResolvable)
    .networks(java.util.List<AsGroupV1Networks>)
    .scalingGroupName(java.lang.String)
    .vpcId(java.lang.String)
//  .availableZones(java.util.List<java.lang.String>)
//  .coolDownTime(java.lang.Number)
//  .desireInstanceNumber(java.lang.Number)
//  .healthPeriodicAuditGracePeriod(java.lang.Number)
//  .healthPeriodicAuditMethod(java.lang.String)
//  .healthPeriodicAuditTime(java.lang.Number)
//  .id(java.lang.String)
//  .instanceTerminatePolicy(java.lang.String)
//  .lbaasListeners(IResolvable)
//  .lbaasListeners(java.util.List<AsGroupV1LbaasListeners>)
//  .lbListenerId(java.lang.String)
//  .maxInstanceNumber(java.lang.Number)
//  .minInstanceNumber(java.lang.Number)
//  .notifications(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .scalingConfigurationId(java.lang.String)
//  .securityGroups(AsGroupV1SecurityGroups)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AsGroupV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deleteInstances">deleteInstances</a></code> | <code>java.lang.String</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deletePublicip">deletePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingGroupName">scalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.desireInstanceNumber">desireInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditGracePeriod">healthPeriodicAuditGracePeriod</a></code> | <code>java.lang.Number</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditMethod">healthPeriodicAuditMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditTime">healthPeriodicAuditTime</a></code> | <code>java.lang.Number</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.instanceTerminatePolicy">instanceTerminatePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbaasListeners">lbaasListeners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>></code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbListenerId">lbListenerId</a></code> | <code>java.lang.String</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.maxInstanceNumber">maxInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.minInstanceNumber">minInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingConfigurationId">scalingConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.securityGroups">securityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deleteInstances`<sup>Required</sup> <a name="deleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deleteInstances"></a>

- *Type:* java.lang.String

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `deletePublicip`<sup>Required</sup> <a name="deletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.deletePublicip"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.networks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `availableZones`<sup>Optional</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.availableZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `coolDownTime`<sup>Optional</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.coolDownTime"></a>

- *Type:* java.lang.Number

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `desireInstanceNumber`<sup>Optional</sup> <a name="desireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.desireInstanceNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `healthPeriodicAuditGracePeriod`<sup>Optional</sup> <a name="healthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditGracePeriod"></a>

- *Type:* java.lang.Number

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `healthPeriodicAuditMethod`<sup>Optional</sup> <a name="healthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `healthPeriodicAuditTime`<sup>Optional</sup> <a name="healthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.healthPeriodicAuditTime"></a>

- *Type:* java.lang.Number

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTerminatePolicy`<sup>Optional</sup> <a name="instanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.instanceTerminatePolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `lbaasListeners`<sup>Optional</sup> <a name="lbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbaasListeners"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>>

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `lbListenerId`<sup>Optional</sup> <a name="lbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.lbListenerId"></a>

- *Type:* java.lang.String

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `maxInstanceNumber`<sup>Optional</sup> <a name="maxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.maxInstanceNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `minInstanceNumber`<sup>Optional</sup> <a name="minInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.minInstanceNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.notifications"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `scalingConfigurationId`<sup>Optional</sup> <a name="scalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.scalingConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.securityGroups"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners">putLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks">putNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups">putSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones">resetAvailableZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime">resetCoolDownTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber">resetDesireInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod">resetHealthPeriodicAuditGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod">resetHealthPeriodicAuditMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime">resetHealthPeriodicAuditTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy">resetInstanceTerminatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners">resetLbaasListeners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId">resetLbListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber">resetMaxInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber">resetMinInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId">resetScalingConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLbaasListeners` <a name="putLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners"></a>

```java
public void putLbaasListeners(IResolvable OR java.util.List<AsGroupV1LbaasListeners> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putLbaasListeners.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>>

---

##### `putNetworks` <a name="putNetworks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks"></a>

```java
public void putNetworks(IResolvable OR java.util.List<AsGroupV1Networks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putNetworks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>>

---

##### `putSecurityGroups` <a name="putSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups"></a>

```java
public void putSecurityGroups(AsGroupV1SecurityGroups value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putSecurityGroups.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts"></a>

```java
public void putTimeouts(AsGroupV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `resetAvailableZones` <a name="resetAvailableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetAvailableZones"></a>

```java
public void resetAvailableZones()
```

##### `resetCoolDownTime` <a name="resetCoolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetCoolDownTime"></a>

```java
public void resetCoolDownTime()
```

##### `resetDesireInstanceNumber` <a name="resetDesireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetDesireInstanceNumber"></a>

```java
public void resetDesireInstanceNumber()
```

##### `resetHealthPeriodicAuditGracePeriod` <a name="resetHealthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditGracePeriod"></a>

```java
public void resetHealthPeriodicAuditGracePeriod()
```

##### `resetHealthPeriodicAuditMethod` <a name="resetHealthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditMethod"></a>

```java
public void resetHealthPeriodicAuditMethod()
```

##### `resetHealthPeriodicAuditTime` <a name="resetHealthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetHealthPeriodicAuditTime"></a>

```java
public void resetHealthPeriodicAuditTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceTerminatePolicy` <a name="resetInstanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetInstanceTerminatePolicy"></a>

```java
public void resetInstanceTerminatePolicy()
```

##### `resetLbaasListeners` <a name="resetLbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbaasListeners"></a>

```java
public void resetLbaasListeners()
```

##### `resetLbListenerId` <a name="resetLbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetLbListenerId"></a>

```java
public void resetLbListenerId()
```

##### `resetMaxInstanceNumber` <a name="resetMaxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMaxInstanceNumber"></a>

```java
public void resetMaxInstanceNumber()
```

##### `resetMinInstanceNumber` <a name="resetMinInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetMinInstanceNumber"></a>

```java
public void resetMinInstanceNumber()
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetNotifications"></a>

```java
public void resetNotifications()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScalingConfigurationId` <a name="resetScalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetScalingConfigurationId"></a>

```java
public void resetScalingConfigurationId()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1;

AsGroupV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1;

AsGroupV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1;

AsGroupV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1;

AsGroupV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AsGroupV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AsGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AsGroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AsGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AsGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber">currentInstanceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners">lbaasListeners</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups">securityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput">availableZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput">coolDownTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput">deleteInstancesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput">deletePublicipInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput">desireInstanceNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput">healthPeriodicAuditGracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput">healthPeriodicAuditMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput">healthPeriodicAuditTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput">instanceTerminatePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput">lbaasListenersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput">lbListenerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput">maxInstanceNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput">minInstanceNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput">networksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput">notificationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput">scalingConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput">scalingGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput">securityGroupsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances">deleteInstances</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip">deletePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber">desireInstanceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod">healthPeriodicAuditGracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod">healthPeriodicAuditMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime">healthPeriodicAuditTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy">instanceTerminatePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId">lbListenerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber">maxInstanceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber">minInstanceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId">scalingConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName">scalingGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `currentInstanceNumber`<sup>Required</sup> <a name="currentInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.currentInstanceNumber"></a>

```java
public java.lang.Number getCurrentInstanceNumber();
```

- *Type:* java.lang.Number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbaasListeners`<sup>Required</sup> <a name="lbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListeners"></a>

```java
public AsGroupV1LbaasListenersList getLbaasListeners();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList">AsGroupV1LbaasListenersList</a>

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networks"></a>

```java
public AsGroupV1NetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList">AsGroupV1NetworksList</a>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroups"></a>

```java
public AsGroupV1SecurityGroupsOutputReference getSecurityGroups();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference">AsGroupV1SecurityGroupsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeouts"></a>

```java
public AsGroupV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference">AsGroupV1TimeoutsOutputReference</a>

---

##### `availableZonesInput`<sup>Optional</sup> <a name="availableZonesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailableZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coolDownTimeInput`<sup>Optional</sup> <a name="coolDownTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTimeInput"></a>

```java
public java.lang.Number getCoolDownTimeInput();
```

- *Type:* java.lang.Number

---

##### `deleteInstancesInput`<sup>Optional</sup> <a name="deleteInstancesInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstancesInput"></a>

```java
public java.lang.String getDeleteInstancesInput();
```

- *Type:* java.lang.String

---

##### `deletePublicipInput`<sup>Optional</sup> <a name="deletePublicipInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicipInput"></a>

```java
public java.lang.Object getDeletePublicipInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `desireInstanceNumberInput`<sup>Optional</sup> <a name="desireInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumberInput"></a>

```java
public java.lang.Number getDesireInstanceNumberInput();
```

- *Type:* java.lang.Number

---

##### `healthPeriodicAuditGracePeriodInput`<sup>Optional</sup> <a name="healthPeriodicAuditGracePeriodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriodInput"></a>

```java
public java.lang.Number getHealthPeriodicAuditGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `healthPeriodicAuditMethodInput`<sup>Optional</sup> <a name="healthPeriodicAuditMethodInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethodInput"></a>

```java
public java.lang.String getHealthPeriodicAuditMethodInput();
```

- *Type:* java.lang.String

---

##### `healthPeriodicAuditTimeInput`<sup>Optional</sup> <a name="healthPeriodicAuditTimeInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTimeInput"></a>

```java
public java.lang.Number getHealthPeriodicAuditTimeInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTerminatePolicyInput`<sup>Optional</sup> <a name="instanceTerminatePolicyInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicyInput"></a>

```java
public java.lang.String getInstanceTerminatePolicyInput();
```

- *Type:* java.lang.String

---

##### `lbaasListenersInput`<sup>Optional</sup> <a name="lbaasListenersInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbaasListenersInput"></a>

```java
public java.lang.Object getLbaasListenersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>>

---

##### `lbListenerIdInput`<sup>Optional</sup> <a name="lbListenerIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerIdInput"></a>

```java
public java.lang.String getLbListenerIdInput();
```

- *Type:* java.lang.String

---

##### `maxInstanceNumberInput`<sup>Optional</sup> <a name="maxInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumberInput"></a>

```java
public java.lang.Number getMaxInstanceNumberInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceNumberInput`<sup>Optional</sup> <a name="minInstanceNumberInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumberInput"></a>

```java
public java.lang.Number getMinInstanceNumberInput();
```

- *Type:* java.lang.Number

---

##### `networksInput`<sup>Optional</sup> <a name="networksInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.networksInput"></a>

```java
public java.lang.Object getNetworksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>>

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notificationsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationIdInput`<sup>Optional</sup> <a name="scalingConfigurationIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationIdInput"></a>

```java
public java.lang.String getScalingConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `scalingGroupNameInput`<sup>Optional</sup> <a name="scalingGroupNameInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupNameInput"></a>

```java
public java.lang.String getScalingGroupNameInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.securityGroupsInput"></a>

```java
public AsGroupV1SecurityGroups getSecurityGroupsInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availableZones`<sup>Required</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `coolDownTime`<sup>Required</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.coolDownTime"></a>

```java
public java.lang.Number getCoolDownTime();
```

- *Type:* java.lang.Number

---

##### `deleteInstances`<sup>Required</sup> <a name="deleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deleteInstances"></a>

```java
public java.lang.String getDeleteInstances();
```

- *Type:* java.lang.String

---

##### `deletePublicip`<sup>Required</sup> <a name="deletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.deletePublicip"></a>

```java
public java.lang.Object getDeletePublicip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `desireInstanceNumber`<sup>Required</sup> <a name="desireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.desireInstanceNumber"></a>

```java
public java.lang.Number getDesireInstanceNumber();
```

- *Type:* java.lang.Number

---

##### `healthPeriodicAuditGracePeriod`<sup>Required</sup> <a name="healthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditGracePeriod"></a>

```java
public java.lang.Number getHealthPeriodicAuditGracePeriod();
```

- *Type:* java.lang.Number

---

##### `healthPeriodicAuditMethod`<sup>Required</sup> <a name="healthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditMethod"></a>

```java
public java.lang.String getHealthPeriodicAuditMethod();
```

- *Type:* java.lang.String

---

##### `healthPeriodicAuditTime`<sup>Required</sup> <a name="healthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.healthPeriodicAuditTime"></a>

```java
public java.lang.Number getHealthPeriodicAuditTime();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTerminatePolicy`<sup>Required</sup> <a name="instanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.instanceTerminatePolicy"></a>

```java
public java.lang.String getInstanceTerminatePolicy();
```

- *Type:* java.lang.String

---

##### `lbListenerId`<sup>Required</sup> <a name="lbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.lbListenerId"></a>

```java
public java.lang.String getLbListenerId();
```

- *Type:* java.lang.String

---

##### `maxInstanceNumber`<sup>Required</sup> <a name="maxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.maxInstanceNumber"></a>

```java
public java.lang.Number getMaxInstanceNumber();
```

- *Type:* java.lang.Number

---

##### `minInstanceNumber`<sup>Required</sup> <a name="minInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.minInstanceNumber"></a>

```java
public java.lang.Number getMinInstanceNumber();
```

- *Type:* java.lang.Number

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scalingConfigurationId`<sup>Required</sup> <a name="scalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingConfigurationId"></a>

```java
public java.lang.String getScalingConfigurationId();
```

- *Type:* java.lang.String

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.scalingGroupName"></a>

```java
public java.lang.String getScalingGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AsGroupV1Config <a name="AsGroupV1Config" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1Config;

AsGroupV1Config.builder()
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
    .deleteInstances(java.lang.String)
    .deletePublicip(java.lang.Boolean)
    .deletePublicip(IResolvable)
    .networks(IResolvable)
    .networks(java.util.List<AsGroupV1Networks>)
    .scalingGroupName(java.lang.String)
    .vpcId(java.lang.String)
//  .availableZones(java.util.List<java.lang.String>)
//  .coolDownTime(java.lang.Number)
//  .desireInstanceNumber(java.lang.Number)
//  .healthPeriodicAuditGracePeriod(java.lang.Number)
//  .healthPeriodicAuditMethod(java.lang.String)
//  .healthPeriodicAuditTime(java.lang.Number)
//  .id(java.lang.String)
//  .instanceTerminatePolicy(java.lang.String)
//  .lbaasListeners(IResolvable)
//  .lbaasListeners(java.util.List<AsGroupV1LbaasListeners>)
//  .lbListenerId(java.lang.String)
//  .maxInstanceNumber(java.lang.Number)
//  .minInstanceNumber(java.lang.Number)
//  .notifications(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .scalingConfigurationId(java.lang.String)
//  .securityGroups(AsGroupV1SecurityGroups)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AsGroupV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances">deleteInstances</a></code> | <code>java.lang.String</code> | Whether to delete instances when they are removed from the AS group. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip">deletePublicip</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks">networks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>></code> | networks block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName">scalingGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones">availableZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime">coolDownTime</a></code> | <code>java.lang.Number</code> | The cooling duration, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber">desireInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod">healthPeriodicAuditGracePeriod</a></code> | <code>java.lang.Number</code> | The grace period for instance health check, in seconds. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod">healthPeriodicAuditMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime">healthPeriodicAuditTime</a></code> | <code>java.lang.Number</code> | The health check period for instances, in minutes. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy">instanceTerminatePolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners">lbaasListeners</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>></code> | lbaas_listeners block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId">lbListenerId</a></code> | <code>java.lang.String</code> | The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber">maxInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber">minInstanceNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications">notifications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#notifications AsGroupV1#notifications}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#region AsGroupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId">scalingConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups">securityGroups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | security_groups block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#tags AsGroupV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `deleteInstances`<sup>Required</sup> <a name="deleteInstances" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deleteInstances"></a>

```java
public java.lang.String getDeleteInstances();
```

- *Type:* java.lang.String

Whether to delete instances when they are removed from the AS group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_instances AsGroupV1#delete_instances}

---

##### `deletePublicip`<sup>Required</sup> <a name="deletePublicip" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.deletePublicip"></a>

```java
public java.lang.Object getDeletePublicip();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete_publicip AsGroupV1#delete_publicip}.

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.networks"></a>

```java
public java.lang.Object getNetworks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>>

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#networks AsGroupV1#networks}

---

##### `scalingGroupName`<sup>Required</sup> <a name="scalingGroupName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingGroupName"></a>

```java
public java.lang.String getScalingGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_group_name AsGroupV1#scaling_group_name}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#vpc_id AsGroupV1#vpc_id}.

---

##### `availableZones`<sup>Optional</sup> <a name="availableZones" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.availableZones"></a>

```java
public java.util.List<java.lang.String> getAvailableZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#available_zones AsGroupV1#available_zones}.

---

##### `coolDownTime`<sup>Optional</sup> <a name="coolDownTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.coolDownTime"></a>

```java
public java.lang.Number getCoolDownTime();
```

- *Type:* java.lang.Number

The cooling duration, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#cool_down_time AsGroupV1#cool_down_time}

---

##### `desireInstanceNumber`<sup>Optional</sup> <a name="desireInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.desireInstanceNumber"></a>

```java
public java.lang.Number getDesireInstanceNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#desire_instance_number AsGroupV1#desire_instance_number}.

---

##### `healthPeriodicAuditGracePeriod`<sup>Optional</sup> <a name="healthPeriodicAuditGracePeriod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditGracePeriod"></a>

```java
public java.lang.Number getHealthPeriodicAuditGracePeriod();
```

- *Type:* java.lang.Number

The grace period for instance health check, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_grace_period AsGroupV1#health_periodic_audit_grace_period}

---

##### `healthPeriodicAuditMethod`<sup>Optional</sup> <a name="healthPeriodicAuditMethod" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditMethod"></a>

```java
public java.lang.String getHealthPeriodicAuditMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_method AsGroupV1#health_periodic_audit_method}.

---

##### `healthPeriodicAuditTime`<sup>Optional</sup> <a name="healthPeriodicAuditTime" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.healthPeriodicAuditTime"></a>

```java
public java.lang.Number getHealthPeriodicAuditTime();
```

- *Type:* java.lang.Number

The health check period for instances, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#health_periodic_audit_time AsGroupV1#health_periodic_audit_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTerminatePolicy`<sup>Optional</sup> <a name="instanceTerminatePolicy" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.instanceTerminatePolicy"></a>

```java
public java.lang.String getInstanceTerminatePolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#instance_terminate_policy AsGroupV1#instance_terminate_policy}.

---

##### `lbaasListeners`<sup>Optional</sup> <a name="lbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbaasListeners"></a>

```java
public java.lang.Object getLbaasListeners();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>>

lbaas_listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#lbaas_listeners AsGroupV1#lbaas_listeners}

---

##### `lbListenerId`<sup>Optional</sup> <a name="lbListenerId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.lbListenerId"></a>

```java
public java.lang.String getLbListenerId();
```

- *Type:* java.lang.String

The system supports the binding of up to six classic LB listeners, the IDs of which are separated using a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#lb_listener_id AsGroupV1#lb_listener_id}

---

##### `maxInstanceNumber`<sup>Optional</sup> <a name="maxInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.maxInstanceNumber"></a>

```java
public java.lang.Number getMaxInstanceNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#max_instance_number AsGroupV1#max_instance_number}.

---

##### `minInstanceNumber`<sup>Optional</sup> <a name="minInstanceNumber" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.minInstanceNumber"></a>

```java
public java.lang.Number getMinInstanceNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#min_instance_number AsGroupV1#min_instance_number}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.notifications"></a>

```java
public java.util.List<java.lang.String> getNotifications();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#notifications AsGroupV1#notifications}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#region AsGroupV1#region}.

---

##### `scalingConfigurationId`<sup>Optional</sup> <a name="scalingConfigurationId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.scalingConfigurationId"></a>

```java
public java.lang.String getScalingConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#scaling_configuration_id AsGroupV1#scaling_configuration_id}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.securityGroups"></a>

```java
public AsGroupV1SecurityGroups getSecurityGroups();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

security_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#security_groups AsGroupV1#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#tags AsGroupV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Config.property.timeouts"></a>

```java
public AsGroupV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#timeouts AsGroupV1#timeouts}

---

### AsGroupV1LbaasListeners <a name="AsGroupV1LbaasListeners" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1LbaasListeners;

AsGroupV1LbaasListeners.builder()
    .poolId(java.lang.String)
    .protocolPort(java.lang.Number)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId">poolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#weight AsGroupV1#weight}. |

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#pool_id AsGroupV1#pool_id}.

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#protocol_port AsGroupV1#protocol_port}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#weight AsGroupV1#weight}.

---

### AsGroupV1Networks <a name="AsGroupV1Networks" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1Networks;

AsGroupV1Networks.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1SecurityGroups <a name="AsGroupV1SecurityGroups" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1SecurityGroups;

AsGroupV1SecurityGroups.builder()
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#id AsGroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AsGroupV1Timeouts <a name="AsGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1Timeouts;

AsGroupV1Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#create AsGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete AsGroupV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#create AsGroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/as_group_v1#delete AsGroupV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsGroupV1LbaasListenersList <a name="AsGroupV1LbaasListenersList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1LbaasListenersList;

new AsGroupV1LbaasListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get"></a>

```java
public AsGroupV1LbaasListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>>

---


### AsGroupV1LbaasListenersOutputReference <a name="AsGroupV1LbaasListenersOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1LbaasListenersOutputReference;

new AsGroupV1LbaasListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput">poolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput">protocolPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId">poolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort">protocolPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolIdInput"></a>

```java
public java.lang.String getPoolIdInput();
```

- *Type:* java.lang.String

---

##### `protocolPortInput`<sup>Optional</sup> <a name="protocolPortInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPortInput"></a>

```java
public java.lang.Number getProtocolPortInput();
```

- *Type:* java.lang.Number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.poolId"></a>

```java
public java.lang.String getPoolId();
```

- *Type:* java.lang.String

---

##### `protocolPort`<sup>Required</sup> <a name="protocolPort" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.protocolPort"></a>

```java
public java.lang.Number getProtocolPort();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListenersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1LbaasListeners">AsGroupV1LbaasListeners</a>

---


### AsGroupV1NetworksList <a name="AsGroupV1NetworksList" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1NetworksList;

new AsGroupV1NetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get"></a>

```java
public AsGroupV1NetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>>

---


### AsGroupV1NetworksOutputReference <a name="AsGroupV1NetworksOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1NetworksOutputReference;

new AsGroupV1NetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1NetworksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Networks">AsGroupV1Networks</a>

---


### AsGroupV1SecurityGroupsOutputReference <a name="AsGroupV1SecurityGroupsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1SecurityGroupsOutputReference;

new AsGroupV1SecurityGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroupsOutputReference.property.internalValue"></a>

```java
public AsGroupV1SecurityGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1SecurityGroups">AsGroupV1SecurityGroups</a>

---


### AsGroupV1TimeoutsOutputReference <a name="AsGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.as_group_v1.AsGroupV1TimeoutsOutputReference;

new AsGroupV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.asGroupV1.AsGroupV1Timeouts">AsGroupV1Timeouts</a>

---



