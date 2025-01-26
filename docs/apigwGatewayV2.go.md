# `apigwGatewayV2` Submodule <a name="`apigwGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwGatewayV2 <a name="ApigwGatewayV2" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2 opentelekomcloud_apigw_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.NewApigwGatewayV2(scope Construct, id *string, config ApigwGatewayV2Config) ApigwGatewayV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config">ApigwGatewayV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config">ApigwGatewayV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode">ResetBandwidthChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize">ResetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode">ResetIngressBandwidthChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize">ResetIngressBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider">ResetLoadbalancerProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts"></a>

```go
func PutTimeouts(value ApigwGatewayV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

---

##### `ResetBandwidthChargingMode` <a name="ResetBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode"></a>

```go
func ResetBandwidthChargingMode()
```

##### `ResetBandwidthSize` <a name="ResetBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize"></a>

```go
func ResetBandwidthSize()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressBandwidthChargingMode` <a name="ResetIngressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode"></a>

```go
func ResetIngressBandwidthChargingMode()
```

##### `ResetIngressBandwidthSize` <a name="ResetIngressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize"></a>

```go
func ResetIngressBandwidthSize()
```

##### `ResetLoadbalancerProvider` <a name="ResetLoadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider"></a>

```go
func ResetLoadbalancerProvider()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin"></a>

```go
func ResetMaintainBegin()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.ApigwGatewayV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.ApigwGatewayV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.ApigwGatewayV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.ApigwGatewayV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigwGatewayV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigwGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigwGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses">PrivateEgressAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress">PublicEgressAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures">SupportedFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName">VpcepServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress">VpcIngressAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput">BandwidthChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput">BandwidthSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput">IngressBandwidthChargingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput">IngressBandwidthSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput">LoadbalancerProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput">SpecIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode">BandwidthChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode">IngressBandwidthChargingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize">IngressBandwidthSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider">LoadbalancerProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId">SpecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd"></a>

```go
func MaintainEnd() *string
```

- *Type:* *string

---

##### `PrivateEgressAddresses`<sup>Required</sup> <a name="PrivateEgressAddresses" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses"></a>

```go
func PrivateEgressAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `PublicEgressAddress`<sup>Required</sup> <a name="PublicEgressAddress" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress"></a>

```go
func PublicEgressAddress() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SupportedFeatures`<sup>Required</sup> <a name="SupportedFeatures" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures"></a>

```go
func SupportedFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts"></a>

```go
func Timeouts() ApigwGatewayV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a>

---

##### `VpcepServiceName`<sup>Required</sup> <a name="VpcepServiceName" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName"></a>

```go
func VpcepServiceName() *string
```

- *Type:* *string

---

##### `VpcIngressAddress`<sup>Required</sup> <a name="VpcIngressAddress" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress"></a>

```go
func VpcIngressAddress() *string
```

- *Type:* *string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BandwidthChargingModeInput`<sup>Optional</sup> <a name="BandwidthChargingModeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput"></a>

```go
func BandwidthChargingModeInput() *string
```

- *Type:* *string

---

##### `BandwidthSizeInput`<sup>Optional</sup> <a name="BandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput"></a>

```go
func BandwidthSizeInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressBandwidthChargingModeInput`<sup>Optional</sup> <a name="IngressBandwidthChargingModeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput"></a>

```go
func IngressBandwidthChargingModeInput() *string
```

- *Type:* *string

---

##### `IngressBandwidthSizeInput`<sup>Optional</sup> <a name="IngressBandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput"></a>

```go
func IngressBandwidthSizeInput() *f64
```

- *Type:* *f64

---

##### `LoadbalancerProviderInput`<sup>Optional</sup> <a name="LoadbalancerProviderInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput"></a>

```go
func LoadbalancerProviderInput() *string
```

- *Type:* *string

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput"></a>

```go
func MaintainBeginInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SpecIdInput`<sup>Optional</sup> <a name="SpecIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput"></a>

```go
func SpecIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BandwidthChargingMode`<sup>Required</sup> <a name="BandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode"></a>

```go
func BandwidthChargingMode() *string
```

- *Type:* *string

---

##### `BandwidthSize`<sup>Required</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize"></a>

```go
func BandwidthSize() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IngressBandwidthChargingMode`<sup>Required</sup> <a name="IngressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode"></a>

```go
func IngressBandwidthChargingMode() *string
```

- *Type:* *string

---

##### `IngressBandwidthSize`<sup>Required</sup> <a name="IngressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize"></a>

```go
func IngressBandwidthSize() *f64
```

- *Type:* *f64

---

##### `LoadbalancerProvider`<sup>Required</sup> <a name="LoadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider"></a>

```go
func LoadbalancerProvider() *string
```

- *Type:* *string

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin"></a>

```go
func MaintainBegin() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId"></a>

```go
func SpecId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwGatewayV2Config <a name="ApigwGatewayV2Config" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

&apigwgatewayv2.ApigwGatewayV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityZones: *[]*string,
	Name: *string,
	SecurityGroupId: *string,
	SpecId: *string,
	SubnetId: *string,
	VpcId: *string,
	BandwidthChargingMode: *string,
	BandwidthSize: *f64,
	Description: *string,
	Id: *string,
	IngressBandwidthChargingMode: *string,
	IngressBandwidthSize: *f64,
	LoadbalancerProvider: *string,
	MaintainBegin: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11.apigwGatewayV2.ApigwGatewayV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId">SpecId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode">BandwidthChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize">BandwidthSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode">IngressBandwidthChargingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize">IngressBandwidthSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider">LoadbalancerProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}.

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId"></a>

```go
SpecId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}.

---

##### `BandwidthChargingMode`<sup>Optional</sup> <a name="BandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode"></a>

```go
BandwidthChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}.

---

##### `BandwidthSize`<sup>Optional</sup> <a name="BandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize"></a>

```go
BandwidthSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressBandwidthChargingMode`<sup>Optional</sup> <a name="IngressBandwidthChargingMode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode"></a>

```go
IngressBandwidthChargingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}.

---

##### `IngressBandwidthSize`<sup>Optional</sup> <a name="IngressBandwidthSize" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize"></a>

```go
IngressBandwidthSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}.

---

##### `LoadbalancerProvider`<sup>Optional</sup> <a name="LoadbalancerProvider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider"></a>

```go
LoadbalancerProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin"></a>

```go
MaintainBegin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts"></a>

```go
Timeouts ApigwGatewayV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}

---

### ApigwGatewayV2Timeouts <a name="ApigwGatewayV2Timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

&apigwgatewayv2.ApigwGatewayV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwGatewayV2TimeoutsOutputReference <a name="ApigwGatewayV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/apigwgatewayv2"

apigwgatewayv2.NewApigwGatewayV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigwGatewayV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



