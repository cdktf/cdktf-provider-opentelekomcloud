# `identityRoleAssignmentV3` Submodule <a name="`identityRoleAssignmentV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityRoleAssignmentV3 <a name="IdentityRoleAssignmentV3" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3 opentelekomcloud_identity_role_assignment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3;

IdentityRoleAssignmentV3.Builder.create(Construct scope, java.lang.String id)
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
    .groupId(java.lang.String)
    .roleId(java.lang.String)
//  .allProjects(java.lang.Boolean)
//  .allProjects(IResolvable)
//  .domainId(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.allProjects">allProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#all_projects IdentityRoleAssignmentV3#all_projects}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.groupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}.

---

##### `allProjects`<sup>Optional</sup> <a name="allProjects" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.allProjects"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#all_projects IdentityRoleAssignmentV3#all_projects}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.domainId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetAllProjects">resetAllProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllProjects` <a name="resetAllProjects" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetAllProjects"></a>

```java
public void resetAllProjects()
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetDomainId"></a>

```java
public void resetDomainId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetId"></a>

```java
public void resetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityRoleAssignmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3;

IdentityRoleAssignmentV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3;

IdentityRoleAssignmentV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3;

IdentityRoleAssignmentV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3;

IdentityRoleAssignmentV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityRoleAssignmentV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityRoleAssignmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityRoleAssignmentV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityRoleAssignmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityRoleAssignmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.allProjectsInput">allProjectsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainIdInput">domainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.allProjects">allProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allProjectsInput`<sup>Optional</sup> <a name="allProjectsInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.allProjectsInput"></a>

```java
public java.lang.Object getAllProjectsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainIdInput"></a>

```java
public java.lang.String getDomainIdInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `allProjects`<sup>Required</sup> <a name="allProjects" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.allProjects"></a>

```java
public java.lang.Object getAllProjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityRoleAssignmentV3Config <a name="IdentityRoleAssignmentV3Config" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.identity_role_assignment_v3.IdentityRoleAssignmentV3Config;

IdentityRoleAssignmentV3Config.builder()
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
    .groupId(java.lang.String)
    .roleId(java.lang.String)
//  .allProjects(java.lang.Boolean)
//  .allProjects(IResolvable)
//  .domainId(java.lang.String)
//  .id(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.allProjects">allProjects</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#all_projects IdentityRoleAssignmentV3#all_projects}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.domainId">domainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#group_id IdentityRoleAssignmentV3#group_id}.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#role_id IdentityRoleAssignmentV3#role_id}.

---

##### `allProjects`<sup>Optional</sup> <a name="allProjects" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.allProjects"></a>

```java
public java.lang.Object getAllProjects();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#all_projects IdentityRoleAssignmentV3#all_projects}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#domain_id IdentityRoleAssignmentV3#domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#id IdentityRoleAssignmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.identityRoleAssignmentV3.IdentityRoleAssignmentV3Config.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.13/docs/resources/identity_role_assignment_v3#project_id IdentityRoleAssignmentV3#project_id}.

---



