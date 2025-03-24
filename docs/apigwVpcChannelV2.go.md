# `apigwVpcChannelV2` Submodule <a name="`apigwVpcChannelV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwVpcChannelV2 <a name="ApigwVpcChannelV2" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2 opentelekomcloud_apigw_vpc_channel_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2(scope Construct, id *string, config ApigwVpcChannelV2Config) ApigwVpcChannelV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config">ApigwVpcChannelV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config">ApigwVpcChannelV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember">PutMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup">PutMemberGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice">PutMicroservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMember">ResetMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberGroup">ResetMemberGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberType">ResetMemberType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMicroservice">ResetMicroservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck"></a>

```go
func PutHealthCheck(value ApigwVpcChannelV2HealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---

##### `PutMember` <a name="PutMember" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember"></a>

```go
func PutMember(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMemberGroup` <a name="PutMemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup"></a>

```go
func PutMemberGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMicroservice` <a name="PutMicroservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice"></a>

```go
func PutMicroservice(value ApigwVpcChannelV2Microservice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetId"></a>

```go
func ResetId()
```

##### `ResetMember` <a name="ResetMember" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMember"></a>

```go
func ResetMember()
```

##### `ResetMemberGroup` <a name="ResetMemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberGroup"></a>

```go
func ResetMemberGroup()
```

##### `ResetMemberType` <a name="ResetMemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberType"></a>

```go
func ResetMemberType()
```

##### `ResetMicroservice` <a name="ResetMicroservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMicroservice"></a>

```go
func ResetMicroservice()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwVpcChannelV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.ApigwVpcChannelV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.ApigwVpcChannelV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.ApigwVpcChannelV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.ApigwVpcChannelV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigwVpcChannelV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigwVpcChannelV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigwVpcChannelV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigwVpcChannelV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference">ApigwVpcChannelV2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.member">Member</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList">ApigwVpcChannelV2MemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroup">MemberGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList">ApigwVpcChannelV2MemberGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microservice">Microservice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference">ApigwVpcChannelV2MicroserviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithmInput">LbAlgorithmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroupInput">MemberGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberInput">MemberInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberTypeInput">MemberTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microserviceInput">MicroserviceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithm">LbAlgorithm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberType">MemberType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.type">Type</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheck"></a>

```go
func HealthCheck() ApigwVpcChannelV2HealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference">ApigwVpcChannelV2HealthCheckOutputReference</a>

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.member"></a>

```go
func Member() ApigwVpcChannelV2MemberList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList">ApigwVpcChannelV2MemberList</a>

---

##### `MemberGroup`<sup>Required</sup> <a name="MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroup"></a>

```go
func MemberGroup() ApigwVpcChannelV2MemberGroupList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList">ApigwVpcChannelV2MemberGroupList</a>

---

##### `Microservice`<sup>Required</sup> <a name="Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microservice"></a>

```go
func Microservice() ApigwVpcChannelV2MicroserviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference">ApigwVpcChannelV2MicroserviceOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheckInput"></a>

```go
func HealthCheckInput() ApigwVpcChannelV2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LbAlgorithmInput`<sup>Optional</sup> <a name="LbAlgorithmInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithmInput"></a>

```go
func LbAlgorithmInput() *f64
```

- *Type:* *f64

---

##### `MemberGroupInput`<sup>Optional</sup> <a name="MemberGroupInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroupInput"></a>

```go
func MemberGroupInput() interface{}
```

- *Type:* interface{}

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberInput"></a>

```go
func MemberInput() interface{}
```

- *Type:* interface{}

---

##### `MemberTypeInput`<sup>Optional</sup> <a name="MemberTypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberTypeInput"></a>

```go
func MemberTypeInput() *string
```

- *Type:* *string

---

##### `MicroserviceInput`<sup>Optional</sup> <a name="MicroserviceInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microserviceInput"></a>

```go
func MicroserviceInput() ApigwVpcChannelV2Microservice
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithm"></a>

```go
func LbAlgorithm() *f64
```

- *Type:* *f64

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberType"></a>

```go
func MemberType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwVpcChannelV2Config <a name="ApigwVpcChannelV2Config" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	LbAlgorithm: *f64,
	Name: *string,
	Port: *f64,
	HealthCheck: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck,
	Id: *string,
	Member: interface{},
	MemberGroup: interface{},
	MemberType: *string,
	Microservice: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwVpcChannelV2.ApigwVpcChannelV2Microservice,
	Type: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#gateway_id ApigwVpcChannelV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lbAlgorithm">LbAlgorithm</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#lb_algorithm ApigwVpcChannelV2#lb_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.member">Member</a></code> | <code>interface{}</code> | member block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberGroup">MemberGroup</a></code> | <code>interface{}</code> | member_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberType">MemberType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#member_type ApigwVpcChannelV2#member_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.microservice">Microservice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | microservice block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.type">Type</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#type ApigwVpcChannelV2#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#gateway_id ApigwVpcChannelV2#gateway_id}.

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lbAlgorithm"></a>

```go
LbAlgorithm *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#lb_algorithm ApigwVpcChannelV2#lb_algorithm}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.healthCheck"></a>

```go
HealthCheck ApigwVpcChannelV2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#health_check ApigwVpcChannelV2#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Member`<sup>Optional</sup> <a name="Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.member"></a>

```go
Member interface{}
```

- *Type:* interface{}

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#member ApigwVpcChannelV2#member}

---

##### `MemberGroup`<sup>Optional</sup> <a name="MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberGroup"></a>

```go
MemberGroup interface{}
```

- *Type:* interface{}

member_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#member_group ApigwVpcChannelV2#member_group}

---

##### `MemberType`<sup>Optional</sup> <a name="MemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberType"></a>

```go
MemberType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#member_type ApigwVpcChannelV2#member_type}.

---

##### `Microservice`<sup>Optional</sup> <a name="Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.microservice"></a>

```go
Microservice ApigwVpcChannelV2Microservice
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

microservice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice ApigwVpcChannelV2#microservice}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#type ApigwVpcChannelV2#type}.

---

### ApigwVpcChannelV2HealthCheck <a name="ApigwVpcChannelV2HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2HealthCheck {
	Interval: *f64,
	Protocol: *string,
	ThresholdAbnormal: *f64,
	ThresholdNormal: *f64,
	Timeout: *f64,
	EnableClientSsl: interface{},
	HttpCodes: *string,
	Method: *string,
	Path: *string,
	Port: *f64,
	Status: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#interval ApigwVpcChannelV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#protocol ApigwVpcChannelV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdAbnormal">ThresholdAbnormal</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#threshold_abnormal ApigwVpcChannelV2#threshold_abnormal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdNormal">ThresholdNormal</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#threshold_normal ApigwVpcChannelV2#threshold_normal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#timeout ApigwVpcChannelV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.enableClientSsl">EnableClientSsl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#enable_client_ssl ApigwVpcChannelV2#enable_client_ssl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.httpCodes">HttpCodes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#http_codes ApigwVpcChannelV2#http_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#method ApigwVpcChannelV2#method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#path ApigwVpcChannelV2#path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.status">Status</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#interval ApigwVpcChannelV2#interval}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#protocol ApigwVpcChannelV2#protocol}.

---

##### `ThresholdAbnormal`<sup>Required</sup> <a name="ThresholdAbnormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdAbnormal"></a>

```go
ThresholdAbnormal *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#threshold_abnormal ApigwVpcChannelV2#threshold_abnormal}.

---

##### `ThresholdNormal`<sup>Required</sup> <a name="ThresholdNormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdNormal"></a>

```go
ThresholdNormal *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#threshold_normal ApigwVpcChannelV2#threshold_normal}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#timeout ApigwVpcChannelV2#timeout}.

---

##### `EnableClientSsl`<sup>Optional</sup> <a name="EnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.enableClientSsl"></a>

```go
EnableClientSsl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#enable_client_ssl ApigwVpcChannelV2#enable_client_ssl}.

---

##### `HttpCodes`<sup>Optional</sup> <a name="HttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.httpCodes"></a>

```go
HttpCodes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#http_codes ApigwVpcChannelV2#http_codes}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#method ApigwVpcChannelV2#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#path ApigwVpcChannelV2#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.status"></a>

```go
Status *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}.

---

### ApigwVpcChannelV2Member <a name="ApigwVpcChannelV2Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2Member {
	GroupName: *string,
	Host: *string,
	Id: *string,
	IsBackup: interface{},
	Name: *string,
	Port: *f64,
	Status: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.groupName">GroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#group_name ApigwVpcChannelV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#host ApigwVpcChannelV2#host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.isBackup">IsBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#is_backup ApigwVpcChannelV2#is_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.status">Status</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#group_name ApigwVpcChannelV2#group_name}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#host ApigwVpcChannelV2#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBackup`<sup>Optional</sup> <a name="IsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.isBackup"></a>

```go
IsBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#is_backup ApigwVpcChannelV2#is_backup}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.status"></a>

```go
Status *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}.

---

### ApigwVpcChannelV2MemberGroup <a name="ApigwVpcChannelV2MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2MemberGroup {
	Name: *string,
	Description: *string,
	MicroservicePort: *f64,
	MicroserviceTags: *map[string]*string,
	MicroserviceVersion: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#description ApigwVpcChannelV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microservicePort">MicroservicePort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_port ApigwVpcChannelV2#microservice_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceTags">MicroserviceTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_tags ApigwVpcChannelV2#microservice_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceVersion">MicroserviceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_version ApigwVpcChannelV2#microservice_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#description ApigwVpcChannelV2#description}.

---

##### `MicroservicePort`<sup>Optional</sup> <a name="MicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microservicePort"></a>

```go
MicroservicePort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_port ApigwVpcChannelV2#microservice_port}.

---

##### `MicroserviceTags`<sup>Optional</sup> <a name="MicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceTags"></a>

```go
MicroserviceTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_tags ApigwVpcChannelV2#microservice_tags}.

---

##### `MicroserviceVersion`<sup>Optional</sup> <a name="MicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceVersion"></a>

```go
MicroserviceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#microservice_version ApigwVpcChannelV2#microservice_version}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}.

---

### ApigwVpcChannelV2Microservice <a name="ApigwVpcChannelV2Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2Microservice {
	CceConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig,
	CseConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cceConfig">CceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | cce_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cseConfig">CseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | cse_config block. |

---

##### `CceConfig`<sup>Optional</sup> <a name="CceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cceConfig"></a>

```go
CceConfig ApigwVpcChannelV2MicroserviceCceConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

cce_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#cce_config ApigwVpcChannelV2#cce_config}

---

##### `CseConfig`<sup>Optional</sup> <a name="CseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cseConfig"></a>

```go
CseConfig ApigwVpcChannelV2MicroserviceCseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

cse_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#cse_config ApigwVpcChannelV2#cse_config}

---

### ApigwVpcChannelV2MicroserviceCceConfig <a name="ApigwVpcChannelV2MicroserviceCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2MicroserviceCceConfig {
	ClusterId: *string,
	Namespace: *string,
	WorkloadType: *string,
	LabelKey: *string,
	LabelValue: *string,
	WorkloadName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#cluster_id ApigwVpcChannelV2#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#namespace ApigwVpcChannelV2#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadType">WorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#workload_type ApigwVpcChannelV2#workload_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelKey">LabelKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#label_key ApigwVpcChannelV2#label_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelValue">LabelValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#label_value ApigwVpcChannelV2#label_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadName">WorkloadName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#workload_name ApigwVpcChannelV2#workload_name}. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#cluster_id ApigwVpcChannelV2#cluster_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#namespace ApigwVpcChannelV2#namespace}.

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#workload_type ApigwVpcChannelV2#workload_type}.

---

##### `LabelKey`<sup>Optional</sup> <a name="LabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelKey"></a>

```go
LabelKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#label_key ApigwVpcChannelV2#label_key}.

---

##### `LabelValue`<sup>Optional</sup> <a name="LabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelValue"></a>

```go
LabelValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#label_value ApigwVpcChannelV2#label_value}.

---

##### `WorkloadName`<sup>Optional</sup> <a name="WorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadName"></a>

```go
WorkloadName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#workload_name ApigwVpcChannelV2#workload_name}.

---

### ApigwVpcChannelV2MicroserviceCseConfig <a name="ApigwVpcChannelV2MicroserviceCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

&apigwvpcchannelv2.ApigwVpcChannelV2MicroserviceCseConfig {
	EngineId: *string,
	ServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.engineId">EngineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#engine_id ApigwVpcChannelV2#engine_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#service_id ApigwVpcChannelV2#service_id}. |

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#engine_id ApigwVpcChannelV2#engine_id}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/apigw_vpc_channel_v2#service_id ApigwVpcChannelV2#service_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwVpcChannelV2HealthCheckOutputReference <a name="ApigwVpcChannelV2HealthCheckOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2HealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwVpcChannelV2HealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetEnableClientSsl">ResetEnableClientSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetHttpCodes">ResetHttpCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableClientSsl` <a name="ResetEnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetEnableClientSsl"></a>

```go
func ResetEnableClientSsl()
```

##### `ResetHttpCodes` <a name="ResetHttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetHttpCodes"></a>

```go
func ResetHttpCodes()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSslInput">EnableClientSslInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodesInput">HttpCodesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.statusInput">StatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormalInput">ThresholdAbnormalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormalInput">ThresholdNormalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSsl">EnableClientSsl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodes">HttpCodes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormal">ThresholdAbnormal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormal">ThresholdNormal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableClientSslInput`<sup>Optional</sup> <a name="EnableClientSslInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSslInput"></a>

```go
func EnableClientSslInput() interface{}
```

- *Type:* interface{}

---

##### `HttpCodesInput`<sup>Optional</sup> <a name="HttpCodesInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodesInput"></a>

```go
func HttpCodesInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.statusInput"></a>

```go
func StatusInput() *f64
```

- *Type:* *f64

---

##### `ThresholdAbnormalInput`<sup>Optional</sup> <a name="ThresholdAbnormalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormalInput"></a>

```go
func ThresholdAbnormalInput() *f64
```

- *Type:* *f64

---

##### `ThresholdNormalInput`<sup>Optional</sup> <a name="ThresholdNormalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormalInput"></a>

```go
func ThresholdNormalInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `EnableClientSsl`<sup>Required</sup> <a name="EnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSsl"></a>

```go
func EnableClientSsl() interface{}
```

- *Type:* interface{}

---

##### `HttpCodes`<sup>Required</sup> <a name="HttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodes"></a>

```go
func HttpCodes() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `ThresholdAbnormal`<sup>Required</sup> <a name="ThresholdAbnormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormal"></a>

```go
func ThresholdAbnormal() *f64
```

- *Type:* *f64

---

##### `ThresholdNormal`<sup>Required</sup> <a name="ThresholdNormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormal"></a>

```go
func ThresholdNormal() *f64
```

- *Type:* *f64

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwVpcChannelV2HealthCheck
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---


### ApigwVpcChannelV2MemberGroupList <a name="ApigwVpcChannelV2MemberGroupList" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MemberGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwVpcChannelV2MemberGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get"></a>

```go
func Get(index *f64) ApigwVpcChannelV2MemberGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwVpcChannelV2MemberGroupOutputReference <a name="ApigwVpcChannelV2MemberGroupOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MemberGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwVpcChannelV2MemberGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroservicePort">ResetMicroservicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceTags">ResetMicroserviceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceVersion">ResetMicroserviceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMicroservicePort` <a name="ResetMicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroservicePort"></a>

```go
func ResetMicroservicePort()
```

##### `ResetMicroserviceTags` <a name="ResetMicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceTags"></a>

```go
func ResetMicroserviceTags()
```

##### `ResetMicroserviceVersion` <a name="ResetMicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceVersion"></a>

```go
func ResetMicroserviceVersion()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePortInput">MicroservicePortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTagsInput">MicroserviceTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersionInput">MicroserviceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePort">MicroservicePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTags">MicroserviceTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersion">MicroserviceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MicroservicePortInput`<sup>Optional</sup> <a name="MicroservicePortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePortInput"></a>

```go
func MicroservicePortInput() *f64
```

- *Type:* *f64

---

##### `MicroserviceTagsInput`<sup>Optional</sup> <a name="MicroserviceTagsInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTagsInput"></a>

```go
func MicroserviceTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MicroserviceVersionInput`<sup>Optional</sup> <a name="MicroserviceVersionInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersionInput"></a>

```go
func MicroserviceVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MicroservicePort`<sup>Required</sup> <a name="MicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePort"></a>

```go
func MicroservicePort() *f64
```

- *Type:* *f64

---

##### `MicroserviceTags`<sup>Required</sup> <a name="MicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTags"></a>

```go
func MicroserviceTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MicroserviceVersion`<sup>Required</sup> <a name="MicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersion"></a>

```go
func MicroserviceVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwVpcChannelV2MemberList <a name="ApigwVpcChannelV2MemberList" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MemberList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigwVpcChannelV2MemberList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get"></a>

```go
func Get(index *f64) ApigwVpcChannelV2MemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwVpcChannelV2MemberOutputReference <a name="ApigwVpcChannelV2MemberOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MemberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigwVpcChannelV2MemberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetIsBackup">ResetIsBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsBackup` <a name="ResetIsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetIsBackup"></a>

```go
func ResetIsBackup()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackupInput">IsBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.statusInput">StatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackup">IsBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsBackupInput`<sup>Optional</sup> <a name="IsBackupInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackupInput"></a>

```go
func IsBackupInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.statusInput"></a>

```go
func StatusInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackup"></a>

```go
func IsBackup() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigwVpcChannelV2MicroserviceCceConfigOutputReference <a name="ApigwVpcChannelV2MicroserviceCceConfigOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MicroserviceCceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwVpcChannelV2MicroserviceCceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelKey">ResetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelValue">ResetLabelValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetWorkloadName">ResetWorkloadName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelKey` <a name="ResetLabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelKey"></a>

```go
func ResetLabelKey()
```

##### `ResetLabelValue` <a name="ResetLabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelValue"></a>

```go
func ResetLabelValue()
```

##### `ResetWorkloadName` <a name="ResetWorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetWorkloadName"></a>

```go
func ResetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKeyInput">LabelKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValueInput">LabelValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadNameInput">WorkloadNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKey">LabelKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValue">LabelValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadName">WorkloadName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `LabelKeyInput`<sup>Optional</sup> <a name="LabelKeyInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKeyInput"></a>

```go
func LabelKeyInput() *string
```

- *Type:* *string

---

##### `LabelValueInput`<sup>Optional</sup> <a name="LabelValueInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValueInput"></a>

```go
func LabelValueInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadNameInput"></a>

```go
func WorkloadNameInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `LabelKey`<sup>Required</sup> <a name="LabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKey"></a>

```go
func LabelKey() *string
```

- *Type:* *string

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValue"></a>

```go
func LabelValue() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadName"></a>

```go
func WorkloadName() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwVpcChannelV2MicroserviceCceConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---


### ApigwVpcChannelV2MicroserviceCseConfigOutputReference <a name="ApigwVpcChannelV2MicroserviceCseConfigOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MicroserviceCseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwVpcChannelV2MicroserviceCseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwVpcChannelV2MicroserviceCseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---


### ApigwVpcChannelV2MicroserviceOutputReference <a name="ApigwVpcChannelV2MicroserviceOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwvpcchannelv2"

apigwvpcchannelv2.NewApigwVpcChannelV2MicroserviceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwVpcChannelV2MicroserviceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig">PutCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig">PutCseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCceConfig">ResetCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCseConfig">ResetCseConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCceConfig` <a name="PutCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig"></a>

```go
func PutCceConfig(value ApigwVpcChannelV2MicroserviceCceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---

##### `PutCseConfig` <a name="PutCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig"></a>

```go
func PutCseConfig(value ApigwVpcChannelV2MicroserviceCseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---

##### `ResetCceConfig` <a name="ResetCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCceConfig"></a>

```go
func ResetCceConfig()
```

##### `ResetCseConfig` <a name="ResetCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCseConfig"></a>

```go
func ResetCseConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfig">CceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference">ApigwVpcChannelV2MicroserviceCceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfig">CseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference">ApigwVpcChannelV2MicroserviceCseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfigInput">CceConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfigInput">CseConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CceConfig`<sup>Required</sup> <a name="CceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfig"></a>

```go
func CceConfig() ApigwVpcChannelV2MicroserviceCceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference">ApigwVpcChannelV2MicroserviceCceConfigOutputReference</a>

---

##### `CseConfig`<sup>Required</sup> <a name="CseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfig"></a>

```go
func CseConfig() ApigwVpcChannelV2MicroserviceCseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference">ApigwVpcChannelV2MicroserviceCseConfigOutputReference</a>

---

##### `CceConfigInput`<sup>Optional</sup> <a name="CceConfigInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfigInput"></a>

```go
func CceConfigInput() ApigwVpcChannelV2MicroserviceCceConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---

##### `CseConfigInput`<sup>Optional</sup> <a name="CseConfigInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfigInput"></a>

```go
func CseConfigInput() ApigwVpcChannelV2MicroserviceCseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigwVpcChannelV2Microservice
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---



